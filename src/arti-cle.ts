import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('arti-cle')
export class ArticleBlock extends LitElement {
  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: grid;
      gap: 0px 20px;
    }

    ::slotted(*) {
      border: 1px solid transparent;
    }

    ::slotted(*.title) {
      grid-area: 1 / 1 / 2 / 8;
    }

    ::slotted(*.item-preview) {
      grid-area: 2 / 1 / 8 / 3;
    }

    ::slotted(p.full-width) {
      grid-area: 2 / 1 / 7 / 8;
      margin-left: 0;
    }

    ::slotted(div.factoid-link) {
      grid-column-end: 8;
      grid-column-start: 1;
    }

    ::slotted(p) {
      grid-area: 2 / 3 / 7 / 8;
      overflow: auto;
      padding: 0px 10px 10px 0;
      margin: 0 auto;
      word-break: break-word;
    }

    ::slotted(a.link-to-collection),
    ::slotted(select) {
      grid-area: 7 / 3 / 7 / 8;
      vertical-align: baseline;
      display: flex;
    }

    ::slotted(*.map-img) {
      grid-area: 2 / 1 / 6 / 8;
    }
  `;
}
