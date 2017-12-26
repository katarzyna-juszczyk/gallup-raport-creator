import { GallupRaportCreatorPage } from './app.po';

describe('gallup-raport-creator App', () => {
  let page: GallupRaportCreatorPage;

  beforeEach(() => {
    page = new GallupRaportCreatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
