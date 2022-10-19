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

    ::slotted(*.action-bar-section) {
      height: 100%;
      float: right;
      padding: 0 10px;
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
      overflow: hidden;
    }

    .left {
      background-repeat: no-repeat;
      height: 100%;
      z-index: 1;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-text-beta.svg');
    }

    .pic {
      z-index: 2;
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 35px;
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
      min-width: 27px;
    }

    @media only screen and (min-width: 768px) {
      .pic {
        right: 88px;
      }
      .action-bar-section {
        margin-right: 5px;
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
        background-image: url('https://archive.org/download/democracys-library/web-component/banner-text-mini-beta.svg');
      }
    }

    @media only screen and (max-width: 767px) {
      :host {
        height: var(--ia-dl-header-mobile-height, 88px) !important;
      }
      .left {
        margin-left: 10px;
      }
    }

    @media only screen and (max-width: 510px) {
      .pic {
        background-image: url('https://archive.org/download/democracys-library/web-component/banner-image-mini.webp');
      }
    }
  `;
}
