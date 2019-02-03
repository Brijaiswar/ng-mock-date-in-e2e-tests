import { browser, by, element } from 'protractor';

export class DatePage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/date`) as Promise<any>;
  }

  getCurrentDateDisplayed() {
    return element(by.css('.e2e-curr-date')).getText();
  }

  isLoaded() {
    return browser.wait(element(by.tagName('app-date')).isPresent());
  }
}
