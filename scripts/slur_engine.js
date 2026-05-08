(() => {
  'use strict';

  // INSULT WORD DATABASES (Expanded with highly authentic salacious/lewd terms)
  const insult1 = ["artless","bawdy","bawling","beslubbering","bootless","burly-boned","caluminous","chambering","churlish","clouted","cockered","craven","cullionly","currish","dankish","dissembling","droning","errant","fawning","feculent","fobbing","frothy","froward","fusty","giftless","gleeking","goatish","gorbellied","grim","impertinent","infectious","jarring","lascivious","lecherous","loggerheaded","lumpish","lute-stringing","malodorous","mammering","mangled","mewling","misbegotten","odiferous","paunchy","pribbling","puking","puny","qualling","rank","reeky","roguish","ruttish","saucy","spleeny","spongy","sullied","surly","tottering","unmuzzled","vain","venomed","villainous","wanton","warped","wayward","weedy","wimpled","yeasty"];
  const insult2 = ["base-court","bat-fowling","beef-witted","beetle-headed","boil-brained","clapper-clawed","clay-brained","codpiece-wearing","common-kissing","crook-pated","dismal-dreaming","dizzy-eyed","doghearted","dread-bolted","earth-vexing","elf-skinned","fat-kidneyed","fen-sucked","flap-mouthed","fly-bitten","folly-fallen","fool-born","full-gorged","guts-griping","half-faced","hasty-witted","hedge-born","hell-hated","idle-headed","ill-breeding","ill-nurtured","knotty-pated","milk-livered","motley-minded","onion-eyed","plume-plucked","pottle-deep","pox-marked","reeling-ripe","rough-hewn","rude-growing","rump-fed","shard-borne","sheep-biting","spur-galled","swag-bellied","tardy-gaited","tallow-faced","tickle-brained","toad-spotted","unchin-snouted","weather-bitten","whoreson","malmsey-nosed","rampallian","lily-livered","scurvy-valiant","brazen-faced","unwash'd","gleat-sucking","wart-encrusted"];
  const insult3 = ["apple-john","baggage","barnacle","bed-swerver","bobolyne","bladder","blind-worm","blumpkin","boar-pig","bugbear","bum-bailey","callet","canker-bloss","clack-dish","clotpole","codpiece","coxcomb","cumberworld","cumberground","cur","dalcop","death-token","devil-monk","dewberry","donkey","drab","eater of broken meats","flap-dragon","flax-wench","flirt-gill","fool","foot-licker","fustilarian","giglet","gudgeon","haggard","harecop","harpy","hedge-pig","horn-beast","hugger-mugge","joithead","jolt-head","knave","lewdster","lickspittle","lout","maggot-pie","malcontent","malt-worm","mammet","measle","minnow","miscreant","moldwarp","mumble-news","ninnycock","nut-hook","peasant","pigeon-egg","pignut","plague-rat","popinjay","pumpion","puttock","quean","quim","rampallian","ratsbane","rogue","ruffian","scullian","scut","skainsmate","stewed prune","strumpet","unnecessary letter","varlot","vassal","villain","wagtail","whey-face","wretch"];

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
  const historyPanel = document.getElementById("history_panel");
  const historyToggle = document.getElementById("history_toggle");
  const historyList = document.getElementById("history_list");
  const toast = document.getElementById("toast");

  // GENERATOR HELPER
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function generateInsultString() {
    const adj1 = getRandomItem(insult1);
    const adj2 = getRandomItem(insult2);
    const noun = getRandomItem(insult3);
    const targetPart = getRandomItem(["wit", "face", "soul", "virtue"]);

    // Five Shakespearean sentence structures with weighted probabilities
    const templates = [
      { weight: 45, fn: () => `Thou ${adj1}, ${adj2} ${noun}!` },
      { weight: 30, fn: () => `Thy ${targetPart} is a ${adj2} ${noun}!` },
      { weight: 15, fn: () => `Thou art as ${adj1} as a ${adj2} ${noun}!` },
      { weight: 5,  fn: () => `Out of my sight, thou ${adj1}, ${adj2} ${noun}!` },
      { weight: 5,  fn: () => `I do desire we may be better strangers, thou ${adj1} ${noun}!` }
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

    return capitalize(selectedTemplate.fn());
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

  // HELPERS FOR HIGH QUALITY TTS VOICES
  function getHighQualityUKMaleVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    
    // Filter for British English voices
    const ukVoices = voices.filter(voice => {
      const lang = voice.lang.toLowerCase().replace('_', '-');
      const name = voice.name.toLowerCase();
      return lang === 'en-gb' || lang.startsWith('en-gb') || name.includes('united kingdom') || name.includes('uk english') || name.includes('great britain');
    });

    if (ukVoices.length === 0) {
      // Fallback to any English voice
      return voices.find(v => v.lang.toLowerCase().startsWith('en')) || null;
    }

    // Score the UK voices to find the absolute best male voice
    const scored = ukVoices.map(voice => {
      const nameLower = voice.name.toLowerCase();
      let score = 0;

      // Gender classification
      const isExplicitlyMale = nameLower.includes('male') || nameLower.includes('daniel') || nameLower.includes('oliver') || nameLower.includes('george') || nameLower.includes('gbd') || nameLower.includes('gbi') || nameLower.includes('gbj') || nameLower.includes('gbr');
      const isExplicitlyFemale = nameLower.includes('female') || nameLower.includes('serena') || nameLower.includes('stephanie') || nameLower.includes('fiona') || nameLower.includes('kate') || nameLower.includes('hazel') || nameLower.includes('sally') || nameLower.includes('elizabeth') || nameLower.includes('victoria') || nameLower.includes('gbf') || nameLower.includes('gbg') || nameLower.includes('gbs');

      // Heavily prefer male voices
      if (isExplicitlyMale && !isExplicitlyFemale) {
        score += 100;
      } else if (isExplicitlyFemale) {
        score -= 100; // Penalty for female voices
      }

      // High-quality premium keywords
      const premiumKeywords = ['natural', 'neural', 'wavenet', 'premium', 'enhanced', 'high', 'networked', 'network'];
      premiumKeywords.forEach(kw => {
        if (nameLower.includes(kw)) {
          score += 50;
        }
      });

      // Prefer Google/Siri high-quality voices
      if (nameLower.includes('google')) {
        score += 40;
      }
      if (nameLower.includes('siri')) {
        score += 30;
      }

      // Avoid the old, tinny/metallic Daniel voice unless it's the Premium/Enhanced version
      if (nameLower.includes('daniel')) {
        if (nameLower.includes('premium') || nameLower.includes('enhanced')) {
          score += 20;
        } else {
          score -= 20; // Penalize standard metallic Daniel voice!
        }
      }

      return { voice, score };
    });

    // Sort descending by score
    scored.sort((a, b) => b.score - a.score);

    console.log("Scored UK voices:", scored.map(s => `${s.voice.name} (score: ${s.score})`));

    return scored[0].voice;
  }

  // TEXT TO SPEECH ENGINE (Speech Synthesis)
  function speakInsult() {
    if (!currentInsultText || !('speechSynthesis' in window)) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentInsultText);
    
    // Customize rate and pitch for theatrical flair
    utterance.rate = 0.82;
    utterance.pitch = 0.85;

    // Locate high quality British male voice
    const preferredVoice = getHighQualityUKMaleVoice();

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
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

  // BLUESKY SHARE GENERATOR
  function shareOnBluesky() {
    if (!currentInsultText) return;
    const bskyUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(`"${currentInsultText}" - Punish thyself with the Shakespearean Insult Machine! https://sanbeiji.com/insults`)}`;
    window.open(bskyUrl, '_blank', 'noopener,noreferrer');
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

      const copyBtn = document.createElement("button");
      copyBtn.className = "history-item-copy";
      copyBtn.title = "Copy Sin";
      copyBtn.setAttribute("aria-label", `Copy insult: ${insult}`);
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
      `;
      
      copyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        copyToClipboard(insult, "Sin copied to parchment!");
      });

      li.appendChild(span);
      li.appendChild(copyBtn);
      historyList.appendChild(li);
    });
  }

  // EVENT LISTENERS AND INITIALIZATION
  document.addEventListener("DOMContentLoaded", () => {
    // Render history on page load
    renderHistory();

    // Main Insult Trigger
    insultBtn.addEventListener("click", () => {
      const randomInsult = generateInsultString();
      displayInsultWithTypingEffect(randomInsult);
    });

    // Speech Synthesis voice list loading safety
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }

    // Secondary Control Event Listeners
    speakBtn.addEventListener("click", speakInsult);
    copyBtn.addEventListener("click", () => copyToClipboard(currentInsultText));
    shareBtn.addEventListener("click", shareOnBluesky);

    // History Drawer Toggle
    historyToggle.addEventListener("click", () => {
      const isExpanded = historyPanel.classList.toggle("expanded");
      historyToggle.setAttribute("aria-expanded", isExpanded);
    });
  });
})();
