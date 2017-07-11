import { TestShounPage } from './app.po';

describe('test-shoun App', function() {
  let page: TestShounPage;

  beforeEach(() => {
    page = new TestShounPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
