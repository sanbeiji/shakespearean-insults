(() => {
  'use strict';

  // INSULT WORD DATABASES (Expanded with highly authentic salacious/lewd terms)
  const insult1 = ["apish","artless","babbling","barbarous","barm-frothy","base","bastardly","bawdy","bawling","beastly","beslubbering","bestial","boggler","boorish","bootless","brain-sick","braindamaged","brazen","brutish","burly-boned","caluminous","cankered","chambering","churlish","clamorous","clouted","clownish","cloyed","cockered","cogging","cozening","craggy","craven","crusty","cullionly","currish","damnable","dankish","degenerate","dissembling","doltish","droning","dwarfish","egregious","epicurean","errant","false","fatuous","fawning","feculent","fenny","fobbing","frothy","froward","fusty","giftless","gleeking","goatish","gorbellied","greasy","grim","groveling","haggard","hide-bound","hollow","horny","idiotic","ignoble","ignominious","impertinent","imperial","inconstant","infectious","infidel","ingrateful","insolent","jaded","jarring","knavish","lascivious","lecherous","loathsome","loggerheaded","lousy","lubberly","lumpish","lute-stringing","malodorous","mammering","mangled","mangy","marbled","mewling","misbegotten","mitered","monkish","muddy","mutinous","odiferous","officious","paunchy","peevish","pernicious","pestilent","pocky","poxed","prating","pribbling","puking","puny","qualling","querulous","ragamuffin","rank","rascal","rascally","reeky","rheumatic","ribald","roguish","ruffianly","ruttish","ruttish-minded","saucy","savage","scabbed","scald","scurrile","scurvy","senseless","servile","slanderous","slovenly","slubbery","sluggish","sniveling","sottish","spleeny","spleenish","spongy","starving","stubborn","sullied","supercilious","surly","tainted","tardy","thievish","thought-sick","tottering","treacherous","ungrateful","unlettered","unmannerly","unmuzzled","unnatural","unsavory","untoward","vain","venomed","villainous","viperous","vulgarly","wanton","warped","waspish","wayward","weedy","wenching","whorish","wimpled","withered","witless","woolly","worm-eaten","yeasty"];
  const insult2 = ["all-praising","ass-headed","assay-piece","baboon-witted","bare-picked","base-court","bat-fowling","beef-witted","beetle-browed","beetle-headed","blear-eyed","block-headed","blood-boltered","bloody-minded","blunt-witted","boil-brained","brain-sickly","brazen-faced","bull-headed","butter-blooded","calcine-brained","camel-backed","candle-waster","clapper-clawed","clapper-clawing","clay-brained","cloven-footed","codpiece-wearing","cold-blooded","common-kissing","common-staling","copper-nosed","coward-hearted","crook-pated","crow-keeping","dagger-dreading","dismal-dreaming","ditch-delivered","dizzy-eyed","doghearted","dread-bolted","dry-bitten","dull-disposed","earth-vexing","elf-skinned","empty-headed","eye-offending","faint-hearted","false-hearted","fat-kidneyed","feather-brained","fen-sucked","fitchew-smelling","flagon-draining","flap-mouthed","flibbertigibbet-led","fly-bitten","folly-fallen","fool-born","foul-mouthed","foul-spoken","foul-tongued","fraud-practising","frost-bitten","full-gorged","gap-toothed","gleat-sucking","goat-blooded","goose-feathered","grease-stained","green-eyed","grim-looking","guts-griping","haggard-minded","half-blooded","half-faced","half-starved","hasty-witted","hedge-born","hell-hated","high-stomached","hollow-hearted","horse-drenching","idle-headed","ill-boding","ill-breeding","ill-composed","ill-divining","ill-fated","ill-nurtured","ill-starred","ill-tempered","iron-witted","jolt-headed","knotty-pated","lazy-yawning","lean-witted","lily-livered","lout-born","mad-brained","malmsey-nosed","marble-hearted","marrow-eating","milk-livered","mock-water","motley-clad","motley-minded","muddy-mettled","mutton-mongering","night-wandering","onion-eyed","open-fanged","pale-hearted","patch-bunched","pea-brained","pinch-spotted","pit-fomented","plume-plucked","pottle-deep","pox-marked","pox-riddled","puddle-docked","rag-tag","rampallian","rascal-like","rat-catching","rat-smelling","raw-boned","reeling-ripe","rot-chewing","rough-hewn","rude-growing","rug-headed","rump-fed","sacrilegious","saucy-tongued","scab-picking","scullion-born","scurvy-valiant","shard-borne","sheep-biting","sheep-shearing","short-armed","shough-haunting","shrill-tongued","snipe-brained","snob-nosed","snow-broth-cooled","sodden-witted","sore-eyed","sour-faced","spawn-fed","spur-galled","steeple-hatted","stiff-necked","strumpet-minded","sugar-candied","swag-bellied","tadpole-sucking","tallow-faced","tardy-gaited","tatty-headed","tavern-trenching","thick-eyed","thick-skin","thick-skulled","thimble-headed","three-suited","tickle-brained","tile-pinched","toad-spotted","toffee-nosed","troth-plighted","trumpet-tongued","unbacked-colt","unchin-snouted","under-skulled","unlicked-cub","unwash'd","viper-tongued","wart-encrusted","weak-hinged","weather-beaten","weather-bitten","web-footed","whelp-born","white-livered","whoreson","wort-curdled","yellow-blooded"];
  const insult3 = ["abomination","apple-john","arch-villain","ass-head","baboon","baggage","barbermonger","barnacle","barrow-pig","basket-hilt","bastinado","bawd","bed-swerver","beggars-bush","blabbermouth","bladder","blind-harper","blind-worm","block","blumpkin","boar-pig","bobolyne","bodkin","boor","brawl-monger","brewage","bugbear","bull's-pizzle","bum-bailey","bumbard","buns-muncher","callet","canker","canker-bloss","carbonado","carrion","catamite","changeling","cheese-pairing","chough","clack-dish","clam-basher","clatty-bone","climax of unquiet","clinker","clotpole","cloud-capp'd-fool","clouter","clown","cock-sparrow","codpiece","cokes","collop","collywobble","coney-catcher","cooper","cot-quean","court-cupboard","cow-dung","coxcomb","coystril","cozening-cotquean","cozening-drab","craven-cricket","cumberground","cumberworld","cur","cur-dog","custom-shrunk","cutpurse","dalcop","dancy-dandy","dastard","death-token","devil-monk","dewberry","dim-clot","dish-clout","distilment","dog-fish","dolt","donkey","dor","drab","dragon-fly","dromedary","dunghill","earth-worm","eater of broken meats","egg","elf-skin","fishmonger","flap-dragon","flax-wench","flibbertigibbet","flirt-gill","flunkey","foolet","fool","foot-licker","fribble","fry","fustilarian","garboil","gibbet-maker","giglet","gleek","gorbelly","greenhorn","grimgribber","gruntling","gubbert-snatch","gudgeon","haggard","haggard-witch","hand-basket","harecop","harpy","hedge-pig","hen-bane","hobgoblin","hoddydoddy","horn-beast","horse-drench","hugger-mugge","idler","iniquity","jack-a-nape","jack-daw","jackanapes","jackdaw","joithead","jolt-head","jowl","kettle-drum","kitchen-malkin","knave","leman","lewdster","lickspittle","loon","losel","lout","lown","maggot","maggot-pie","malkin","malcontent","malt-horse","malt-worm","mammet","measle","milksop","minnow","minx","miscreant","mite","moldwarp","mome","monster","moon-calf","mould-warp","mumble-news","muscardin","musk-cat","mutterer","mutton-eater","ninnycock","nit","noddy","nut-hook","nuthook","owl-shriek","pander","paramour","patch","patche","paunch","peajacket","peasant","penny-father","pick-thank","pickthank","picture-of-ill-luck","pigeon-egg","pignut","pin-buttock","pin-feather","pinch-penny","pismire","plague-rat","popinjay","poppet","porker","prig","profligate","pumpion","punck","punk","puttock","quean","quim","rafter-louse","rampallian","rapscallion","rascal","ratsbane","ribald-nag","rogue","ronyon","roynish-lown","ruffian","rumbelow","runagate","runaway","runnion","scale","scamble","scamel","scanterling","scobberlotcher","scrag","scroyle","scrub","scullian","scut","shark","shave-beggar","skainsmate","skipjack","sloven","slug","small-beer","smeer","smoothen-scamp","smudge","smug","snipe","sorcerer","sorceress","stale","starveling","stewed prune","stench","stock-fish","stool-ball","strike-block","strumpet","swag-bellied-fool","tallow-catch","tar-box","tittle-tattle","toad","troll-me-dame","trot","trull","turnspit","tyrant","unnecessary letter","unrefined-slug","varlot","vassal","villain","viper","vixen","waffler","wagtail","wanderer","water-fly","whey-face","whipstock","whiting-mop","whoreson","windbag","witcracker","wittol","woodcock","wool-sack","wretch"];

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

  function getAOrAn(word) {
    if (!word) return "a";
    const firstChar = word.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstChar) ? "an" : "a";
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
        "The tartness of his face sours ripe grapes."
      ];
      return getRandomItem(exactQuotes);
    }

    const adj1 = getRandomItem(insult1);
    const adj2 = getRandomItem(insult2);
    const noun = getRandomItem(insult3);
    const targetPart = getRandomItem(["wit", "face", "soul", "virtue"]);

    // Shakespearean sentence structures with weighted probabilities
    const templates = [
      { weight: 40, fn: () => `Thou ${adj1}, ${adj2} ${noun}!` },
      { weight: 40, fn: () => `Thy ${targetPart} is ${getAOrAn(adj2)} ${adj2} ${noun}!` },
      { weight: 25, fn: () => `Thou art as ${adj1} as ${getAOrAn(adj2)} ${adj2} ${noun}!` },
      { weight: 5,  fn: () => `Out of my sight, thou ${adj1}, ${adj2} ${noun}!` },
      { weight: 3,  fn: () => `I do desire we may be better strangers, thou ${adj1} ${noun}!` },
      { weight: 3,  fn: () => `Would thou wert clean enough to spit upon, thou ${adj1} ${noun}!` },
      { weight: 3,  fn: () => `More of thy conversation would infect my brain, thou ${adj2} ${noun}!` },
      { weight: 3,  fn: () => `I am sick when I do look on thee, thou ${adj1}, ${adj2} ${noun}!` }
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

  // TEXT TO SPEECH ENGINE (Speech Synthesis)
  function speakInsult() {
    if (!currentInsultText || !('speechSynthesis' in window)) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentInsultText);
    
    // Customize rate and pitch for theatrical flair
    utterance.rate = 0.82;
    utterance.pitch = 0.85;

    // Locate high quality voice using our priority scoring
    const preferredVoice = getBestVoice();

    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
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
      window.speechSynthesis.onvoiceschanged = () => {
        cachedVoice = null; // Reset cached voice to re-evaluate when voices change
        getBestVoice();
      };
    }

    // Secondary Control Event Listeners
    speakBtn.addEventListener("click", speakInsult);
    copyBtn.addEventListener("click", () => copyToClipboard(currentInsultText));
    shareBtn.addEventListener("click", shareOnBluesky);

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
