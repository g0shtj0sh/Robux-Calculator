/* Replace with your JS Code 
(Leave empty if not needed) */

const translations = {
  en: {
    mainTitle: "Robux Tax Calculator",
    role: "Main Website Developer",
    profileButton: "Access",
    robuxPlaceholder: "Enter Robux amount...",
    robuxPlaceholderInverse: "Enter desired Robux income...",
    calculateButton: "Calculate After Tax",
    resultText: "You will receive:",
    resultTextInverse: "You need to ask for:",
    notificationInvalidAmount: "Please enter a valid Robux amount",
    notificationCalculationComplete: "Calculation complete!",
    notificationCopied: "Result copied to clipboard!",
    languageButtonFR: "Français",
    languageButtonEN: "English",
    calculationModeLabel: "Calculate amount needed for desired income?",
    copyButton: "Copy",
    taxInfoTooltip: "Roblox applies a 30% marketplace fee on most transactions. This calculator reflects that fee.",
    historyTitle: "Calculation History",
    historyEntry: (input, output, isInverse) => isInverse ? `Desired: ${input} → Needed: ${output}` : `Entered: ${input} → Received: ${output}`,
    clearHistoryButton: "Clear History",
    devExTitle: "DevEx Estimator",
    devExRobuxPlaceholder: "Enter Robux for DevEx...",
    devExCalculateButton: "Estimate USD",
    devExResultText: "Estimated Value:",
    devExNote: "Based on a rate of $0.0035 USD per Robux. This is an estimate and subject to Roblox DevEx terms and minimums.",
    historyEmpty: "History is empty.",
    languageButtonES: "Español",
    languageButtonHE: "עברית",
    currencyPlaceholder: "Enter amount...",
    currencyCalculateButton: "Calculate Robux",
    currencyResultText: "Estimated Robux:",
    currencyToRobuxTitle: "Currency to Robux",
    robuxToCurrencyTitle: "Robux to Currency"
  },
  fr: {
    mainTitle: "Calculateur de Taxe Robux",
    role: "Développeur Principal du Site",
    profileButton: "Accéder",
    robuxPlaceholder: "Entrez le montant en Robux...",
    robuxPlaceholderInverse: "Entrez le revenu Robux désiré...",
    calculateButton: "Calculer Après Taxe",
    resultText: "Vous recevrez :",
    resultTextInverse: "Vous devez demander :",
    notificationInvalidAmount: "Veuillez entrer un montant de Robux valide",
    notificationCalculationComplete: "Calcul terminé !",
    notificationCopied: "Résultat copié dans le presse-papiers !",
    languageButtonFR: "Français",
    languageButtonEN: "English",
    calculationModeLabel: "Calculer le montant nécessaire pour le revenu souhaité ?",
    copyButton: "Copier",
    taxInfoTooltip: "Roblox applique des frais de marché de 30% sur la plupart des transactions. Ce calculateur reflète ces frais.",
    historyTitle: "Historique des Calculs",
    historyEntry: (input, output, isInverse) => isInverse ? `Désiré : ${input} → Nécessaire : ${output}` : `Entré : ${input} → Reçu : ${output}`,
    clearHistoryButton: "Effacer l'historique",
    devExTitle: "Estimateur DevEx",
    devExRobuxPlaceholder: "Entrez les Robux pour DevEx...",
    devExCalculateButton: "Calculer la Valeur",
    devExResultText: "Valeur Estimée :",
    devExNote: "Basé sur un taux de 0,0035 $ USD par Robux. Ceci est une estimation et soumis aux conditions et minimums DevEx de Roblox.",
    historyEmpty: "L'historique est vide.",
    languageButtonES: "Español",
    languageButtonHE: "עברית",
    currencyPlaceholder: "Entrez le montant...",
    currencyCalculateButton: "Calculer les Robux",
    currencyResultText: "Robux estimés :",
    currencyToRobuxTitle: "Devise vers Robux",
    robuxToCurrencyTitle: "Robux vers Devise"
  },
  es: { // Spanish Translations
    mainTitle: "Calculadora de Impuestos Robux",
    role: "Desarrollador Principal del Sitio Web",
    profileButton: "Acceder",
    robuxPlaceholder: "Ingrese la cantidad de Robux...",
    robuxPlaceholderInverse: "Ingrese el ingreso de Robux deseado...",
    calculateButton: "Calcular Después de Impuestos",
    resultText: "Recibirás:",
    resultTextInverse: "Necesitas pedir:",
    notificationInvalidAmount: "Por favor, ingrese una cantidad válida de Robux",
    notificationCalculationComplete: "¡Cálculo completado!",
    notificationCopied: "¡Resultado copiado al portapapeles!",
    calculationModeLabel: "¿Calcular la cantidad necesaria para el ingreso deseado?",
    copyButton: "Copiar",
    historyTitle: "Historial de Cálculos",
    historyEntry: (input, output, isInverse) => isInverse ? `Deseado: ${input} → Necesario: ${output}` : `Ingresado: ${input} → Recibido: ${output}`,
    clearHistoryButton: "Limpiar Historial",
    historyEmpty: "El historial está vacío.",
    devExTitle: "Estimador DevEx",
    devExRobuxPlaceholder: "Ingrese Robux para DevEx...",
    devExCalculateButton: "Calcular Valor",
    devExResultText: "Valor Estimado:",
    devExNote: "Basado en una tasa de $0.0035 USD por Robux. Esta es una estimación y está sujeta a los términos y mínimos de DevEx de Roblox.",
    languageButtonFR: "Français",
    languageButtonEN: "English",
    languageButtonES: "Español",
    languageButtonHE: "עברית",
    currencyPlaceholder: "Ingrese el monto...",
    currencyCalculateButton: "Calcular Robux",
    currencyResultText: "Robux estimados:",
    currencyToRobuxTitle: "Moneda a Robux",
    robuxToCurrencyTitle: "Robux a Moneda"
  },
  he: { // Hebrew Translations (Note: Text direction might need CSS adjustments for full RTL)
    mainTitle: "מחשבון מס Robux",
    role: "מפתח אתרים ראשי",
    profileButton: "גישה",
    robuxPlaceholder: "הזן סכום Robux...",
    robuxPlaceholderInverse: "הכנס את ההכנסה הרצויה מ-Robux...",
    calculateButton: "חשב לאחר מס",
    resultText: "אתה תקבל:",
    resultTextInverse: "אתה צריך לבקש:",
    notificationInvalidAmount: "אנא הזן סכום Robux חוקי",
    notificationCalculationComplete: "החישוב הושלם!",
    notificationCopied: "התוצאה הועתקה ללוח!",
    calculationModeLabel: "האם לחשב את הסכום הדרוש להכנסה הרצויה?",
    copyButton: "העתק",
    historyTitle: "היסטוריית חישובים",
    historyEntry: (input, output, isInverse) => isInverse ? `רצוי: ${input} → נדרש: ${output}` : `הוזן: ${input} → התקבל: ${output}`,
    clearHistoryButton: "נקה היסטוריה",
    historyEmpty: "ההיסטוריה ריקה.",
    devExTitle: "אומדן DevEx",
    devExRobuxPlaceholder: "הזן Robux ל-DevEx...",
    devExCalculateButton: "חשב ערך",
    devExResultText: ":ערך משוער",
    devExNote: "מבוסס על שער של $0.0035 דולר ארה''ב לכל Robux. זוהי הערכה וכפופה לתנאים ולמינימום של DevEx של Roblox.",
    languageButtonFR: "Français",
    languageButtonEN: "English",
    languageButtonES: "Español",
    languageButtonHE: "עברית",
    currencyPlaceholder: "...הזן סכום",
    currencyCalculateButton: "Robux חשב",
    currencyResultText: ":Robux משוער",
    currencyToRobuxTitle: "המרה ממטבע ל-Robux",
    robuxToCurrencyTitle: "המרה מ-Robux למטבע"
  }
};

const DEVEX_RATE = 0.0035;
const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.92  // Taux de conversion approximatif EUR/USD
};

function applyTranslations(lang) {
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-key-placeholder]').forEach(element => {
    const key = element.getAttribute('data-key-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
}

function changeLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
  if (typeof window.applyTranslations === 'function') {
    window.applyTranslations(lang);
  }
  if (lang === 'he') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl-layout');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl-layout');
  }
}

function getTranslatedText(key) {
  const currentLang = localStorage.getItem('preferredLanguage') || 'en';
  return translations[currentLang][key] || key; // Fallback to key if translation not found
}

function calculateRobux() {
  const inputElement = document.getElementById("robuxInput");
  const output = document.getElementById("robuxOutput");
  const resultBox = document.getElementById("robuxResult");
  const resultTextElement = resultBox.querySelector("[data-key='resultText'], [data-key='resultTextInverse']");
  const isInverseMode = document.getElementById("inverseModeCheckbox").checked;

  let robuxInputVal = parseFloat(inputElement.value);
  if (isNaN(robuxInputVal) || robuxInputVal <= 0) {
    showNotification(getTranslatedText("notificationInvalidAmount"), "error");
    return;
  }

  let finalAmount;
  if (isInverseMode) {
    finalAmount = robuxInputVal === 1 ? 1 : Math.ceil(robuxInputVal / 0.7);
    resultTextElement.setAttribute("data-key", "resultTextInverse");
  } else {
    finalAmount = robuxInputVal <= 1 ? robuxInputVal : Math.floor(robuxInputVal * 0.7);
    resultTextElement.setAttribute("data-key", "resultText");
  }
  
  output.textContent = finalAmount.toLocaleString();
  resultBox.style.display = "block";
  applyTranslations(localStorage.getItem('preferredLanguage') || 'en');
  showNotification(getTranslatedText("notificationCalculationComplete"), "success");

  // Save to history
  saveToHistory(robuxInputVal, finalAmount, isInverseMode);
  displayHistory();
}

function showNotification(msg, type = "success") {
  const note = document.getElementById("notification");
  note.textContent = msg;
  note.className = `notification-message ${type}`;
  note.style.display = "block";

  setTimeout(() => {
    note.style.opacity = "0";
    setTimeout(() => {
      note.style.display = "none";
      note.style.opacity = "1";
    }, 300);
  }, 3000);
}

function copyResult() {
  const outputElement = document.getElementById("robuxOutput");
  const textToCopy = outputElement.textContent;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        showNotification(getTranslatedText("notificationCopied"), "success");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
        // Fallback or error message if needed
      });
  } else {
    // Fallback for non-secure contexts or older browsers
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed"; // Avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showNotification(getTranslatedText("notificationCopied"), "success");
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
  }
}

const MAX_HISTORY_ITEMS = 5;

function saveToHistory(input, output, isInverse) {
  let history = JSON.parse(localStorage.getItem('robuxHistory')) || [];
  const currentLang = localStorage.getItem('preferredLanguage') || 'en';
  
  // Create a text representation of the entry for the current language
  // This way, the history entry is stored in the language it was created in.
  // Or, we can decide to always store a generic format and translate on display.
  // For simplicity, let's store it with the language it was made with for now.
  // A more robust way would be to store keys and values, and translate on display.
  const entryText = translations[currentLang].historyEntry(input.toLocaleString(), output.toLocaleString(), isInverse);

  const newEntry = {
    input: input,
    output: output,
    isInverse: isInverse,
    timestamp: new Date().toISOString(),
    displayLang: currentLang, // Store the language at the time of creation
    displayText: entryText // Store the pre-translated string for simplicity here
  };

  history.unshift(newEntry); // Add to the beginning
  if (history.length > MAX_HISTORY_ITEMS) {
    history.pop(); // Remove the oldest if more than max items
  }
  localStorage.setItem('robuxHistory', JSON.stringify(history));
}

function displayHistory() {
  const historyContainer = document.getElementById('calculationHistory');
  const historyList = historyContainer.querySelector('ul');
  const historyTitle = historyContainer.querySelector('[data-key="historyTitle"]');
  const clearButton = document.getElementById('clearHistoryBtn');

  if (!historyContainer || !historyList || !historyTitle || !clearButton) return; // Safety check
  
  historyContainer.style.display = 'block'; // Ensure history container is always visible
  historyList.innerHTML = ''; // Clear previous items
  
  let history = JSON.parse(localStorage.getItem('robuxHistory')) || [];
  
  historyTitle.textContent = getTranslatedText('historyTitle');

  if (history.length === 0) {
    const listItem = document.createElement('li');
    listItem.textContent = getTranslatedText('historyEmpty');
    listItem.style.fontStyle = 'italic';
    historyList.appendChild(listItem);
    clearButton.style.display = 'none'; // Hide clear button if history is empty
  } else {
    history.forEach(entry => {
      const listItem = document.createElement('li');
      listItem.textContent = entry.displayText;
      historyList.appendChild(listItem);
    });
    clearButton.style.display = 'inline-block'; // Show clear button if history has items
    clearButton.textContent = getTranslatedText('clearHistoryButton');
  }
}

function clearHistory() {
    localStorage.removeItem('robuxHistory');
    displayHistory(); // Refresh the display (will hide the section)
}

function calculateDevEx() {
  const inputElement = document.getElementById("devExRobuxInput");
  const outputElement = document.getElementById("devExOutputUsd");
  const resultBox = document.getElementById("devExResult");
  const selectedCurrency = document.getElementById("selectedCurrency").textContent;

  let robux = parseFloat(inputElement.value);
  if (isNaN(robux) || robux < 0) {
    showNotification(getTranslatedText("notificationInvalidAmount"), "error");
    outputElement.textContent = "-";
    resultBox.style.display = "none";
    return;
  }

  let usdValue = robux * DEVEX_RATE;
  let finalValue = selectedCurrency === "EUR" ? usdValue / CURRENCY_RATES.EUR : usdValue;
  
  outputElement.textContent = finalValue.toLocaleString(undefined, { 
    style: 'currency', 
    currency: selectedCurrency 
  });
  resultBox.style.display = "block";
}

function applyTheme(themeName) {
  document.body.className = Array.from(document.body.classList).filter(cls => !cls.startsWith('theme-')).join(' ');
  if (themeName && themeName !== 'default') {
    document.body.classList.add(`theme-${themeName}`);
  }
  localStorage.setItem('selectedTheme', themeName || 'default');
  const themeToggleButton = document.getElementById('themeToggleButton');
  if(themeToggleButton) {
      themeToggleButton.style.borderColor = `rgba(var(--accent-color-rgb), 0.4)`; 
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('selectedTheme') || 'default';
  applyTheme(savedTheme);
}

document.addEventListener('DOMContentLoaded', function() {
  const initialPreferredLang = localStorage.getItem('preferredLanguage') || 'en';

  const inverseCheckbox = document.getElementById("inverseModeCheckbox");
  const robuxInput = document.getElementById("robuxInput");

  function updatePlaceholder() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const targetInput = document.activeElement === robuxInput ? robuxInput : document.getElementById("devExRobuxInput");
    let placeholderKey;

    if (targetInput === robuxInput) {
        placeholderKey = inverseCheckbox.checked ? 'robuxPlaceholderInverse' : 'robuxPlaceholder';
    } else if (targetInput && targetInput.id === "devExRobuxInput") {
        placeholderKey = 'devExRobuxPlaceholder';
    }

    if (placeholderKey && translations[currentLang] && translations[currentLang][placeholderKey]) {
        if (targetInput) targetInput.placeholder = translations[currentLang][placeholderKey];
    } else if (targetInput === robuxInput) { // Fallback for robux input
        robuxInput.placeholder = inverseCheckbox.checked ? (translations[currentLang]?.robuxPlaceholderInverse || "Enter desired Robux income...") : (translations[currentLang]?.robuxPlaceholder || "Enter Robux amount...");
    }
  }
  
  if (translations.en && !translations.en.robuxPlaceholderInverse) {
    translations.en.robuxPlaceholderInverse = "Enter desired Robux income...";
  }
  if (translations.fr && !translations.fr.robuxPlaceholderInverse) {
    translations.fr.robuxPlaceholderInverse = "Entrez le revenu Robux désiré...";
  }

  if (inverseCheckbox) {
    inverseCheckbox.addEventListener('change', updatePlaceholder);
  }
  // Call it once for initial setup of placeholders
  updatePlaceholder(); 
  // Also for DevEx input if it exists
  const devExInputElement = document.getElementById("devExRobuxInput");
  if (devExInputElement) {
    updatePlaceholder.call({ activeElement: devExInputElement }); // Simulate active element for initial placeholder
  }

  // Store original applyTranslations before potentially overwriting it
  const originalApplyTranslations = window.applyTranslations || applyTranslations;

  window.applyTranslations = function(lang) {
    originalApplyTranslations(lang); // Call the original function (either global or the one defined above)
    updatePlaceholder(); // Update placeholder after translations are applied
    if (typeof displayHistory === 'function') displayHistory(); // Update history text if language changes
    
    // Update DevEx placeholder specifically if the main updatePlaceholder doesn't catch it
    const devExInput = document.getElementById("devExRobuxInput");
    if (devExInput) {
        const devExPlaceholderKey = devExInput.getAttribute('data-key-placeholder');
        if (translations[lang] && translations[lang][devExPlaceholderKey]) {
            devExInput.placeholder = translations[lang][devExPlaceholderKey];
        }
    }
  };

  const originalChangeLanguage = window.changeLanguage;
  window.changeLanguage = function(lang) {
    if (typeof originalChangeLanguage === 'function') originalChangeLanguage(lang);
    else localStorage.setItem('preferredLanguage', lang); // Fallback if original not there
    
    window.applyTranslations(lang); // This will now call the enhanced applyTranslations
  };
  
  // Apply initial language settings using the enhanced applyTranslations
  window.applyTranslations(initialPreferredLang);

  // Initialize history display
  if (typeof displayHistory === 'function') displayHistory(); 
  const clearHistoryButton = document.getElementById('clearHistoryBtn');
  if(clearHistoryButton && typeof clearHistory === 'function') {
      clearHistoryButton.addEventListener('click', clearHistory);
  }

  // DevEx Calculator Button Event Listener
  const devExButton = document.getElementById('devExCalculateBtn');
  if (devExButton && typeof calculateDevEx === 'function') {
    devExButton.addEventListener('click', calculateDevEx);
  }

  // Theme Selector Logic
  const themeToggleButton = document.getElementById('themeToggleButton');
  const themeDropdown = document.getElementById('themeDropdown');

  if (themeToggleButton && themeDropdown) {
    themeToggleButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from immediately closing if propagating to document
      themeDropdown.style.display = themeDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
      if (!themeDropdown.contains(event.target) && event.target !== themeToggleButton && !themeToggleButton.contains(event.target)) {
        themeDropdown.style.display = 'none';
      }
    });

    themeDropdown.querySelectorAll('button[data-theme]').forEach(button => {
      button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        applyTheme(theme === 'white' ? 'white-accent' : theme); // Use 'white-accent' for the class
        themeDropdown.style.display = 'none'; // Close dropdown after selection
      });
    });
  }
  loadTheme(); // Load saved theme on page load

  // New Language Selector Logic
  const languageToggleButton = document.getElementById('languageToggleButton');
  const languageDropdown = document.getElementById('languageDropdown');

  if (languageToggleButton && languageDropdown) {
    languageToggleButton.addEventListener('click', (event) => {
      event.stopPropagation();
      languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
      // Close theme dropdown if open
      if (themeDropdown) themeDropdown.style.display = 'none';
    });

    languageDropdown.querySelectorAll('button[data-lang]').forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
        languageDropdown.style.display = 'none';
      });
    });
  }

  // Close dropdowns if clicking outside
  document.addEventListener('click', (event) => {
    if (themeDropdown && !themeDropdown.contains(event.target) && event.target !== themeToggleButton && !themeToggleButton.contains(event.target)) {
      themeDropdown.style.display = 'none';
    }
    if (languageDropdown && !languageDropdown.contains(event.target) && event.target !== languageToggleButton && !languageToggleButton.contains(event.target)) {
      languageDropdown.style.display = 'none';
    }
  });
  
  // Initial language setup
  changeLanguage(initialPreferredLang); // Sets language, applies translations, and handles RTL
  
  // ... (rest of DOMContentLoaded, like history, DevEx, placeholders setup) ...
  // Ensure initial placeholder updates happen AFTER initial language is set
  if (typeof updateAllPlaceholders === 'function') {
      updateAllPlaceholders();
  }

  // Currency conversion button
  const currencyCalculateBtn = document.getElementById('currencyCalculateBtn');
  if (currencyCalculateBtn) {
    currencyCalculateBtn.addEventListener('click', calculateFromCurrency);
  }

  // Initialize language
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  applyTranslations(savedLang);
  if (savedLang === 'he') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl-layout');
  }

  // Initialize theme
  loadTheme();

  // Currency selector logic with animation
  const currencyToggleButton = document.getElementById('currencyToggleButton');
  const currencyDropdown = document.getElementById('currencyDropdown');
  const selectedCurrencySpan = document.getElementById('selectedCurrency');

  if (currencyToggleButton && currencyDropdown) {
    currencyToggleButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const isActive = currencyDropdown.style.display === 'block';
      currencyDropdown.style.display = isActive ? 'none' : 'block';
      currencyToggleButton.classList.toggle('active', !isActive);
    });

    currencyDropdown.querySelectorAll('button[data-currency]').forEach(button => {
      button.addEventListener('click', () => {
        const currency = button.getAttribute('data-currency');
        selectedCurrencySpan.textContent = currency;
        currencyDropdown.style.display = 'none';
        currencyToggleButton.classList.remove('active');
        
        // Recalculate if there are existing results
        const currencyResult = document.getElementById('currencyResult');
        const devExResult = document.getElementById('devExResult');
        
        if (currencyResult.style.display === 'block') {
          calculateFromCurrency();
        }
        if (devExResult.style.display === 'block') {
          calculateDevEx();
        }
      });
    });

    // Close currency dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!currencyDropdown.contains(event.target) && !currencyToggleButton.contains(event.target)) {
        currencyDropdown.style.display = 'none';
        currencyToggleButton.classList.remove('active');
      }
    });
  }
});

// Ensure all base functions are defined globally if they are called by others
if (typeof applyTranslations !== 'function') {
    window.applyTranslations = function(lang) { /* Stub if not defined, should be defined above */ };
}
if (typeof changeLanguage !== 'function') {
    window.changeLanguage = function(lang) { /* Stub */ localStorage.setItem('preferredLanguage', lang); window.applyTranslations(lang); };
}

const robuxInputGlobal = document.getElementById("robuxInput");
const inverseCheckboxGlobal = document.getElementById("inverseModeCheckbox");
const devExRobuxInputGlobal = document.getElementById("devExRobuxInput");

function updateAllPlaceholders() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    if (!translations[currentLang]) return;

    if (robuxInputGlobal && translations[currentLang]) {
        const robuxKey = inverseCheckboxGlobal?.checked ? 'robuxPlaceholderInverse' : 'robuxPlaceholder';
        robuxInputGlobal.placeholder = translations[currentLang][robuxKey] || robuxInputGlobal.placeholder;
    }
    if (devExRobuxInputGlobal && translations[currentLang]) {
        devExRobuxInputGlobal.placeholder = translations[currentLang]['devExRobuxPlaceholder'] || devExRobuxInputGlobal.placeholder;
    }
}

let originalApplyTranslationsFunc = window.applyTranslations || (typeof applyTranslations !== 'undefined' ? applyTranslations : function() {});
window.applyTranslations = function(lang) {
    // If the original function wasn't from window, it means it's likely the one defined in this script file.
    // Check if originalApplyTranslationsFunc is already the one we are defining to avoid recursion.
    if (originalApplyTranslationsFunc.name === 'applyTranslations' && typeof originalApplyTranslationsFunc === 'function' && originalApplyTranslationsFunc !== window.applyTranslations) {
         originalApplyTranslationsFunc(lang);
    } else {
        // Fallback to a basic implementation if the original is somehow lost or is self-referential
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-key-placeholder]').forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
    }
    updateAllPlaceholders();
    if (typeof displayHistory === 'function') displayHistory(); 
};

// Original changeLanguage function (defined in this script)
// window.changeLanguage is set within DOMContentLoaded or by this top-level function
if (typeof changeLanguage !== 'function' || changeLanguage.name !== 'changeLanguage') {
    window.changeLanguage = function(lang) {
        localStorage.setItem('preferredLanguage', lang);
        window.applyTranslations(lang);
        if (lang === 'he') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl-layout');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl-layout');
        }
    };
}

function calculateFromCurrency() {
  const currencyInput = document.getElementById("currencyInput");
  const selectedCurrencySpan = document.getElementById("selectedCurrency");
  const resultBox = document.getElementById("currencyResult");
  const outputElement = document.getElementById("currencyOutputRobux");

  let amount = parseFloat(currencyInput.value);
  if (isNaN(amount) || amount <= 0) {
    showNotification(getTranslatedText("notificationInvalidAmount"), "error");
    return;
  }

  const selectedCurrency = selectedCurrencySpan.textContent;
  const usdAmount = amount / CURRENCY_RATES[selectedCurrency];
  const robuxAmount = Math.floor(usdAmount / DEVEX_RATE);

  outputElement.textContent = robuxAmount.toLocaleString();
  resultBox.style.display = "block";
  showNotification(getTranslatedText("notificationCalculationComplete"), "success");
}
            