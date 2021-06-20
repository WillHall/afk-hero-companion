import { newE2EPage } from '@stencil/core/testing';

describe('hero-decorated-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hero-decorated-tile></hero-decorated-tile>');

    const element = await page.find('hero-decorated-tile');
    expect(element).toHaveClass('hydrated');
  });
});
