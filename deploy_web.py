#!/usr/bin/env python3
import os
import hashlib
import re
import shutil
import subprocess

# Paths
SRC_WEB_DIR = "web"
DEST_WEB_DIR = "/Users/joelewis/Code/sanbeiji.github.io/docs/insults"
SW_FILE_NAME = "sw.js"

# Files to hash for cache invalidation
HASH_FILES = [
    "index.html",
    "manifest.json",
    "scripts/slur_engine.js",
    "styles/yeolde.css",
]

def calculate_consolidated_hash():
    hasher = hashlib.md5()
    for rel_path in HASH_FILES:
        full_path = os.path.join(SRC_WEB_DIR, rel_path)
        if not os.path.exists(full_path):
            print(f"Warning: File {full_path} not found for hashing.")
            continue
        with open(full_path, 'rb') as f:
            while chunk := f.read(8192):
                hasher.update(chunk)
    return hasher.hexdigest()[:10]  # Keep it short and clean

def update_service_worker(new_hash):
    sw_path = os.path.join(SRC_WEB_DIR, SW_FILE_NAME)
    if not os.path.exists(sw_path):
        print(f"Error: {sw_path} not found.")
        return False
    
    with open(sw_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = r"const CACHE_NAME = '[^']+'; // UPDATED BY DEPLOY SCRIPT"
    replacement = f"const CACHE_NAME = 'bard-insults-{new_hash}'; // UPDATED BY DEPLOY SCRIPT"
    
    if not re.search(r"const CACHE_NAME = '[^']+'; // UPDATED BY DEPLOY SCRIPT", content):
        # Fallback if comment is missing or altered
        pattern = r"const CACHE_NAME = '[^']+';"
        replacement = f"const CACHE_NAME = 'bard-insults-{new_hash}'; // UPDATED BY DEPLOY SCRIPT"
        
    updated_content = re.sub(pattern, replacement, content)
    
    with open(sw_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"Updated {sw_path} cache name with hash: {new_hash}")
    return True

def sync_to_destination():
    if not os.path.exists(DEST_WEB_DIR):
        print(f"Error: Destination directory {DEST_WEB_DIR} does not exist.")
        return False
    
    print(f"Syncing web assets to {DEST_WEB_DIR}...")
    
    # Sync files and preserve hierarchy
    for root, dirs, files in os.walk(SRC_WEB_DIR):
        rel_path = os.path.relpath(root, SRC_WEB_DIR)
        dest_dir = os.path.normpath(os.path.join(DEST_WEB_DIR, rel_path))
        
        os.makedirs(dest_dir, exist_ok=True)
        
        for file in files:
            if file == ".DS_Store":
                continue
            src_file = os.path.join(root, file)
            dest_file = os.path.join(dest_dir, file)
            shutil.copy2(src_file, dest_file)
            
    print("Sync complete.")
    return True

def run_git_status(repo_path, repo_name):
    print("\n" + "=" * 50)
    print(f"Git status for {repo_name} ({repo_path}):")
    print("=" * 50)
    try:
        result = subprocess.run(["git", "status"], cwd=repo_path, capture_output=True, text=True, check=True)
        print(result.stdout)
    except Exception as e:
        print(f"Failed to run git status in {repo_path}: {e}")

def main():
    # Make sure we run from the project root directory
    project_root = os.path.dirname(os.path.abspath(__file__))
    os.chdir(project_root)
    
    # 1. Calculate checksum of assets
    new_hash = calculate_consolidated_hash()
    
    # 2. Update sw.js locally
    if not update_service_worker(new_hash):
        print("Failed to update service worker. Aborting sync.")
        return
        
    # 3. Copy files to target site repo docs/insults/
    if not sync_to_destination():
        print("Failed to sync assets.")
        return
        
    # 4. Run git status on both repos
    run_git_status(".", "shakespearean-insults")
    run_git_status("/Users/joelewis/Code/sanbeiji.github.io", "sanbeiji.github.io")

if __name__ == "__main__":
    main()
