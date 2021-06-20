import { newSpecPage } from '@stencil/core/testing';
import { HeroDecoratedTile } from '../hero-decorated-tile';

describe('hero-decorated-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeroDecoratedTile],
      html: `<hero-decorated-tile></hero-decorated-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <hero-decorated-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hero-decorated-tile>
    `);
  });
});
