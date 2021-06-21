import { newSpecPage } from '@stencil/core/testing';
import { ModifyHero } from '../modify-hero';

describe('modify-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModifyHero],
      html: `<modify-hero></modify-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <modify-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </modify-hero>
    `);
  });
});
