import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('welcome-header')
export class WelcomeHeader extends LitElement {
  render() {
    return html`
      <section class="celebration-header">
        <span class="celebration-title"
          >Welcome to Democracy's Library collection.</span
        >
        <div class="left"></div>
        <div class="pic"></div>
        <div class="action-bar-section">
          <slot name="action-bar-section"></slot>
        </div>
      </section>
    `;
  }

  static styles = css`
    :host {
      position: relative;
      display: block;
      width: 100%;
      height: 230px;
      margin-bottom: 10px;
    }

    section,
    section > * {
      height: inherit;
    }

    .celebration-title {
      height: 1px;
      width: 1px;
      position: absolute;
      margin-left: -1000px;
    }

    .left {
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      z-index: 1;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-text.svg');
    }

    .pic {
      z-index: 2;
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 50px;
      height: 100%;
      width: 610px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right bottom;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-image.webp');
    }

    .action-bar-section {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      min-width: 50px;
    }

    @media only screen and (min-width: 768px) {
      .pic {
        right: 100px;
      }
      .action-bar-section {
        width: 100px;
      }
    }

    @media only screen and (min-width: 1301px) {
      :host {
        height: 230px !important;
      }
    }

    @media only screen and (max-width: 1300px) {
      :host {
        height: 180px !important;
      }
    }

    @media only screen and (max-width: 990px) {
      :host {
        height: 150px !important;
      }
      .left {
        background-image: url('https://archive.org/download/democracys-library/web-component/banner-text-mini.svg');
      }
    }

    @media only screen and (max-width: 767px) {
      :host {
        height: var(--ia-dl-header-mobile-height, 88px) !important;
      }

      // this is when action bar drops to mini view
      .pic {
        right: 50px !important;
      }
      .action-bar-section {
        width: 50px !important;
      }
    }
  `;
}
