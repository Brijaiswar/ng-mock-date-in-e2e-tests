import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/home`) as Promise<any>;
  }

  isLoaded() {
    return browser.wait(element(by.tagName('app-home')).isPresent());
  }
}
