import { html, fixture, expect } from '@open-wc/testing';

import type { IaDemocracysLibrary } from '../src/democracys-library';
import '../src/democracys-library';

describe('IaDemocracysLibrary', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<IaDemocracysLibrary>(
      html`<ia-democracys-library></ia-democracys-library>`
    );

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<IaDemocracysLibrary>(
      html`<ia-democracys-library></ia-democracys-library>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<IaDemocracysLibrary>(
      html`<ia-democracys-library
        title="attribute title"
      ></ia-democracys-library>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<IaDemocracysLibrary>(
      html`<ia-democracys-library></ia-democracys-library>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
