import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/democracys-library';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <div class="match-ia-coll-margins">
        <ia-democracys-library> </ia-democracys-library>
      </div>
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
  `;
}
