const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FeedbackPage extends Page {
    /**
     * Define selectors using getter methods
     */
    get yourNameInput () { return $('#name') }
    get emailInput () { return $('#email') }
    get subjectInput () { return $('#subject') }
    get commentInput () { return $('#comment') }
    get submitButton () { return $("input[name='submit']") }
    get resetButton () { return $("input[name='clear']") }

    /**
     * 
     */
    clickYourNameInput (value) {
      this.yourNameInput.setValue(value);
    }

     /**
     * 
     */
    clickEmailInput () {
      this.emailInput.setValue(value);
    }

     /**
     * 
     */
    clickSubjectInput () {
      this.subjectInput.setValue(value); 
    }

     /**
     * 
     */
    clickCommentInput () {
      this.commentInput.setValue(value);
    }

     /**
     * 
     */
    clickSubmitButton () {
      this.submitButton.click(); 
    }

     /**
     * 
     */
    clickResetButton () {
      this.resetButton.click(); 
    }
  

    /**
     * Opens up the landing page 
     */
    open () {
        return super.open('/feedback.html');
    }
}

module.exports = new FeedbackPage();
