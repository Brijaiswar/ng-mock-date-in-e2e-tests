import { HomePage } from './home.po';
import { browser, logging } from 'protractor';
import { DatePage } from './date.po';
import { DateService } from '../../src/app/services/date.service';

describe('workspace-project App', () => {

  const homePage = new HomePage();
  const datePage = new DatePage();

  beforeAll(() => {
    spyOn(DateService.prototype, 'getCurrentDate').and.returnValue(new Date(2040, 0, 1));
  });

  it('should display the fake date put in place via jasmine.clock().mockDate()', async () => {
    await homePage.navigateTo();
    await homePage.isLoaded();

    await datePage.navigateTo();
    await datePage.isLoaded();

    const result = await datePage.getCurrentDateDisplayed();
    expect(result).toEqual('2040-01-01');
  });

});
