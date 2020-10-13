const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * Define selectors using getter methods
     */
    get homeButton () { return $('#homeMenu') }
    get onlineBankingButton () { return $('#onlineBankingMenu') }
    get feedbackButton () { return $('#feedback') }
    get moreServicesButton () { return $('#online-banking') }


    /**
     * Clicks tab home button on the navbar page.
     */
    clickHomeButton () {
      this.homeButton.click(); 
    }

     /**
     * Clicks tab Online Banking button on the navbar page.
     */
    clickOnlineBankingButton () {
      //browser.debug();
      this.onlineBankingButton.waitForDisplayed();
      this.onlineBankingButton.click();
    }


    /**
     * Clicks tab feedback button on the navbar page.
     */
    clickFeedbackButton () {
      this.feedbackButton.click(); 
    }

    /**
     * Clicks more services button
     */
    clickMoreServicesButton () {
      this.moreServicesButton.click(); 
    }

    /**
     * Opens up the landing page 
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LandingPage();
