import { PrdcvPage } from './app.po';

describe('prdcv App', function() {
  let page: PrdcvPage;

  beforeEach(() => {
    page = new PrdcvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
