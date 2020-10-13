const FeedBackPage = require('../pageobjects/feedback.page');

describe('Pixel Perfect Testing on feedback feature', async function(){
    beforeEach(async function(){
      //Opening the the feedback page
      FeedBackPage.open();
    });

    it('should be able to validate your name validation message using pixel perfect test',  async function(){
      //Clicking submit button to trigger name valitation message
      await FeedBackPage.clickSubmitButton();

      //taking snapshot and comparing it on percy backend
      await percySnapshot(browser, "Inpunt Name Validation screenshot",{ widths: [1200, 1400, 1800] });
    });

    it('should be able to validate email validation message using pixel perfect test',  async function(){
     //Filling email input and clicking submit button to trigger email validation message
      await FeedBackPage.fillEmailInput('abraham');
      await FeedBackPage.clickSubmitButton();

      //taking snapshot and comparing it on percy backend
      await percySnapshot(browser, "Email Validation screenshot",{ widths: [1200, 1400, 1800] });
    });

    it('should be able to validate subject validation message using pixel perfect test',  async function(){
      //Filling name,email inputs and clicking submit button to trigger subject validation message
      await FeedBackPage.fillYourNameInput('abraham');
      await FeedBackPage.fillEmailInput('abraham');
      await FeedBackPage.clickSubmitButton();

      //taking snapshot and comparing it on percy backend
      await percySnapshot(browser, "Subject Validation screenshot",{ widths: [1200, 1400, 1800] });
    });

    it('should be able to validate comment validation message using pixel perfect test',  async function(){
      //Filling name,email,subject inputs and clicking submit button to trigger Comment validation message
      await FeedBackPage.fillYourNameInput('abraham');
      await FeedBackPage.fillEmailInput('abram@example.com');
      await FeedBackPage.fillSubjectInput('my subject');
      await FeedBackPage.clickSubmitButton();

      //taking snapshot and comparing it on percy backend
      await percySnapshot(browser, "Comment validation screenshot",{ widths: [1200, 1400, 1800] });
    });

    it('should be able to send feedback if user entered all inputs correctly',  async function(){
      //Filling allt inputs and clicking submit button.
      await FeedBackPage.fillYourNameInput('abraham');
      await FeedBackPage.fillEmailInput('abram@example.com');
      await FeedBackPage.fillSubjectInput('my subject');
      await FeedBackPage.fillCommentInput('This is a short comment');
      await FeedBackPage.clickSubmitButton();

      //taking snapshot and comparing it on percy backend
      await percySnapshot(browser, "screenshot",{ widths: [1200, 1400, 1800] });
    });
});
