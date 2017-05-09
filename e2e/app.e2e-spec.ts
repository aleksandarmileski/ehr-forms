import { ThinkehrFormPage } from './app.po';

describe('thinkehr-form App', () => {
  let page: ThinkehrFormPage;

  beforeEach(() => {
    page = new ThinkehrFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
