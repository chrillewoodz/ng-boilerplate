import { WebsitePage } from './app.po';

describe('website App', () => {
  let page: WebsitePage;

  beforeEach(() => {
    page = new WebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
