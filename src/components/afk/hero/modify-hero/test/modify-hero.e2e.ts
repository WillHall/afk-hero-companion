import { newE2EPage } from '@stencil/core/testing';

describe('modify-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<modify-hero></modify-hero>');

    const element = await page.find('modify-hero');
    expect(element).toHaveClass('hydrated');
  });
});
