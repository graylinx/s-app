import { SAppPage } from './app.po';

describe('s-app App', function() {
  let page: SAppPage;

  beforeEach(() => {
    page = new SAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
