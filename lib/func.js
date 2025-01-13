/**
 * Translates Cyrillic characters in a string to their Latin equivalents.
 *
 * This function iterates over each character in the input string and,
 * if a corresponding transliteration is found, replaces it. If not, the character remains unchanged.
 * Spaces are translated to underscores.
 *
 * @param {string} text The input string containing Cyrillic characters.
 * @returns {string} The translated string with Latin characters.
 *
 * @example
 * ```javascript
 * translate("Привет Мир"); // Returns "Privet_Mir"
 * translate("Съешь ещё этих мягких французских булок, да выпей чаю"); // Returns "Sesh_eshhe_etih_myagkih_francuzskih_bulok_da_vypej_chayu"
 * translate("Это простой пример"); // Returns "Eto_prostoj_primer"
 * translate(""); // Returns ""
 * ```
 */


export function translateText(text) {
  const transl = {
    'А': 'A', 'а': 'a',
    'Б': 'B', 'б': 'b',
    'В': 'V', 'в': 'v',
    'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd',
    'Е': 'E', 'е': 'e',
    'Ё': 'Yo', 'ё': 'yo',
    'Ж': 'Zh', 'ж': 'zh',
    'З': 'Z', 'з': 'z',
    'И': 'I', 'и': 'i',
    'Й': 'J', 'й': 'j',
    'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l',
    'М': 'M', 'м': 'm',
    'Н': 'N', 'н': 'n',
    'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p',
    'Р': 'R', 'р': 'r',
    'С': 'S', 'с': 's',
    'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u',
    'Ф': 'F', 'ф': 'f',
    'Х': 'X', 'х': 'x',
    'Ц': 'C', 'ц': 'c',
    'Ч': 'Ch', 'ч': 'ch',
    'Ш': 'Sh', 'ш': 'sh',
    'Щ': 'Shh', 'щ': 'shh',
    'Ъ': '', 'ъ': '',
    'Ы': 'Y', 'ы': 'y',
    'Ь': '', 'ь': '',
    'Э': 'E', 'э': 'e',
    'Ю': 'Yu', 'ю': 'yu',
    'Я': 'Ya', 'я': 'ya',
    ' ': '_'
  };

  return text.split('').map(char => transl[char] || char).join('');
}


/**
 * Generates a random text string of a specified length, consisting of alphanumeric characters,
 * special symbols, and spaces. The probability of a space appearing in the string is controlled by the `spaceProbability` parameter.
 *
 * @param {number} length The length of the generated text string (number of characters). Must be a non-negative integer.
 * @param {number} [spaceProbability=0.2] The probability of a space appearing at each position in the generated string.
 *                                        The value must be in the range from 0 to 1.
 * @returns {string} A random text string of the specified length.
 *
 * @example
 * // Generate a random string of length 10 with a 20% space probability (default).
 * const randomString1 = generateRandomText(10);
 * console.log(randomString1); // Output: for example "a5h&gJ7d r"
 *
 * @example
 * // Generate a random string of length 20 with a 50% space probability.
 * const randomString2 = generateRandomText(20, 0.5);
 * console.log(randomString2); // Output: for example "c%w! 8W2?b^Z Y h$i;@,2"
 *
 * @example
 * // Generate a random string of length 5 with no spaces.
 * const randomString3 = generateRandomText(5, 0);
 * console.log(randomString3); // Output: for example "aB#c9"
 *
 * @example
 * // Generate a random string of length 15 with a space at every position.
 * const randomString4 = generateRandomText(15, 1);
 * console.log(randomString4); // Output: for example "               "
 */


export function generateRandomText(length, spaceProbability = 0.2) {
  // String containing all possible characters for generating random text
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-`~[]{}|;':\",./<>?";

  // Initialize an empty string to accumulate the result
  let text = "";

  // Loop to generate characters up to the specified string length
  for (let i = 0; i < length; i++) {
      // Check if a space needs to be added with the given probability
      if (Math.random() < spaceProbability) {
        text += " "; // Add a space at the current position
      } else {
        // Generate a random index to select a character from the 'characters' string
        const randomIndex = Math.floor(Math.random() * characters.length);
        // Add the random character at the current position
        text += characters.charAt(randomIndex);
      }
  }
  // Return the formed random text string
  return text;
}


/**
 * Toggles a specified class on a target HTML element when clicked.
 *
 * @param {string} elementId - The ID of the HTML element to target.
 * @param {string} toggleClass - The CSS class to toggle.
 */


export function toggleClassOnClick(elementId, toggleClass) {
  const element = document.getElementById(elementId);

  if (!element) {
      console.error(`Element with ID "${elementId}" not found.`);
      return;
  }

  element.addEventListener("click", () => {
    element.classList.toggle(toggleClass);
  });
}





/**
 * Initializes a sliding modal window with open and close functionality.
 *
 * @param {{
*   modalId: string;
*   modalButtonId: string;
*   modalCloseButtonId: string;
*   animationDuration: string;
*   openAnimation: string;
*   closeAnimation: string;
* }} options - An object containing the configuration for the modal.
*/


export function initializeSlidingModal(options) {
 const {
   modalId,
   modalButtonId,
   modalCloseButtonId,
   animationDuration,
   openAnimation,
   closeAnimation,
 } = options;

 const modal = document.getElementById(modalId);
 const button = document.getElementById(modalButtonId);
 const closeBtn = document.getElementById(modalCloseButtonId);

 // Crucial error handling: check if elements exist
 if (!modal) {
   console.error(`Modal with ID "${modalId}" not found.`);
   return;
 }
 if (!button) {
   console.error(`Button with ID "${modalButtonId}" not found.`);
   return;
 }
 if (!closeBtn) {
   console.error(`Close button with ID "${modalCloseButtonId}" not found.`);
   return;
 }

 button.addEventListener("click", () => {
   modal.style.animation = `${openAnimation} ${animationDuration} forwards`;
   modal.style.display = "block";
 });

 closeBtn.addEventListener("click", () => {
   modal.style.animation = `${closeAnimation} ${animationDuration} forwards`;
   setTimeout(() => {
     modal.style.animation = "";
     modal.style.display = "none";
   }, parseFloat(animationDuration) * 1000);
 });
}


// Example Usage (using an object for options):
initializeSlidingModal({
 modalId: "modalWindow",
 modalButtonId: "nav-icon1",
 modalCloseButtonId: "modalCloseButton",
 animationDuration: "0.5s",
 openAnimation: "slideIn",
 closeAnimation: "slideOut",
});





