import { AngularWikipediaInstantSearchPage } from './app.po';

describe('angular-wikipedia-instant-search App', () => {
  let page: AngularWikipediaInstantSearchPage;

  beforeEach(() => {
    page = new AngularWikipediaInstantSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
