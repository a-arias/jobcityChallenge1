const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OnlineBankingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get accountSummaryButton () { return $('#account_summary_link') }
    get payBillsButton () { return $('#pay_bills_link') }
    get accountActivityButton () { return $('#account_activity_link') }
    get moneyMapButton () { return $('#money_map_link') }
    get transferFundsButton () { return $('#transfer_funds_link') }
    get onlineStatementsButton () { return $('#online_statements_link') }

    /**
     * Clicks account summary button.
     */
    clickHomeButtonButton () {
      this.accountSummaryButton.click(); 
    }
    /**
     * Clicks pay bills button.
     */
    clickPayBillsButton () {
      this.payBillsButton.click(); 
    }
    /**
     * Clicks account Activity button.
     */
    clickAccountActivityButton () {
      this.accountActivityButton.click(); 
    }
     /**
     * Clicks money Map button.
     */
    clickMoneyMapButton () {
      this.moneyMapButton.click(); 
    }
    /**
     * Clicks transfer Funds Button.
     */
    clickTransferFundsButton () {
      this.transferFundsButton.click(); 
    }
    /**
     * Clicks online Statements Button
     */
    clickOnlineStatementsButton () {
      this.onlineStatementsButton.click(); 
    }
    /**
     * Clicks online Statements Button
     */
    randomlyClickAnyOfTheLinksOfOnlineBankingPage(){
        var randomFunc;

        const functionArray = [ 
          'clickHomeButtonButton', 
          'clickPayBillsButton', 
          'clickAccountActivityButton', 
          'clickMoneyMapButton',
          'clickTransferFundsButton',
          'clickOnlineStatementsButton'
        ]; 

        randomFunc = functionArray[Math.floor(Math.random() * functionArray.length)];

        if (randomFunc == 'clickHomeButtonButton') {
          this.clickHomeButtonButton();
        }
        if (randomFunc == 'clickPayBillsButton') {
          this.clickPayBillsButton();
        }
        if (randomFunc == 'clickAccountActivityButton') {
          this.clickAccountActivityButton();
        }
        if (randomFunc == 'clickMoneyMapButton') {
          this.clickMoneyMapButton();
        }
        if (randomFunc == 'clickTransferFundsButton') {
          this.clickTransferFundsButton();
        }
        if (randomFunc == 'clickOnlineStatementsButton') {
          this.clickOnlineStatementsButton();
        }
    }


    /**
     * Opens up the landing page 
     */
    open () {
        return super.open('/online-banking.html');
    }
}

module.exports = new OnlineBankingPage();