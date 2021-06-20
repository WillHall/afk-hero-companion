import { newE2EPage } from '@stencil/core/testing';

describe('hero-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hero-grid></hero-grid>');

    const element = await page.find('hero-grid');
    expect(element).toHaveClass('hydrated');
  });
});
