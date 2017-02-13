import { WMProjectPage } from './app.po';

describe('wmproject App', function() {
  let page: WMProjectPage;

  beforeEach(() => {
    page = new WMProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
