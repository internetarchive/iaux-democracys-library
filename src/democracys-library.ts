import { html, css, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './item-preview-image';
import { collectionsToHighlight } from './data/collections-to-highlight';
import type { card } from './data/collections-to-highlight';
import './resources-highlights';

@customElement('ia-democracys-library')
export class IaDemocracysLibrary extends LitElement {
  @property({ type: Array }) carousel1 = [];

  @property({ type: Array }) carousel2 = [];

  @property({ type: Array }) didYouKnow = [];

  @property({ type: Array }) highlights: card[] = collectionsToHighlight;

  @property({ type: String }) fontSource = '';

  firstUpdated(): void {
    const fontUrl = this.fontSource || '/assets/Teko-SemiBold.ttf';
    const fontStyle = document.createElement('style');
    fontStyle.innerHTML = `
    @font-face {
      font-family: "Teko";
      src: url(${fontUrl});
    }`;
    fontStyle.setAttribute('id', 'teko-font');
    document.head.appendChild(fontStyle);
  }

  disconnectedCallback(): void {
    const fontLink = document.head.querySelector('#teko-font');
    if (fontLink) {
      document.head.removeChild(fontLink);
    }
  }

  createCard(card: card): TemplateResult {
    return html`
      <article>
        <ti-tle>${card.title}</ti-tle>
        <item-preview-image src=${card.image}></item-preview-image>
        <p>${card.blurb}</p>
        <a href=${card.link} tab="_blank"
          >Browse the ${card.title} collection</a
        >
      </article>
    `;
  }

  render() {
    return html`
      <section id="democracys-library-main">
        <header>
          cool image goes here
        </header>
        <carou-sel .items=${this.carousel1}></carou-sel>
        <section id="did-you-know">
          <article no-image>
            <ti-tle>Did You Know</ti-tle>
            <p>Did you know text</p>
            <a href="#">Read More about this</a>
          </article>
          <article no-image>
            <ti-tle>Did You Know</ti-tle>
            <p>Did you know text</p>
            <a href="#">Read More about this</a>
          </article>
        </section>
        <resources-highlights>
          <ait-map></ait-map>
          ${this.highlights.map(card => this.createCard(card))}
        </resources-highlights>
        <carou-sel .items=${this.carousel2}></carous-el>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      color: var(--ia-democracys-library-text-color, #000);
      font-size: 1.5rem;
      font-family: Helvetica Neue, Helvetica, sans-serif;
      padding: 10px;
      border: 1px solid red;
      height: auto;
    }

    :host(:focus) {
      outline: none;
    }

    ti-tle {
      font-family: 'Teko', sans-serif;
      font-size: 2rem;
    }

    section#democracys-library-main > * {
      margin: 10px auto;
    }

    section#did-you-know {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    section#did-you-know > * {
      width: 50%;
    }
    article[no-image] > p {
      grid-area: 2 / 1 / 6 / 6;
    }
    article[no-image] > a {
      grid-area: 5 / 1 / 6 / 6;
    }

    article {
      display: grid;
    }
    article ti-tle {
      font-family: Teko, sans-serif;
    }
    article {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(8, 1fr);
      gap: 0px 20px;
      border: 1px dotted purple;
    }
    article > ti-tle {
      grid-area: 1 / 1 / 2 / 6;
    }
    article > item-preview-image {
      grid-area: 3 / 1 / 8 / 3;
    }
    article > p {
      grid-area: 3 / 3 / 8 / 8;
      margin: 0px;
      overflow: auto;
    }
    article > a {
      grid-area: 8 / 3 / 8 / 8;
    }

    carou-sel {
      border: 1px solid blue;
      overflow-x: auto;
      overflow-y: none;
      width: 100%;
      display: block;
      height: 260px;
    }
  `;
}
/*
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
*/
