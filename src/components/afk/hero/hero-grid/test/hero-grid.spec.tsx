import { newSpecPage } from '@stencil/core/testing';
import { HeroGrid } from '../hero-grid';

describe('hero-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeroGrid],
      html: `<hero-grid></hero-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <hero-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hero-grid>
    `);
  });
});
