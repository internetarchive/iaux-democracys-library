/* eslint-disable import/no-duplicates */
/* eslint-disable no-useless-escape */
import { html, fixture, expect } from '@open-wc/testing';

import { TitleSection } from '../src/dl-title';
import '../src/dl-title';

describe('`<dl-title>`, TitleSection', () => {
  it('Has specific styles', async () => {
    const el = await fixture<TitleSection>(
      html`<dl-title><h3>foo bar</h3></dl-title>`
    );

    const slot = el.shadowRoot?.querySelector('slot');
    const slottedChildren = slot?.assignedElements({ flatten: true }) || [];
    const h3 = slottedChildren[0] as HTMLElement;
    expect(h3.tagName).to.equal('H3');

    const styles = TitleSection.styles.toString();
    expect(styles).to.include("font-family: 'Teko', sans-serif;");
    expect(styles).to.include('background-repeat: no-repeat;');
    expect(styles).to.include('background-size: cover;');
    expect(styles).to.include('display: inline-block;');
    expect(styles).to.include('text-transform: uppercase;');
    expect(styles).to.include('line-height: 20px;');
    const yellowHighlighterStreak = `background-image: url("data:image/svg+xml,%3Csvg viewBox=\'0 0 379 115\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z\' fill=\'%23e3fdd5\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");`;
    expect(styles).to.include(yellowHighlighterStreak);

    const greenHighlighterStreak = `background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 379 115\'%3E%3Cpath d=\'m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z\' fill=\'%23fefe81\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");`;
    expect(styles).to.include(`:host(.green)`);
    expect(styles).to.include(greenHighlighterStreak);
  });
});
