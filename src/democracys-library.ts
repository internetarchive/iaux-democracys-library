import { html, css, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './item-preview-image';
import { collectionsToHighlight } from './data/collections-to-highlight';
import type { card } from './data/collections-to-highlight';
import './resources-highlights';
import { carousel1, carousel1Title } from './data/carousel-1';
import { carousel2, carousel2Title } from './data/carousel-2';
import type { CarouselCard } from './data/carousel-1';
import './ti-tle';

@customElement('ia-democracys-library')
export class IaDemocracysLibrary extends LitElement {
  @property({ type: Array }) carousel1: CarouselCard[] = carousel1;

  @property({ type: Array }) carousel2: CarouselCard[] = carousel2;

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
        <div class="title"><ti-tle>${card.title}</ti-tle></div>
        <item-preview-image
          src=${card.image}
          alt="preview image."
        ></item-preview-image>
        <p>${card.blurb}</p>
        <a href=${card.link} tab="_blank"
          >Browse the ${card.title} collection</a
        >
      </article>
    `;
  }

  carouselCard(card: CarouselCard): TemplateResult {
    const url = `https://archive.org/details/${card.id}`;
    return html`
      <a href=${url}>
        <item-preview-image
          src=${card.image}
          alt=${`Go to: ${card.title}`}
        ></item-preview-image>
      </a>
    `;
  }

  get topCarousel(): TemplateResult {
    return html`
      <ti-tle class="green">${carousel1Title}</ti-tle>
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map(card => this.carouselCard(card))}
      </section>
    `;
  }

  get bottomCarousel(): TemplateResult {
    return html`
      <ti-tle class="green">${carousel2Title}</ti-tle>
      <section id="carousel-2" class="carousel">
        ${this.carousel2.map(card => this.carouselCard(card))}
      </section>
    `;
  }

  render() {
    return html`
      <section id="democracys-library-main">
        <header>cool image goes here</header>
        <section id="top-carousel">${this.topCarousel}</section>
        <section id="did-you-know">${this.didYouKnow}</section>
        <resources-highlights>
          <div id="map">
            <ti-tle class="green">Resources</ti-tle>
            <div id="map-img"></div>
          </div>
          ${this.highlights.map(card => this.createCard(card))}
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

    header {
      height: 150px;
      width: 100%;
      background-color: lightseagreen;
      margin: 0 auto;
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
      flex-direction: row;
      align-content: center;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    section#did-you-know > * {
      width: 50%;
    }
    article[no-image] {
      display: grid;
    }
    article[no-image] > p {
      grid-area: 2 / 1 / 6 / 6;
    }
    article[no-image] > a {
      grid-area: 5 / 1 / 6 / 6;
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
    article > p {
      grid-area: 2 / 3 / 7 / 8;
      overflow: auto;
      padding: 0px 10px 10px 0;
      max-height: 220px;
      margin: 0 auto;
    }
    article > a {
      grid-area: 7 / 3 / 7 / 8;
      vertical-align: baseline;
      display: flex;
    }

    /* Carousel */
    .carousel {
      overflow-x: scroll;
      display: flex;
      height: 260px;
      gap: 20px;
      scroll-snap-type: x mandatory;
      padding: 10px 20px;
    }

    .carousel > * {
      scroll-snap-align: center;
    }

    .carousel > *:nth-child(odd) {
      background-color: #e3fdd5;
    }
    .carousel > *:nth-child(even) {
      background-color: #fefe81;
    }
    /* End Carousel */

    resources-highlights > *:nth-child(odd) ti-tle {
      /* green */
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 379 115'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23fefe81' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
    resources-highlights > *:nth-child(even) ti-tle {
      /* yellow */
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 379 115' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23e3fdd5' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    div#map > #map-img {
      background-color: rgb(235, 235, 255);
      height: 70%;
    }
  `;
}
