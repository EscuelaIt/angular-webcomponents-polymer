import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `counter-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class counterComponent extends PolymerElement {
  static get properties() {
    return {
      counter: {
        type: Number
      },
      final: {
        type: Number,
        value: 5
      }
    }
  }

  static get template() {
    return html`
      <style>
        :host {
          padding: 10px;
          background-color: #eee;
          display: inline-block;
          margin: 10px 0;
        }
      </style>
      <div on-click="adicionar">
        Soy counter component: [[counter]]
      </div>
    `;
  }

  adicionar() {
    this.counter++;
    if(this.counter == this.final) {
      this.dispatchEvent(new CustomEvent('finalized', {
        detail: this.counter
      }));

    }
  }
}

customElements.define('counter-component', counterComponent);