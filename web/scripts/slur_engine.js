(() => {
  'use strict';

  // INSULT WORD DATABASES (Expanded with highly authentic salacious/lewd terms)
  const insult1 = ["apish","artless","babbling","barbarous","barm-frothy","base","bastardly","bawdy","bawling","beastly","beslubbering","bestial","boggler","boorish","bootless","brain-sick","braindamaged","brazen","brutish","burly-boned","caluminous","cankered","chambering","churlish","clamorous","clouted","clownish","cloyed","cockered","cogging","cozening","craggy","craven","crusty","cullionly","currish","damnable","dankish","degenerate","dissembling","doltish","droning","dwarfish","egregious","epicurean","errant","false","fatuous","fawning","feculent","fenny","fobbing","frothy","froward","fusty","giftless","gleeking","goatish","gorbellied","greasy","grim","groveling","haggard","hide-bound","hollow","horny","idiotic","ignoble","ignominious","impertinent","imperial","inconstant","infectious","infidel","ingrateful","insolent","jaded","jarring","knavish","lascivious","lecherous","loathsome","loggerheaded","lousy","lubberly","lumpish","lute-stringing","malodorous","mammering","mangled","mangy","marbled","mewling","misbegotten","mitered","monkish","muddy","mutinous","odiferous","officious","paunchy","peevish","pernicious","pestilent","pocky","poxed","prating","pribbling","puking","puny","qualling","querulous","ragamuffin","rank","rascal","rascally","reeky","rheumatic","ribald","roguish","ruffianly","ruttish","ruttish-minded","saucy","savage","scabbed","scald","scurrile","scurvy","senseless","servile","slanderous","slovenly","slubbery","sluggish","sniveling","sottish","spleeny","spleenish","spongy","starving","stubborn","sullied","supercilious","surly","tainted","tardy","thievish","thought-sick","tottering","treacherous","ungrateful","unlettered","unmannerly","unmuzzled","unnatural","unsavory","untoward","vain","venomed","villainous","viperous","vulgarly","wanton","warped","waspish","wayward","weedy","wenching","whorish","wimpled","withered","witless","woolly","worm-eaten","yeasty"];
  const insult2 = ["all-praising","ass-headed","assay-piece","baboon-witted","bare-picked","base-court","bat-fowling","beef-witted","beetle-browed","beetle-headed","blear-eyed","block-headed","blood-boltered","bloody-minded","blunt-witted","boil-brained","brain-sickly","brazen-faced","bull-headed","butter-blooded","calcine-brained","camel-backed","candle-waster","clapper-clawed","clapper-clawing","clay-brained","cloven-footed","codpiece-wearing","cold-blooded","common-kissing","common-staling","copper-nosed","coward-hearted","crook-pated","crow-keeping","dagger-dreading","dismal-dreaming","ditch-delivered","dizzy-eyed","doghearted","dread-bolted","dry-bitten","dull-disposed","earth-vexing","elf-skinned","empty-headed","eye-offending","faint-hearted","false-hearted","fat-kidneyed","feather-brained","fen-sucked","fitchew-smelling","flagon-draining","flap-mouthed","flibbertigibbet-led","fly-bitten","folly-fallen","fool-born","foul-mouthed","foul-spoken","foul-tongued","fraud-practising","frost-bitten","full-gorged","gap-toothed","gleat-sucking","goat-blooded","goose-feathered","grease-stained","green-eyed","grim-looking","guts-griping","haggard-minded","half-blooded","half-faced","half-starved","hasty-witted","hedge-born","hell-hated","high-stomached","hollow-hearted","horse-drenching","idle-headed","ill-boding","ill-breeding","ill-composed","ill-divining","ill-fated","ill-nurtured","ill-starred","ill-tempered","iron-witted","jolt-headed","knotty-pated","lazy-yawning","lean-witted","lily-livered","lout-born","mad-brained","malmsey-nosed","marble-hearted","marrow-eating","milk-livered","mock-water","motley-clad","motley-minded","muddy-mettled","mutton-mongering","night-wandering","onion-eyed","open-fanged","pale-hearted","patch-bunched","pea-brained","pinch-spotted","pit-fomented","plume-plucked","pottle-deep","pox-marked","pox-riddled","puddle-docked","rag-tag","rampallian","rascal-like","rat-catching","rat-smelling","raw-boned","reeling-ripe","rot-chewing","rough-hewn","rude-growing","rug-headed","rump-fed","sacrilegious","saucy-tongued","scab-picking","scullion-born","scurvy-valiant","shard-borne","sheep-biting","sheep-shearing","short-armed","shough-haunting","shrill-tongued","snipe-brained","snob-nosed","snow-broth-cooled","sodden-witted","sore-eyed","sour-faced","spawn-fed","spur-galled","steeple-hatted","stiff-necked","strumpet-minded","sugar-candied","swag-bellied","tadpole-sucking","tallow-faced","tardy-gaited","tatty-headed","tavern-trenching","thick-eyed","thick-skin","thick-skulled","thimble-headed","three-suited","tickle-brained","tile-pinched","toad-spotted","toffee-nosed","troth-plighted","trumpet-tongued","unbacked-colt","unchin-snouted","under-skulled","unlicked-cub","unwash'd","viper-tongued","wart-encrusted","weak-hinged","weather-beaten","weather-bitten","web-footed","whelp-born","white-livered","whoreson","wort-curdled","yellow-blooded"];
  const insult3 = ["abomination","apple-john","arch-villain","ass-head","baboon","baggage","barbermonger","barnacle","barrow-pig","basket-hilt","bastinado","bawd","bed-swerver","beggars-bush","blabbermouth","bladder","blind-harper","blind-worm","block","blumpkin","boar-pig","bobolyne","bodkin","boor","brawl-monger","brewage","bugbear","bull's-pizzle","bum-bailey","bumbard","buns-muncher","callet","canker","canker-bloss","carbonado","carrion","catamite","changeling","cheese-pairing","chough","clack-dish","clam-basher","clatty-bone","climax of unquiet","clinker","clotpole","cloud-capp'd-fool","clouter","clown","cock-sparrow","codpiece","cokes","collop","collywobble","coney-catcher","cooper","cot-quean","court-cupboard","cow-dung","coxcomb","coystril","cozening-cotquean","cozening-drab","craven-cricket","cumberground","cumberworld","cur","cur-dog","custom-shrunk","cutpurse","dalcop","dancy-dandy","dastard","death-token","devil-monk","dewberry","dim-clot","dish-clout","distilment","dog-fish","dolt","donkey","dor","drab","dragon-fly","dromedary","dunghill","earth-worm","eater of broken meats","egg","elf-skin","fishmonger","flap-dragon","flax-wench","flibbertigibbet","flirt-gill","flunkey","foolet","fool","foot-licker","fribble","fry","fustilarian","garboil","gibbet-maker","giglet","gleek","gorbelly","greenhorn","grimgribber","gruntling","gubbert-snatch","gudgeon","haggard","haggard-witch","hand-basket","harecop","harpy","hedge-pig","hen-bane","hobgoblin","hoddydoddy","horn-beast","horse-drench","hugger-mugge","idler","iniquity","jack-a-nape","jack-daw","jackanapes","jackdaw","joithead","jolt-head","jowl","kettle-drum","kitchen-malkin","knave","leman","lewdster","lickspittle","loon","losel","lout","lown","maggot","maggot-pie","malkin","malcontent","malt-horse","malt-worm","mammet","measle","milksop","minnow","minx","miscreant","mite","moldwarp","mome","monster","moon-calf","mould-warp","mumble-news","muscardin","musk-cat","mutterer","mutton-eater","ninnycock","nit","noddy","nut-hook","nuthook","owl-shriek","pander","paramour","patch","patche","paunch","peajacket","peasant","penny-father","pick-thank","pickthank","picture-of-ill-luck","pigeon-egg","pignut","pin-buttock","pin-feather","pinch-penny","pismire","plague-rat","popinjay","poppet","porker","prig","profligate","pumpion","punck","punk","puttock","quean","quim","rafter-louse","rampallian","rapscallion","rascal","ratsbane","ribald-nag","rogue","ronyon","roynish-lown","ruffian","rumbelow","runagate","runaway","runnion","scale","scamble","scamel","scanterling","scobberlotcher","scrag","scroyle","scrub","scullian","scut","shark","shave-beggar","skainsmate","skipjack","sloven","slug","small-beer","smeer","smoothen-scamp","smudge","smug","snipe","sorcerer","sorceress","stale","starveling","stewed prune","stench","stock-fish","stool-ball","strike-block","strumpet","swag-bellied-fool","tallow-catch","tar-box","tittle-tattle","toad","troll-me-dame","trot","trull","turnspit","tyrant","unnecessary letter","unrefined-slug","varlot","vassal","villain","viper","vixen","waffler","wagtail","wanderer","water-fly","whey-face","whipstock","whiting-mop","whoreson","windbag","witcracker","wittol","woodcock","wool-sack","wretch"];
  const targetParts = ["wit","face","soul","virtue","tongue","visage","countenance","pate","lineage","heart","spirit","intellect","nature","conduct","manner","presence","breeding","company","worth","stature","disposition","character","pedigree","judgment","reputation"];

  // STATE MANAGEMENT
  let currentInsultText = "";
  let typingInterval = null;
  let history = JSON.parse(localStorage.getItem('shakespearean_insult_history')) || [];

  // DOM ELEMENTS
  const resultDiv = document.getElementById("result");
  const insultBtn = document.getElementById("insult_me");
  const speakBtn = document.getElementById("btn_speak");
  const copyBtn = document.getElementById("btn_copy");
  const shareBtn = document.getElementById("btn_share");
  const shareMenu = document.getElementById("share_menu");
  const shareBsky = document.getElementById("share_bsky");
  const shareThreads = document.getElementById("share_threads");
  const shareCopy = document.getElementById("share_copy");
  const moreBtn = document.getElementById("btn_more");
  const moreMenu = document.getElementById("more_menu");
  const moreFullscreen = document.getElementById("more_fullscreen");
  const historyPanel = document.getElementById("history_panel");
  const historyToggle = document.getElementById("history_toggle");
  const historyList = document.getElementById("history_list");
  const toast = document.getElementById("toast");

  // SETTINGS ELEMENTS
  const btnSettings = document.getElementById("btn_settings");
  const moreSettings = document.getElementById("more_settings");
  const settingsModal = document.getElementById("settings_modal");
  const closeSettings = document.getElementById("close_settings");
  const geminiSettings = document.getElementById("gemini_settings");
  const geminiApiKeyInput = document.getElementById("gemini_api_key");
  const ttsEngineRadios = document.querySelectorAll('input[name="tts_engine"]');
  const storageTypeRadios = document.querySelectorAll('input[name="storage_type"]');
  const storageWarning = document.getElementById("storage_warning");

  // SETTINGS STATE
  let currentSettings = {
    ttsEngine: 'native', // 'native' or 'gemini'
    storageType: 'session', // 'session' or 'local'
    geminiApiKey: ''
  };

  const speakerIconSVG = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
    </svg>
  `;
  const spinnerSVG = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="animation: spin 1s linear infinite;">
      <path d="M12 2v4a6 6 0 0 1 6 6h4a10 10 0 0 0-10-10z"/>
    </svg>
    <style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
  `;

  // LOAD SETTINGS
  function loadSettings() {
    // Try local storage first, then session storage
    const savedLocal = localStorage.getItem('shakespearean_settings');
    const savedSession = sessionStorage.getItem('shakespearean_settings');
    
    if (savedLocal) {
      currentSettings = JSON.parse(savedLocal);
    } else if (savedSession) {
      currentSettings = JSON.parse(savedSession);
    }

    // Sync UI with loaded settings
    ttsEngineRadios.forEach(r => r.checked = r.value === currentSettings.ttsEngine);
    storageTypeRadios.forEach(r => r.checked = r.value === currentSettings.storageType);
    geminiApiKeyInput.value = currentSettings.geminiApiKey || '';
    
    updateSettingsUI();
  }

  function saveSettings() {
    currentSettings.ttsEngine = document.querySelector('input[name="tts_engine"]:checked').value;
    currentSettings.storageType = document.querySelector('input[name="storage_type"]:checked').value;
    currentSettings.geminiApiKey = geminiApiKeyInput.value.trim();

    const dataString = JSON.stringify(currentSettings);
    
    if (currentSettings.storageType === 'local') {
      localStorage.setItem('shakespearean_settings', dataString);
      sessionStorage.removeItem('shakespearean_settings');
    } else {
      sessionStorage.setItem('shakespearean_settings', dataString);
      localStorage.removeItem('shakespearean_settings');
    }
  }

  function updateSettingsUI() {
    const isGemini = document.querySelector('input[name="tts_engine"]:checked').value === 'gemini';
    geminiSettings.style.display = isGemini ? 'flex' : 'none';
    
    const isLocal = document.querySelector('input[name="storage_type"]:checked').value === 'local';
    storageWarning.style.display = isLocal ? 'block' : 'none';
  }

  // GENERATOR HELPER
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function getAOrAn(word) {
    if (!word) return "a";
    const firstChar = word.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstChar) ? "an" : "a";
  }

  function getStems(w) {
    if (!w) return [];
    const parts = w.toLowerCase().split(/[\s\-]/);
    const ignore = new Set(["head", "headed", "witted", "faced", "brained", "minded", "blooded", "born", "borne", "bred", "heart", "hearted", "eyed", "like", "fool", "piece", "clad", "skin", "skinned", "worm", "stone", "bone", "meat", "sour", "star", "time", "suck", "sucking", "felled", "fallen", "grow", "growing", "catching", "catcher", "picking", "keeping", "eating", "eater"]);
    const stems = [];
    for (const p of parts) {
      if (ignore.has(p) || p.length < 3) continue;
      stems.push(p.slice(0, 4));
    }
    return stems;
  }

  function hasStemOverlap(words) {
    const allStems = new Set();
    let totalCount = 0;
    for (const w of words) {
      if (!w) continue;
      const stems = getStems(w);
      for (const s of stems) {
        allStems.add(s);
        totalCount++;
      }
    }
    return allStems.size < totalCount;
  }

  function generateInsultString() {
    if (Math.random() < 0.01) {
      const exactQuotes = [
        "Away, you starveling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!",
        "Thou art a boil, a plague sore, an embossed carbuncle in my corrupted blood.",
        "A knave; a rascal; an eater of broken meats; a base, proud, shallow, beggarly, three-suited, hundred-pound, filthy, worsted-stocking knave...",
        "You beastly knave, know you no reverence?",
        "A milksop, one that never in his life felt so much cold as over shoes in snow.",
        "Thou sodden-witted lord! Thou hast no more brain than I have in my elbows.",
        "Villain, I have done thy mother.",
        "You puppyish and scurvy lout!",
        "Hence, rotten thing! or I shall shake thy bones out of thy garments.",
        "A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of not one good quality.",
        "The tartness of his face sours ripe grapes.",
        "She is spherical, like a globe. I could find out countries in her.",
        "Scratching could not make it worse... such a face as yours.",
        "Thou smell of mountain goat.",
        "I was searching for a fool when I found you."
      ];
      return getRandomItem(exactQuotes);
    }

    // Shakespearean sentence structures with weighted probabilities and token dependencies
    const templates = [
      { weight: 40, uses: [1, 2, 3], fn: (adj1, adj2, noun, targetPart) => `Thou ${adj1}, ${adj2} ${noun}!` },
      { weight: 40, uses: [2, 3],    fn: (adj1, adj2, noun, targetPart) => `Thy ${targetPart} is ${getAOrAn(adj2)} ${adj2} ${noun}!` },
      { weight: 25, uses: [1, 2, 3], fn: (adj1, adj2, noun, targetPart) => `Thou art as ${adj1} as ${getAOrAn(adj2)} ${adj2} ${noun}!` },
      { weight: 5,  uses: [1, 2, 3], fn: (adj1, adj2, noun, targetPart) => `Out of my sight, thou ${adj1}, ${adj2} ${noun}!` },
      { weight: 3,  uses: [1, 3],    fn: (adj1, adj2, noun, targetPart) => `I do desire we may be better strangers, thou ${adj1} ${noun}!` },
      { weight: 3,  uses: [1, 3],    fn: (adj1, adj2, noun, targetPart) => `Would thou wert clean enough to spit upon, thou ${adj1} ${noun}!` },
      { weight: 3,  uses: [2, 3],    fn: (adj1, adj2, noun, targetPart) => `More of thy conversation would infect my brain, thou ${adj2} ${noun}!` },
      { weight: 3,  uses: [1, 2, 3], fn: (adj1, adj2, noun, targetPart) => `I am sick when I do look on thee, thou ${adj1}, ${adj2} ${noun}!` }
    ];

    const totalWeight = templates.reduce((sum, t) => sum + t.weight, 0);
    let randomNum = Math.random() * totalWeight;

    let selectedTemplate = templates[0];
    for (const template of templates) {
      if (randomNum < template.weight) {
        selectedTemplate = template;
        break;
      }
      randomNum -= template.weight;
    }

    let adj1, adj2, noun;
    while (true) {
      adj1 = getRandomItem(insult1);
      adj2 = getRandomItem(insult2);
      noun = getRandomItem(insult3);
      const usedWords = [];
      if (selectedTemplate.uses.includes(1)) usedWords.push(adj1);
      if (selectedTemplate.uses.includes(2)) usedWords.push(adj2);
      if (selectedTemplate.uses.includes(3)) usedWords.push(noun);
      if (!hasStemOverlap(usedWords)) break;
    }

    const targetPart = getRandomItem(targetParts);

    return capitalize(selectedTemplate.fn(adj1, adj2, noun, targetPart));
  }

  // TYPING EFFECT REVEAL
  function displayInsultWithTypingEffect(text) {
    if (typingInterval) clearInterval(typingInterval);
    
    currentInsultText = text;
    resultDiv.textContent = "";
    resultDiv.classList.add("typing");
    
    // Disable action buttons during active typing
    speakBtn.disabled = true;
    copyBtn.disabled = true;
    shareBtn.disabled = true;
    insultBtn.disabled = true;
    if (shareMenu) {
      shareMenu.classList.remove("show");
      shareMenu.setAttribute("aria-hidden", "true");
    }

    let i = 0;
    typingInterval = setInterval(() => {
      if (i < text.length) {
        resultDiv.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        resultDiv.classList.remove("typing");
        
        // Re-enable controls once fully typed
        speakBtn.disabled = false;
        copyBtn.disabled = false;
        shareBtn.disabled = false;
        insultBtn.disabled = false;

        // Add to history
        addToHistory(text);
      }
    }, 45); // Sweet spot typing speed
  }

  // TOAST MANAGER
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    toast.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      toast.classList.remove("show");
      toast.setAttribute("aria-hidden", "true");
    }, 2500);
  }

  // Caching the selected voice to prevent unnecessary calculations
  let cachedVoice = null;

  // COMPOSITE SCORING ALGORITHM FOR HIGHEST QUALITY VOICES
  function getBestVoice() {
    if (cachedVoice) return cachedVoice;
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const scored = voices.map(voice => {
      const nameLower = voice.name.toLowerCase();
      const langLower = voice.lang.toLowerCase().replace('_', '-');
      
      // Filter out non-English voices
      if (!langLower.startsWith('en')) {
        return { voice, score: -1 };
      }

      let score = 0;

      // 1. Accent Category Score (British English gets maximum bonus)
      const isBritish = langLower === 'en-gb' || 
                        langLower.startsWith('en-gb') || 
                        nameLower.includes('united kingdom') || 
                        nameLower.includes('uk english') || 
                        nameLower.includes('great britain');
      
      if (isBritish) {
        score += 1000;
      } else {
        score += 500; // Other English accents (US, AU, CA, IN, etc.)
      }

      // 2. Quality Tier Classification Heuristics
      const premiumKeywords = ['natural', 'neural', 'wavenet', 'premium', 'enhanced', 'online', 'network'];
      const roboticKeywords = ['legacy', 'standard', 'compact', 'samantha', 'zira', 'david', 'local', 'fallback'];
      
      const hasPremiumKeyword = premiumKeywords.some(kw => nameLower.includes(kw));
      const hasRoboticKeyword = roboticKeywords.some(kw => nameLower.includes(kw));

      if (hasRoboticKeyword) {
        score -= 500;
      } else if (hasPremiumKeyword) {
        score += 1000;
      } else if ((nameLower.includes('google') || nameLower.includes('siri') || voice.localService === false) && !nameLower.includes('local')) {
        // Google/Siri online voices are high-quality high-fidelity neural voices
        score += 600;
      } else {
        // Standard basic system voice
        score += 200;
      }

      // Specifically penalize legacy metallic non-premium Daniel & Kate voices
      if (nameLower.includes('daniel') || nameLower.includes('kate')) {
        const isEnhanced = nameLower.includes('premium') || nameLower.includes('enhanced') || nameLower.includes('natural');
        if (!isEnhanced) {
          score -= 400; // Strong penalty to avoid the legacy robotic versions
        }
      }

      return { voice, score };
    });

    // Filter out invalid and sort descending
    const validScored = scored.filter(s => s.score >= 0);
    if (validScored.length === 0) return null;

    validScored.sort((a, b) => b.score - a.score);

    console.log("Antigravity TTS Scored Voices:", validScored.map(s => `${s.voice.name} (${s.voice.lang}) -> score: ${s.score}`));

    cachedVoice = validScored[0].voice;
    return cachedVoice;
  }

  // TEXT TO SPEECH ENGINE (Speech Synthesis vs Gemini)
  async function speakInsult() {
    if (!currentInsultText) return;

    if (currentSettings.ttsEngine === 'gemini') {
      await speakWithGemini(currentInsultText);
    } else {
      speakWithNative(currentInsultText);
    }
  }

  function speakWithNative(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.82;
    utterance.pitch = 0.85;
    const preferredVoice = getBestVoice();
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    }
    window.speechSynthesis.speak(utterance);
  }

  async function speakWithGemini(text) {
    if (!currentSettings.geminiApiKey) {
      showToast("API Key required for Gemini TTS!");
      if (settingsModal) settingsModal.setAttribute("aria-hidden", "false");
      return;
    }

    const originalHtml = speakBtn.innerHTML;
    speakBtn.innerHTML = spinnerSVG;
    speakBtn.disabled = true;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-tts-preview:generateContent?key=${currentSettings.geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Say dramatically in an Elizabethan-period English actor accent: ${text}`
            }]
          }],
          generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: "Charon" // Using the hardcoded dramatic male voice
                }
              }
            }
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      if (!data.candidates || !data.candidates[0].content || !data.candidates[0].content.parts[0].inlineData) {
        throw new Error("Invalid response from Gemini API");
      }

      const b64Data = data.candidates[0].content.parts[0].inlineData.data;
      await playPcmAudio(b64Data);

    } catch (err) {
      console.error("Gemini TTS Error: ", err);
      showToast("Failed to generate voice!");
    } finally {
      speakBtn.innerHTML = originalHtml;
      speakBtn.disabled = false;
    }
  }

  function playPcmAudio(b64Data) {
    return new Promise((resolve, reject) => {
      try {
        const binaryString = atob(b64Data);
        const len = binaryString.length;
        const numSamples = len / 2; // 16-bit PCM = 2 bytes per sample
        
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const audioBuffer = audioCtx.createBuffer(1, numSamples, 24000); // 24kHz Mono
        const channelData = audioBuffer.getChannelData(0);

        for (let i = 0; i < numSamples; i++) {
          const byte1 = binaryString.charCodeAt(i * 2);
          const byte2 = binaryString.charCodeAt(i * 2 + 1);
          let sample = (byte2 << 8) | byte1;
          if (sample >= 0x8000) sample -= 0x10000;
          channelData[i] = sample / 0x8000;
        }

        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.onended = resolve;
        source.start();
      } catch (err) {
        reject(err);
      }
    });
  }

  // CLIPBOARD COPY
  function copyToClipboard(text, successMsg = "Copied to parchment!") {
    if (!text) return;
    navigator.clipboard.writeText(text)
      .then(() => showToast(successMsg))
      .catch(err => {
        console.error("Failed to write to clipboard: ", err);
        showToast("Failed to copy!");
      });
  }

  function getShareText(text) {
    const encodedText = encodeURIComponent(text);
    return `"${text}" - Punish thyself with the Shakespearean Insult Machine! https://sanbeiji.com/insults/?insult=${encodedText}`;
  }

  function handleShareOption(network, insultText, menuElement) {
    if (!insultText) return;
    const text = getShareText(insultText);
    const url = "https://sanbeiji.com/insults";
    
    if (network === "bsky") {
      const bskyUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(text)}`;
      window.open(bskyUrl, '_blank', 'noopener,noreferrer');
    } else if (network === "threads") {
      const threadsUrl = `https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`;
      window.open(threadsUrl, '_blank', 'noopener,noreferrer');
    } else if (network === "copy") {
      copyToClipboard(text, "Copied to parchment!");
    }
    
    if (menuElement) {
      menuElement.classList.remove("show");
      menuElement.setAttribute("aria-hidden", "true");
    }
  }

  // HISTORY PANEL PERSISTENCE & RENDERING
  function addToHistory(insult) {
    // Prevent duplicate consecutive entries
    if (history.length > 0 && history[0] === insult) return;

    history.unshift(insult);
    if (history.length > 10) history.pop(); // Limit to 10 items

    localStorage.setItem('shakespearean_insult_history', JSON.stringify(history));
    renderHistory();
  }

  function renderHistory() {
    historyList.innerHTML = "";
    
    if (history.length === 0) {
      historyList.innerHTML = `<li class="history-empty">No sins committed yet...</li>`;
      return;
    }

    history.forEach((insult) => {
      const li = document.createElement("li");
      li.className = "history-item";

      const span = document.createElement("span");
      span.className = "history-item-text";
      span.textContent = insult;

      const shareWrapper = document.createElement("div");
      shareWrapper.className = "share-wrapper";

      const shareBtn = document.createElement("button");
      shareBtn.className = "history-item-share";
      shareBtn.title = "Share Sin";
      shareBtn.setAttribute("aria-label", `Share insult: ${insult}`);
      shareBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
        </svg>
      `;
      
      const itemShareMenu = document.createElement("div");
      itemShareMenu.className = "share-dropdown history-share-dropdown";
      itemShareMenu.setAttribute("aria-hidden", "true");

      const networks = [
        { id: "bsky", icon: "🦋", text: "Bluesky" },
        { id: "threads", icon: "🧵", text: "Threads" },
        { id: "copy", icon: "📋", text: "Copy Text" }
      ];

      networks.forEach(net => {
        const itemBtn = document.createElement("button");
        itemBtn.className = "share-item";
        itemBtn.innerHTML = `<span class="share-item-icon">${net.icon}</span><span class="share-item-text">${net.text}</span>`;
        itemBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          handleShareOption(net.id, insult, itemShareMenu);
        });
        itemShareMenu.appendChild(itemBtn);
      });
      
      shareBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelectorAll(".history-share-dropdown.show").forEach(m => {
          if (m !== itemShareMenu) {
            m.classList.remove("show");
            m.setAttribute("aria-hidden", "true");
          }
        });
        
        const isShowing = itemShareMenu.classList.contains("show");
        if (isShowing) {
          itemShareMenu.classList.remove("show");
          itemShareMenu.setAttribute("aria-hidden", "true");
        } else {
          itemShareMenu.classList.add("show");
          itemShareMenu.setAttribute("aria-hidden", "false");
        }
      });

      shareWrapper.appendChild(shareBtn);
      shareWrapper.appendChild(itemShareMenu);

      li.appendChild(span);
      li.appendChild(shareWrapper);
      historyList.appendChild(li);
    });
  }

  // EVENT LISTENERS AND INITIALIZATION
  document.addEventListener("DOMContentLoaded", () => {
    // Render history and settings on page load
    renderHistory();
    loadSettings();

    // Check for shared insult in URL
    const urlParams = new URLSearchParams(window.location.search);
    const sharedInsult = urlParams.get('insult');
    if (sharedInsult) {
      setTimeout(() => {
        displayInsultWithTypingEffect(sharedInsult);
      }, 300);
      // Clean up URL without refreshing the page
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({path:newUrl}, '', newUrl);
    }

    // Main Insult Trigger
    insultBtn.addEventListener("click", () => {
      const randomInsult = generateInsultString();
      displayInsultWithTypingEffect(randomInsult);
    });

    // Speech Synthesis voice list loading safety
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        cachedVoice = null; // Reset cached voice to re-evaluate when voices change
        getBestVoice();
      };
    }

    // Secondary Control Event Listeners
    speakBtn.addEventListener("click", speakInsult);
    copyBtn.addEventListener("click", () => copyToClipboard(currentInsultText));
    
    shareBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!shareMenu) return;
      const isShowing = shareMenu.classList.contains("show");
      if (isShowing) {
        shareMenu.classList.remove("show");
        shareMenu.setAttribute("aria-hidden", "true");
      } else {
        shareMenu.classList.add("show");
        shareMenu.setAttribute("aria-hidden", "false");
      }
    });

    if (shareBsky) shareBsky.addEventListener("click", (e) => { e.stopPropagation(); handleShareOption("bsky", currentInsultText, shareMenu); });
    if (shareThreads) shareThreads.addEventListener("click", (e) => { e.stopPropagation(); handleShareOption("threads", currentInsultText, shareMenu); });
    if (shareCopy) shareCopy.addEventListener("click", (e) => { e.stopPropagation(); handleShareOption("copy", currentInsultText, shareMenu); });

    if (moreBtn) {
      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!moreMenu) return;
        const isShowing = moreMenu.classList.contains("show");
        if (isShowing) {
          moreMenu.classList.remove("show");
          moreMenu.setAttribute("aria-hidden", "true");
        } else {
          moreMenu.classList.add("show");
          moreMenu.setAttribute("aria-hidden", "false");
        }
      });
    }

    if (moreFullscreen) {
      moreFullscreen.addEventListener("click", (e) => {
        e.stopPropagation();
        if (moreMenu) {
          moreMenu.classList.remove("show");
          moreMenu.setAttribute("aria-hidden", "true");
        }
        const fullscreenBtn = document.getElementById("btn_fullscreen");
        if (fullscreenBtn) fullscreenBtn.click();
      });
    }

    // Settings Listeners
    const openSettings = (e) => {
      e.stopPropagation();
      if (moreMenu) {
        moreMenu.classList.remove("show");
        moreMenu.setAttribute("aria-hidden", "true");
      }
      if (shareMenu) {
        shareMenu.classList.remove("show");
        shareMenu.setAttribute("aria-hidden", "true");
      }
      settingsModal.setAttribute("aria-hidden", "false");
    };

    if (btnSettings) btnSettings.addEventListener("click", openSettings);
    if (moreSettings) moreSettings.addEventListener("click", openSettings);
    
    if (closeSettings) {
      closeSettings.addEventListener("click", () => {
        settingsModal.setAttribute("aria-hidden", "true");
      });
    }

    ttsEngineRadios.forEach(r => r.addEventListener("change", () => {
      updateSettingsUI();
      saveSettings();
    }));

    storageTypeRadios.forEach(r => r.addEventListener("change", () => {
      updateSettingsUI();
      saveSettings();
    }));

    geminiApiKeyInput.addEventListener("input", saveSettings);

    document.addEventListener("click", (e) => {
      if (shareMenu && shareMenu.classList.contains("show") && !shareMenu.contains(e.target)) {
        shareMenu.classList.remove("show");
        shareMenu.setAttribute("aria-hidden", "true");
      }
      if (moreMenu && moreMenu.classList.contains("show") && !moreMenu.contains(e.target)) {
        moreMenu.classList.remove("show");
        moreMenu.setAttribute("aria-hidden", "true");
      }
      document.querySelectorAll(".history-share-dropdown.show").forEach(m => {
        if (!m.contains(e.target)) {
          m.classList.remove("show");
          m.setAttribute("aria-hidden", "true");
        }
      });
    });

    // Fullscreen toggle logic
    const fullscreenBtn = document.getElementById("btn_fullscreen");
    if (fullscreenBtn) {
      const isFullscreenSupported = document.fullscreenEnabled || 
                                    document.webkitFullscreenEnabled || 
                                    document.mozFullScreenEnabled || 
                                    document.msFullscreenEnabled;
                                    
      if (!isFullscreenSupported) {
        fullscreenBtn.style.display = 'none';
      } else {
        fullscreenBtn.addEventListener("click", () => {
          if (!document.fullscreenElement && 
              !document.webkitFullscreenElement && 
              !document.mozFullScreenElement && 
              !document.msFullscreenElement) {
            
            const req = document.documentElement.requestFullscreen || 
                        document.documentElement.webkitRequestFullscreen || 
                        document.documentElement.mozRequestFullScreen || 
                        document.documentElement.msRequestFullscreen;
                        
            if (req) {
              req.call(document.documentElement)
                .then(() => {
                  fullscreenBtn.setAttribute("title", "Exit Fullscreen");
                  fullscreenBtn.setAttribute("aria-label", "Exit Fullscreen");
                  fullscreenBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                    </svg>
                  `;
                })
                .catch(err => console.error(`Error enabling fullscreen: ${err.message}`));
            }
          } else {
            const exit = document.exitFullscreen || 
                         document.webkitExitFullscreen || 
                         document.mozCancelFullScreen || 
                         document.msExitFullscreen;
                         
            if (exit) {
              exit.call(document)
                .then(() => {
                  fullscreenBtn.setAttribute("title", "Enter Fullscreen");
                  fullscreenBtn.setAttribute("aria-label", "Enter Fullscreen");
                  fullscreenBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  `;
                });
            }
          }
        });

        // Keep button icon in sync if exited via Esc key
        const syncIcon = () => {
          const isCurrentlyFullscreen = document.fullscreenElement || 
                                         document.webkitFullscreenElement || 
                                         document.mozFullScreenElement || 
                                         document.msFullscreenElement;
          if (!isCurrentlyFullscreen) {
            fullscreenBtn.setAttribute("title", "Enter Fullscreen");
            fullscreenBtn.setAttribute("aria-label", "Enter Fullscreen");
            fullscreenBtn.innerHTML = `
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            `;
          }
        };

        document.addEventListener("fullscreenchange", syncIcon);
        document.addEventListener("webkitfullscreenchange", syncIcon);
        document.addEventListener("mozfullscreenchange", syncIcon);
        document.addEventListener("MSFullscreenChange", syncIcon);
      }
    }

    // History Drawer Toggle
    historyToggle.addEventListener("click", () => {
      const isExpanded = historyPanel.classList.toggle("expanded");
      historyToggle.setAttribute("aria-expanded", isExpanded);
    });
  });
})();
