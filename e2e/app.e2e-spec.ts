import { MapDrafterPage } from './app.po';

describe('map-drafter App', () => {
  let page: MapDrafterPage;

  beforeEach(() => {
    page = new MapDrafterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
