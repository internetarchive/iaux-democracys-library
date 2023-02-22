import { html, css, LitElement, HTMLTemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/democracys-library';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <div class="match-ia-coll-margins">
        <ia-democracys-library>
          ${this.dummyActionBarTemplate}
        </ia-democracys-library>
      </div>
    `;
  }

  /**
   * A basic template to resemble the action bar that appears on prod.
   */
  private get dummyActionBarTemplate(): HTMLTemplateResult {
    return html`
      <div slot="action-bar-section">
        ${this.dummyActionButtonTemplate('Share', 'icon-share')}
        ${this.dummyActionButtonTemplate('Favorite', 'icon-favorite')}
        ${this.dummyActionButtonTemplate('RSS', 'icon-rss')}
      </div>
    `;
  }

  /**
   * Returns a template for an unimplemented action bar button with the given
   * label text and icon class. Clicking the button will alert that it is not
   * implemented.
   */
  private dummyActionButtonTemplate(
    label: string,
    iconClass: string
  ): HTMLTemplateResult {
    return html`
      <button
        class="action-bar-button"
        @click=${() => alert('Not implemented in demo app')}
      >
        <span class="icon ${iconClass}"></span> ${label}
      </button>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    .match-ia-coll-margins {
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
    }
    @media (min-width: 768px) {
      .match-ia-coll-margins {
        max-width: 750px;
      }
    }
    @media (min-width: 992px) {
      .match-ia-coll-margins {
        max-width: 970px;
      }
    }
    @media (min-width: 1200px) {
      .match-ia-coll-margins {
        max-width: 1170px;
      }
    }

    /** DUMMY ACTION BAR STYLES */
    .action-bar-button {
      display: block;
      padding: 0;
      border: 0;
      outline: 0;
      appearance: none;
      background: inherit;
      font-family: inherit;
      font-size: inherit;
      color: #2c2c2c;
      cursor: pointer;
    }

    .action-bar-button .icon::before {
      font-family: 'Iconochive-Regular';
      font-size: 125%;
    }

    .icon-share::before {
      content: '\\1f381';
      position: relative;
      top: 1px;
    }
    .icon-favorite::before {
      content: '\\2605';
    }
    .icon-rss::before {
      content: '\\221e';
    }
  `;
}
