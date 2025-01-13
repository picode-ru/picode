/**
 * Generates an HTML structure with a specified ID and a given number of span elements.
 *
 * @param {string} id - The ID for the container div element.
 * @param {number} spanCount - The number of span elements to create within the div.
 * @returns {string} The generated HTML string.
 *
 * @example
 * // Generate a navigation icon with 3 spans:
 * const navIcon = generateNavIcon("nav-icon1", 3);
 * console.log(navIcon);
 * // Output: <div id="nav-icon1"><span></span><span></span><span></span></div>
 *
 * @example
 * // Generate a navigation icon with 5 spans
 * const otherNavIcon = generateNavIcon("my-icon", 5);
 * console.log(otherNavIcon);
 * // Output: <div id="my-icon"><span></span><span></span><span></span><span></span><span></span></div>
 */
function generateNavIcon(id, spanCount) {
    if (typeof id !== 'string') {
        console.error('ID must be a string.');
        return '';
    }
    if (typeof spanCount !== 'number' || spanCount < 0) {
        console.error('spanCount must be a non-negative number.');
        return '';
    }

  let html = `<div id="${id}">`;

  for (let i = 0; i < spanCount; i++) {
    html += "<span></span>";
  }

  html += "</div>";

  return html;
}

