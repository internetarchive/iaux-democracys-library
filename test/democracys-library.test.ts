import { html, fixture, expect } from '@open-wc/testing';

import type { IaDemocracysLibrary } from '../src/democracys-library';
import '../src/democracys-library';
import { carousel1, carousel1Title } from '../src/data/carousel-1';

describe('IaDemocracysLibrary', () => {
  it('has particular order', async () => {
    const el = await fixture<IaDemocracysLibrary>(
      html`<ia-democracys-library></ia-democracys-library>`
    );

    const mainComponent = el.shadowRoot?.querySelector(
      '#democracys-library-main'
    );
    const sections = mainComponent?.children;
    expect(mainComponent).to.exist;
    expect(sections).to.have.lengthOf(4);
    expect(sections?.[0]?.tagName).to.equal('WELCOME-HEADER');
    expect(sections?.[1]?.tagName).to.equal('SECTION');
    expect(sections?.[1]?.getAttribute('id')).to.contain('top-carousel');
    expect(sections?.[1]?.classList.toString()).to.contain('one-col-margin');
    expect(sections?.[2]?.tagName).to.equal('SECTION');
    expect(sections?.[2]?.getAttribute('id')).to.contain('did-you-know');
    expect(sections?.[2]?.classList.toString()).to.contain('one-col-margin');
    expect(sections?.[3]?.tagName).to.equal('RESOURCES-HIGHLIGHTS');
    expect(sections?.[3]?.classList.toString()).to.contain('one-col-margin');
  });

  it('Welcome Header has folded named slot bypass', async () => {
    const el = await fixture<IaDemocracysLibrary>(
      html`<ia-democracys-library></ia-democracys-library>`
    );

    const mainComponent = el.shadowRoot?.querySelector(
      '#democracys-library-main'
    );
    const sections = mainComponent?.children;
    const welcomeHeader = sections?.[0];
    expect(welcomeHeader?.querySelector('div[slot]')).to.exist;
    expect(
      welcomeHeader?.querySelector('div[slot]')?.getAttribute('slot')
    ).to.equal('action-bar-section');
    expect(welcomeHeader?.querySelector('div[slot]')?.querySelector('slot')).to
      .exist;
    expect(
      welcomeHeader
        ?.querySelector('div[slot]')
        ?.querySelector('slot')
        ?.getAttribute('name')
    ).to.equal('action-bar-section');
  });

  it('Carousel has nested carousel cards', async () => {
    const el = await fixture<IaDemocracysLibrary>(
      html`<ia-democracys-library></ia-democracys-library>`
    );

    const mainComponent = el.shadowRoot?.querySelector(
      '#democracys-library-main'
    );
    const sections = mainComponent?.children;
    const carouselContainer = sections?.[1];
    expect(carouselContainer).to.exist;
    // expect(carousel?.children).to.equal(33);
    expect(carouselContainer?.children[0].tagName).to.equal('TI-TLE');
    expect(carouselContainer?.children[0].innerHTML).to.contain(carousel1Title);

    expect(carouselContainer?.children[1].tagName).to.equal('SECTION');
    expect(carouselContainer?.children[1].getAttribute('id')).to.equal(
      'carousel-1'
    );

    expect(carouselContainer?.children[1].children.length).to.be.greaterThan(8);

    const mainCarousel = carouselContainer?.children[1];

    (mainCarousel?.children as unknown as HTMLElement[]).forEach(
      (child: HTMLElement, i) => {
        const data = carousel1[i] as Record<string, string>;
        expect(child.tagName).to.equal('A');
        expect(child.getAttribute('href')).to.contain(data.id);
        expect(child.getAttribute('target')).to.equal('_blank');
        expect(child.getAttribute('title')).to.contain(data.title);

        // image
        expect(child.children[0].tagName).to.equal('ITEM-PREVIEW-IMAGE');
        expect(child.children[0].getAttribute('src')).to.contain(data.image);
      }
    );
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<IaDemocracysLibrary>(
      html`<ia-democracys-library></ia-democracys-library>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
