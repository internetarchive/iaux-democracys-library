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
        <div id="overlay"></div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    :host(.yellow) div#overlay {
      background-color: #fefe81;
    }

    :host(.green) div#overlay {
      background-color: #e3fdd5;
    }

    :host(.blue) div#overlay {
      background-color: #e5f1fa;
    }

    :host(.yellow) img,
    :host(.green) img,
    :host(.blue) img {
      mix-blend-mode: darken;
    }

    div {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    img {
      object-fit: cover;
      width: var(--ia-dl-resource-card-img-width, 160px);
      height: 260px;
    }

    div#overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: color;
    }
  `;
}
