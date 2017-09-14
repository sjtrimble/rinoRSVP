import { RinoPage } from './app.po';

describe('rino App', () => {
  let page: RinoPage;

  beforeEach(() => {
    page = new RinoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
