/**
 * Get a html template node by ID.
 *
 * @param id The ID of the template to get.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 */
export const getTemplateClone = (id: string) =>
  (document.getElementById(id) as HTMLTemplateElement)?.content?.cloneNode(true);

/**
 * Get the position index of a given element relative to its sibling elements.
 *
 * @param elem An element to find the index position of.
 */
export const getIndex = (elem: HTMLElement) =>
  [...elem.parentNode.children].indexOf(elem);