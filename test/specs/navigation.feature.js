const LandingPage = require('../pageobjects/landing.page');
const OnlineBankingPage = require('../pageobjects/onlineBanking.page');
const FeedbackPage = require('../pageobjects/feedBack.page');

describe('Navigation feature',  function(){
    it('should be able to redirect user to login page when clicking on online banking options without being logged', function(){
      //Opening the landing page.
      LandingPage.open();

      //Click online banking tab button
      LandingPage.clickOnlineBankingButton();
                
      //Click an item randomly from the links of the page
      OnlineBankingPage.randomlyClickAnyOfTheLinksOfOnlineBankingPage();

      //Asserts login input is present on the page, meaning we correclty redirected to login page
      const OnlineBankingHeader = $("input[name='submit']");
      expect(OnlineBankingHeader).toBeExisting();
    });

    it('should be able to go to online banking page using more services button in home page', function(){
      //Opening the landing page.
      LandingPage.open();

      //click More services button at the bottom of the page.
      LandingPage.clickMoreServicesButton();

      //Asserts header is present and with correct text.
      const OnlineBankingHeader = $("h1*=Online ");
      expect(OnlineBankingHeader).toBeExisting();
      expect(OnlineBankingHeader).toHaveText('Online Banking');
    });
});