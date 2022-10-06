import { html, css, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('item-preview-image')
export class ItemPreviewImage extends LitElement {
  @property({ type: String }) src = '';

  @property({ type: String }) alt = '';

  render() {
    return html`
      <div>
        <img src=${this.src} alt=${this.alt} />
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    div {
      height: 260px;
      width: 160px;
      display: flex;
      flex-direction: column;
    }

    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
  `;
}
