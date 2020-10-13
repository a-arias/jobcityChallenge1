const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FeedbackPage extends Page {
    /**
     * Fills your name input
     */
    async fillYourNameInput (value) {
      // this.submitButton.click(); 
      const yourNameInput = await browser.$('#name');
      await yourNameInput.setValue(value);

      // this.yourNameInput.setValue(value);
    }

     /**
     * Fills email input
     */
    async fillEmailInput (value) {
      const emailInput = await browser.$('#email');
      await emailInput.setValue(value);
    }

     /**
     * Fills subject input
     */
    async fillSubjectInput (value) {
      const subjectInput = await browser.$('#subject');
      await subjectInput.setValue(value);
    }

     /**
     * Fills comment input
     */
    async fillCommentInput (value) {
      const commentInput = await browser.$('#comment');
      await commentInput.setValue(value);
    }

     /**
     * Fills submit button
     */
    async clickSubmitButton () {
      const submitButton = await browser.$("input[name='submit']");
      await submitButton.click();
      
    }

     /**
     * Clicks clear button
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
