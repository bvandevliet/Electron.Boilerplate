/**
 * Get a html template node by ID.
 *
 * @param id The ID of the template to get.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 */
export const getTemplateClone = (id: string) =>
  (document.getElementById(id) as HTMLTemplateElement)?.content?.cloneNode(true);