import { html, css, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './item-preview-image';
import { collectionsToHighlight } from './data/collections-to-highlight';
import type { card } from './data/collections-to-highlight';
import './resources-highlights';
import { carousel1, carousel1Title } from './data/carousel-1';
import type { CarouselCard } from './data/carousel-1';
import { didYouKnow, Factoid } from './data/did-you-know';
import './ti-tle';
import './arti-cle';
import './header';

@customElement('ia-democracys-library')
export class IaDemocracysLibrary extends LitElement {
  @property({ type: Array }) carousel1: CarouselCard[] = carousel1;

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
      const tintColor = i % 2 === 0 ? 'yellow' : 'green';
      return html`
        <arti-cle>
          <div class="title">
            <ti-tle class=${tintColor}
              ><span class="did-you-know-title">DID YOU KNOW?</span></ti-tle
            >
          </div>
          <p class="full-width">${fact.details}</p>
        </arti-cle>
      `;
    });
  }

  resourceCard(card: card, tintColor: 'yellow' | 'green'): TemplateResult {
    return html`
      <arti-cle>
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
          const tintColor = i % 2 === 0 ? 'yellow' : 'green';
          return this.carouselCard(card, tintColor);
        })}
      </section>
    `;
  }

  get resourcesOptions(): TemplateResult {
    return html`<option>Select a resource</option>`;
  }

  resourceSelected(e: Event): void {
    console.log('resource selected ********', e);
  }

  render() {
    return html`
      <section id="democracys-library-main">
        <welcome-header><slot></slot></welcome-header>
        <section id="top-carousel">${this.topCarousel}</section>
        <section id="did-you-know">${this.factoids}</section>
        <resources-highlights>
          <arti-cle>
            <div class="title"><ti-tle class="green">Resources</ti-tle></div>
            <div class="map-img">
              <img
                src="https://archive.org/cors/democracys-library/web-component/US%2BCA%20map.png"
                alt="map of united states and canada"
              />
              <div class="map-overlay"></div>
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
          </arti-cle>
          ${
            // eslint-disable-next-line arrow-body-style
            this.highlights.map((card, i: number) => {
              const tintColor = i % 2 === 0 ? 'yellow' : 'green';
              return this.resourceCard(card, tintColor);
            })
          }
        </resources-highlights>
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

    welcome-header {
      background-color: #e3fdd5;
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
      margin-left: auto;
      margin-right: auto;
    }

    /** Did You Know */
    section#did-you-know {
      display: flex;
      gap: 20px;
    }
    section#did-you-know > * {
      border: 1px solid transparent;
    }
    .did-you-know-title {
      background-image: url(https://archive.org/download/democracys-library/web-component/help.svg);
      padding-left: 30px;
      background-repeat: no-repeat;
      vertical-align: initial;
      background-size: 28px;
      background-position: 0 25%;
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
    /** End Did You Know */

    /* MAP */
    .map-img {
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .map-img img {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }

    .map-overlay {
      background-color: #ebebff;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: color;
    }
    /* End MAP */

    /** Resources */
    #resources-options {
      grid-area: 8 / 1 / 8 / 8;
    }
    #resources-options > select {
      width: 100%;
      display: block;
    }
    /** End Resources */

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
