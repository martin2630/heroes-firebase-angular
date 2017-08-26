import { HeroesappFirebasePage } from './app.po';

describe('heroesapp-firebase App', () => {
  let page: HeroesappFirebasePage;

  beforeEach(() => {
    page = new HeroesappFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
