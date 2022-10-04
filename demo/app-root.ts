import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/democracys-library';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <ia-democracys-library title="Hello">
        <div slot="my-slot">Some slotted content</div>
      </ia-democracys-library>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
