import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `my-input` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyInput extends PolymerElement {
  static get properties() {
    return {
      label: String,
      value: {
        type: String,
        value: '',
        notify: true,
        reflectToAttribute: true
      }
    }
  }

  static get template() {
    return html`
    <style>
    input {
      background-color: #def;
      border-radius: 5px;
    }
    </style>
      <span>[[label]]</span>
      <input type="text" value="{{value::input}}">
    `;
  }

 
}

customElements.define('my-input', MyInput);