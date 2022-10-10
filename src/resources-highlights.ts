import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('resources-highlights')
export class ResourcesHighlights extends LitElement {
  render() {
    return html` <slot></slot> `;
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: space-around;
      flex-flow: wrap;
    }

    ::slotted(*) {
      width: 32%;
      border: 1px solid transparent;
      margin-bottom: 10px;
      max-height: 350px;
    }

    @media only screen and (max-width: 500px) {
      :host {
        display: block;
      }
      ::slotted(*) {
        width: 100%;
      }
    }

    @media only screen and (min-width: 501px) and (max-width: 1300px) {
      ::slotted(*) {
        width: 48%;
      }
    }
  `;
}
