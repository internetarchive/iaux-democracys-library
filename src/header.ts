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
        <div class="pic"></div>
        <div class="left"></div>
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
      position: absolute;
      top: 0;
      bottom: 0;
      margin-left: 10px;
      width: 100%;
      background-repeat: no-repeat;
      height: 100%;
      z-index: 2;
      pointer-events: none;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-logo-rebrand.svg');
    }

    .pic {
      z-index: 1;
      top: 0px;
      bottom: 0px;
      margin: auto;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center bottom;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-image-rebrand.webp');
    }

    .action-bar-section {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      min-width: 27px;
    }

    @media only screen and (min-width: 768px) {
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
    }

    @media only screen and (max-width: 767px) {
      :host {
        height: var(--ia-dl-header-mobile-height, 88px) !important;
      }
      .left {
        margin-left: 5px;
      }
    }
  `;
}
