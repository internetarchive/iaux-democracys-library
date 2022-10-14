import { html, css, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './item-preview-image';
import { collectionsToHighlight } from './data/collections-to-highlight';
import type { card } from './data/collections-to-highlight';
import './resources-highlights';
import { carousel1, carousel1Title } from './data/carousel-1';
import { carousel2, carousel2Title } from './data/carousel-2';
import type { CarouselCard } from './data/carousel-1';
import { headerImageUrl } from './data/header-image';
import { didYouKnow, Factoid } from './data/did-you-know';
import './ti-tle';

@customElement('ia-democracys-library')
export class IaDemocracysLibrary extends LitElement {
  @property({ type: Array }) carousel1: CarouselCard[] = carousel1;

  @property({ type: Array }) carousel2: CarouselCard[] = carousel2;

  @property({ type: Array }) didYouKnow: Factoid[] = didYouKnow;

  @property({ type: Array }) highlights: card[] = collectionsToHighlight;

  @property({ type: String }) fontSource = '';

  firstUpdated(): void {
    const fontStyle = document.createElement('style');
    fontStyle.innerHTML = `
    @font-face {
      font-family: "Teko";
      src: url(https://archive.org/cors/democracys-library/web-component/Teko-SemiBold.ttf);
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

  // <i><img src="https://archive.org/download/democracys-library/web-component/help.svg" alt="help icon"></i>
  get factoids(): TemplateResult[] {
    return this.didYouKnow.map((fact: Factoid, i) => {
      const tintColor = i % 2 === 0 ? 'green' : 'yellow';
      return html`
        <article>
          <div class="title">
            <ti-tle class=${tintColor}><span>DID YOU KNOW?</span></ti-tle>
          </div>
          <p class="full-width">${fact.details}</p>
        </article>
      `;
    });
  }

  resourceCard(
    card: card,
    tintColor: 'yellow' | 'green' | undefined
  ): TemplateResult {
    return html`
      <article>
        <div class="title">
          <ti-tle class=${tintColor ?? ''}>${card.title}</ti-tle>
        </div>
        <item-preview-image
          src=${card.image}
          alt="preview image."
          class=${tintColor ?? ''}
        ></item-preview-image>
        <p>${card.blurb}</p>
        <a href=${card.link} tab="_blank">Browse the ${card.collectionTitle}</a>
      </article>
    `;
  }

  carouselCard(
    card: CarouselCard,
    tintColor: 'yellow' | 'green' | undefined
  ): TemplateResult {
    const url = `https://archive.org/details/${card.id}`;
    return html`
      <a href=${url}>
        <item-preview-image
          src=${card.image}
          alt=${`Go to: ${card.title}`}
          class=${tintColor ?? ''}
        ></item-preview-image>
      </a>
    `;
  }

  get topCarousel(): TemplateResult {
    return html`
      <ti-tle class="green">${carousel1Title}</ti-tle>
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map((card, i) => {
          const tintColor = i % 2 === 0 ? 'green' : 'yellow';
          return this.carouselCard(card, tintColor);
        })}
      </section>
    `;
  }

  get bottomCarousel(): TemplateResult {
    return html`
      <ti-tle class="green">${carousel2Title}</ti-tle>
      <section id="carousel-2" class="carousel">
        ${this.carousel2.map((card, i) => {
          const tintColor = i % 2 === 0 ? 'green' : 'yellow';
          return this.carouselCard(card, tintColor);
        })}
      </section>
    `;
  }

  get resourcesOptions(): TemplateResult {
    return html`<option>Select an organization</option>`;
  }

  resourceSelected(e: Event): void {
    console.log('resource selected ********', e);
  }

  render() {
    return html`
      <section id="democracys-library-main">
        <div id="header-img">
          <img src=${headerImageUrl} alt="Welcome to Democracy's Library" />
        </div>
        <section id="top-carousel">${this.topCarousel}</section>
        <section id="did-you-know">${this.factoids}</section>
        <resources-highlights>
          <article>
            <div class="title"><ti-tle>REGIONAL ORGANIZATIONS</ti-tle></div>
            <div id="map-img">
              <img
                src="https://archive.org/cors/democracys-library/web-component/US%2BCA%20map.png"
                alt="map of united states and canada"
              />
              <div id="map-overlay"></div>
            </div>
            <div id="resources-options">
              <label
                for="select-resources"
                style="position: absolute; height: 1px; width: 1px; margin-left: -1000px"
                >Select a resource:</label
              >
              <select
                name="select-resources"
                @select=${(e: Event) => this.resourceSelected(e)}
              >
                ${this.resourcesOptions}
              </select>
            </div>
          </article>
          ${
            // eslint-disable-next-line arrow-body-style
            this.highlights.map((card, i: number) => {
              const tintColor = i % 2 === 0 ? 'green' : 'yellow';
              return this.resourceCard(card, tintColor);
            })
          }
        </resources-highlights>
        <section id="bottom-carousel">${this.bottomCarousel}</section>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      color: var(--ia-democracys-library-text-color, #000);
      font-size: 1.5rem;
      font-family: Helvetica Neue, Helvetica, sans-serif;
      height: auto;
    }

    :host(:focus) {
      outline: none;
    }

    #header-img {
      max-height: 150px;
      width: 100%;
      background-color: rgb(227, 253, 213);
      margin: 0px auto;
      overflow: hidden;
    }

    #header-img img {
      display: block;
      object-fit: contain;
      margin: 0px auto;
      max-height: inherit;
    }

    @media (max-width: 500px) {
      #header-img {
        max-height: 70px;
      }
    }
    @media (max-width: 999px) {
      #header-img {
        max-height: 100px;
      }
    }

    section#democracys-library-main {
      margin-bottom: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }
    section#democracys-library-main > section {
      margin-left: 10px !important;
      margin-right: 10px !important;
    }
    section#democracys-library-main > *:not(:first-child) {
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
    }

    section#did-you-know {
      display: flex;
      gap: 20px;
    }
    section#did-you-know > * {
      border: 1px solid transparent;
    }
    @media only screen and (max-width: 500px) {
      section#did-you-know > * {
        width: 100%;
      }
    }
    @media only screen and (min-width: 501px) and (max-width: 1300px) {
      section#did-you-know > * {
        width: 50%;
      }
    }

    a {
      color: #4b64ff;
      text-decoration: none;
    }

    /* Resource/Collection Highlight */
    article {
      display: grid;
      gap: 0px 20px;
    }
    article > * {
      border: 1px solid transparent;
    }
    article > .title {
      grid-area: 1 / 1 / 2 / 8;
    }
    article > item-preview-image {
      grid-area: 2 / 1 / 8 / 3;
    }
    article > p.full-width {
      grid-area: 2 / 1 / 7 / 7;
    }
    article > p {
      grid-area: 2 / 3 / 7 / 8;
      overflow: auto;
      padding: 0px 10px 10px 0;
      max-height: 220px;
      margin: 0 auto;
      word-break: break-word;
    }
    article > a,
    article > select {
      grid-area: 7 / 3 / 7 / 8;
      vertical-align: baseline;
      display: flex;
    }

    /* subparts of article */
    #map-img {
      width: 100%;
      grid-area: 2 / 1 / 7 / 8;
      overflow: hidden;
      position: relative;
    }

    #map-img img {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }

    #map-overlay {
      background-color: #ebebff;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: color;
    }

    #resources-options {
      grid-area: 8 / 1 / 8 / 8;
    }

    #resources-options > select {
      width: 100%;
      display: block;
    }
    /* end subparts of article */

    /* Carousel */
    .carousel {
      overflow-x: auto;
      display: flex;
      gap: 20px;
      scroll-snap-type: x mandatory;
      padding-bottom: 10px;
      scrollbar-width: none; /* Firefox */
    }

    .carousel > * {
      scroll-snap-align: center;
    }

    .carousel::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    /* End Carousel */
  `;
}
