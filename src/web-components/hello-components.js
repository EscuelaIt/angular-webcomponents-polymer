import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `hello-components` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class HelloComponents extends PolymerElement {
  static get properties() {
    return {

    }
  }

  static get template() {
    return html`
      Soy hello-components!!
    `;
  }

}

customElements.define('hello-components', HelloComponents);