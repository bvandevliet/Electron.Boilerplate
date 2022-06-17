/**
 * A base class for custom elements.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
 */
export default interface CustomElem
{
  /**
   * Array of attribute names to notice change for.
   */
  readonly observedAttributes?: string[];

  /**
   * Invoked each time one of the custom element's attributes is added, removed, or changed.
   *
   * @param attrName Attribute name.
   * @param oldValue Old attribute value.
   * @param newValue New attribute value.
   */
  attributeChangedCallback? (attrName: string, oldValue?: string, newValue?: string): void;

  /**
   * Invoked each time the custom element is appended into a document-connected element.
   * This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.
   * Typically, use this method to add event listeners and such.
   */
  connectedCallback (): void;

  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   * Typically, use this method to remove added event listeners and such.
   */
  disconnectedCallback (): void;
}