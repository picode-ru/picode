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
export function _translate(text) {
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










export function _addCss(id, arrayCss){

  arrayCss.keys().forEach(element => {
    // console.log(element);
    // console.log(arrayCss[element]);

    id.style[element] = arrayCss[element];
});

} 






