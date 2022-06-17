import * as html from '../includes/functions-html';
import CustomElem from './class-custom-elem';

/**
 * A simple custom web component for a counter element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
 */
export default class MyCounter extends HTMLElement implements CustomElem
{
  counter: HTMLElement;

  decrementBtn: HTMLButtonElement;

  incrementBtn: HTMLButtonElement;

  constructor ()
  {
    super();

    // this.attachShadow({ mode: 'open' });
    this.appendChild(html.getTemplateClone('tmpl-my-counter'));

    this.counter = this.querySelector('.counter');
    this.counter.innerText = this.value.toString();

    this.decrementBtn = this.querySelector('.decrement');
    this.incrementBtn = this.querySelector('.increment');

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  get value ()
  {
    return parseInt(this.getAttribute('value') ?? '0');
  }

  set value (newValue)
  {
    this.setAttribute('value', newValue.toString());
  }

  static get observedAttributes (): string[]
  {
    return ['value'];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attributeChangedCallback? (attrName: string, oldValue?: string, newValue?: string): void
  {
    this.counter.innerText = this.value.toString();
  }

  decrement ()
  {
    this.value--;
  }

  increment ()
  {
    this.value++;
  }

  connectedCallback (): void
  {
    this.decrementBtn.addEventListener('click', this.decrement);
    this.incrementBtn.addEventListener('click', this.increment);
  }

  disconnectedCallback (): void
  {
    this.decrementBtn.removeEventListener('click', this.decrement);
    this.incrementBtn.removeEventListener('click', this.increment);
  }
}

customElements.define('my-counter', MyCounter);