import { TodoSearchAppPage } from './app.po';

describe('todo-search-app App', function() {
  let page: TodoSearchAppPage;

  beforeEach(() => {
    page = new TodoSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
