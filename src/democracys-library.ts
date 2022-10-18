import { html, css, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { map } from 'lit/directives/map.js';
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
import { resourceCardLink } from './data/resource-card-link';

@customElement('ia-democracys-library')
export class IaDemocracysLibrary extends LitElement {
  @property({ type: Array }) carousel1: CarouselCard[] = carousel1;

  @property({ type: Array }) didYouKnow: Factoid[] = didYouKnow;

  @property({ type: Array }) highlights: card[] = collectionsToHighlight;

  @property({ type: Object }) availableResources:
    | Record<string, []>
    | undefined = undefined;

  firstUpdated(): void {
    this.fetchAvailableResources();
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

  async fetchAvailableResources(): Promise<void> {
    const res = await fetch(
      'https://archive.org/cors/democracys-library/web-component/regional-resources.json'
    );
    const data = await res.json();
    const areas = Object.keys(data);
    if (areas.length) {
      this.availableResources = data;
    } else {
      this.availableResources = undefined;
    }
  }

  // <i><img src="https://archive.org/download/democracys-library/web-component/help.svg" alt="help icon"></i>
  get factoids(): TemplateResult[] {
    return this.didYouKnow.map((fact: Factoid, i) => {
      const tintColor = (i % 2 === 0 ? 'yellow' : 'green') as string;
      return html`
        <arti-cle>
          <div class="title">
            <ti-tle class=${tintColor}
              ><span class="did-you-know-title">${fact.cardTitle}</span></ti-tle
            >
          </div>
          <p class="full-width" tabindex="0">${fact.details}</p>
          <div class="factoid-link">
            <a
              href=${fact.link}
              target="_blank"
              class="factoid-link ${fact.donateCard ? 'donate' : ''}"
              @click=${() => {
                if ((window as any).archive_analytics) {
                  (window as any).archive_analytics?.send_event(
                    'DemocracysLibrary',
                    'FactoidLinkClicked',
                    fact.link
                  );
                }
              }}
              >${fact.linkText}</a
            >
          </div>
        </arti-cle>
      `;
    });
  }

  resourceCard(card: card, tintColor: 'yellow' | 'green'): TemplateResult {
    return html`
      <arti-cle tabindex="0">
        <div class="title">
          <ti-tle class=${tintColor ?? ''}>${card.title}</ti-tle>
        </div>
        <a
          class="item-preview"
          href=${`https://archive.org/details/${card.id}`}
          target="_blank"
          title=${`Explore item: ${card.id}`}
          @click=${() => {
            if ((window as any).archive_analytics) {
              (window as any).archive_analytics?.send_event(
                'DemocracysLibrary',
                'ResourceCardItemImageClick',
                card.id
              );
            }
          }}
        >
          <item-preview-image
            src=${card.image}
            class=${tintColor ?? ''}
          ></item-preview-image>
        </a>
        <p tabindex="0">${card.blurb}</p>
        <a
          class="link-to-collection"
          href=${card.link}
          tab="_blank"
          @click=${() => {
            if ((window as any).archive_analytics) {
              (window as any).archive_analytics?.send_event(
                'DemocracysLibrary',
                'ResourceCardCollectionLinkClick',
                card.link
              );
            }
          }}
          >Browse the ${card.collectionTitle}</a
        >
      </arti-cle>
    `;
  }

  carouselCard(
    card: CarouselCard,
    tintColor: 'yellow' | 'green' | undefined
  ): TemplateResult {
    const url = `https://archive.org/details/${card.id}`;
    return html`
      <a
        href=${url}
        target="_blank"
        title=${`Explore item: ${card.title}`}
        @click=${() => {
          if ((window as any).archive_analytics) {
            (window as any).archive_analytics?.send_event(
              'DemocracysLibrary',
              'CaroselCardClick',
              card.id
            );
          }
        }}
      >
        <item-preview-image
          src=${card.image}
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
    const availableRegions = Object.keys(this.availableResources ?? {});
    return html`
      <option>Select an organization</option>
      ${repeat(
        availableRegions,
        region => region,
        region => {
          const group = this.availableResources?.[region] ?? [];
          return html`
            <optgroup label=${region}>
              ${map(group, (resource: Record<string, string>) => {
                // eslint-disable-next-line dot-notation
                const url = resource['URL'] as string;
                const resourceName = resource['Organization Name'] as string;
                return html`
                  <option .value=${url} data-url=${url}>${resourceName}</option>
                `;
              })}
            </optgroup>
          `;
        }
      )}
    `;
  }

  resourceSelected(e: Event): void {
    const url = (e?.target as HTMLSelectElement).value;

    if ((window as any).archive_analytics) {
      (window as any).archive_analytics?.send_event(
        'DemocracysLibrary',
        'ResourceSelected',
        url
      );
    }

    window.location.href = url;
  }

  render() {
    return html`
      <section id="democracys-library-main">
        <welcome-header>
          <div slot="action-bar-section">
            <slot name="action-bar-section"></slot>
          </div>
        </welcome-header>
        <section id="top-carousel" class="one-col-margin">
          ${this.topCarousel}
        </section>
        <section id="did-you-know" class="one-col-margin">
          ${this.factoids}
        </section>
        <resources-highlights class="one-col-margin">
          <arti-cle>
            <div class="title">
              <ti-tle class="green">REGIONAL ORGANIZATIONS</ti-tle>
            </div>
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
                style="position: absolute; height: 1px; width: 1px; margin-left: -1000px; overflow: hidden;"
                >Here are some resources:</label
              >
              <select
                id="select-resources"
                @change=${(e: Event) => this.resourceSelected(e)}
              >
                ${this.resourcesOptions}
              </select>
              <a
                class="gov-world-sites"
                href=${resourceCardLink.link}
                @click=${() => {
                  if ((window as any).archive_analytics) {
                    (window as any).archive_analytics?.send_event(
                      'DemocracysLibrary',
                      'AitGovWorldSites',
                      resourceCardLink.link
                    );
                  }
                }}
                >${resourceCardLink.linkText}</a
              >
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

    a {
      color: #4b64ff;
      text-decoration: none;
    }

    @media only screen and (min-width: 501px) and (max-width: 650px) {
      resources-highlights {
        --ia-dl-resource-card-img-width: 110px !important;
      }
    }

    welcome-header {
      background-color: #e3fdd5;
    }

    section#democracys-library-main {
      display: flex;
      flex-direction: column;
    }
    section#democracys-library-main > *:not(:first-child) {
      margin-top: 10px;
    }

    /** Did You Know */
    section#did-you-know {
      display: flex;
      gap: 20px;
    }
    section#did-you-know > * {
      border: 1px solid transparent;
      width: 50%;
      padding-bottom: 10px;
    }
    .did-you-know-title {
      vertical-align: initial;
      background-size: 28px;
      background-position: 0 25%;
    }

    @media only screen and (max-width: 550px) {
      section#did-you-know > * {
        width: 100%;
      }
    }
    @media only screen and (max-width: 768px) {
      section > .one-col-margin {
        margin-left: 10px;
        margin-right: 10px;
        overflow: hidden;
      }
    }
    /** End Did You Know */

    /* MAP */
    .map-img {
      width: 100%;
      overflow: hidden;
      position: relative;
      max-height: 220px;
    }

    .map-img img {
      object-fit: contain;
      height: 100%;
      width: 100%;
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
    .gov-world-sites {
      padding: 5px 5px 5px 0;
      display: block;
    }
    /* End MAP */

    /** Resources */
    #resources-options {
      grid-area: 6 / 1 / 6 / 8;
      width: 95%;
      left: auto;
    }

    #resources-options > select {
      width: 100%;
      display: block;
    }

    a.donate {
      border: 1px solid black;
      padding: 5px 20px;
      font-family: 'Teko', sans-serif;
      font-size: 20px;
      text-decoration: none;
      color: #000 !important;
      background-color: #e3fdd5;
      box-shadow: 5px 5px #333;
    }
    a.donate:active {
      background-color: #b5caaa;
      box-shadow: 2px 2px #333;
      border: 2px inner solid #e3fdd5;
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
      display: block;
      position: relative;
    }
    .carousel::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    /* End Carousel */
  `;
}
