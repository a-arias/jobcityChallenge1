const LandingPage = require('../pageobjects/landing.page');
const OnlineBankingPage = require('../pageobjects/onlineBanking.page');

describe('Navigation feature',  async function(){
  it('should be able to test pixel perfect on landing page', async function(){
    //Opening the landing page.
    LandingPage.open();

    //Taking Snapshot using percy to validate pixel perfect page on Percy backed.
    await percySnapshot(browser, "home page screenshot",{ widths: [1200, 1400, 1800] });
  });

  it('should be able to test pixel perfect on Online Banking page', async function(){
    //Opening the landing page.
    OnlineBankingPage.open();

    //Taking Snapshot using percy to validate pixel perfect page on Percy backed.
    await percySnapshot(browser, "Online Banking page screenshot",{ widths: [1200, 1400, 1800] });
  });

  it('should be able to test pixel perfect on Feedback page', async function(){
    //Opening the landing page.
    OnlineBankingPage.open();

    //Taking Snapshot using percy to validate pixel perfect page on Percy backed.
    await percySnapshot(browser, "Feedback page screenshot",{ widths: [1200, 1400, 1800] });
  });
});