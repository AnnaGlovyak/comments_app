import Publisher from '../shared/publisher.js';
import FormModel from '../send_form/form_model.js';
import FormView from '../send_form/form_view.js';

export default class FormController {

  constructor(){
    this.model = new FormModel();
    this.view = new FormView(this.eventHandler);
    Publisher.subscribe(Publisher.events.pageCreated, this.init);
    Publisher.subscribe(Publisher.events.clickOnSendBtn, this.sendComment);
    Publisher.subscribe(Publisher.events.renderListOnPage, this.savePage)
  }

  init = async () => {
    this.view.createForm();
  }

  sendComment = async () => {
    const page = this.currentPage;
    const isValid = this.view.checkValidation();

    if (isValid) {
      const data = this.view.getFormData();
      const isSuccess = await this.model.sendData(data);

      if (isSuccess) {
        this.view.showMessage();
        this.view.resetFormFields();
        Publisher.notify(Publisher.events.renderListOnPage, page);
      }
    } else {
      this.view.showWarning();
    }
  }

  savePage = (page) => {
    this.currentPage = page;
  }

  eventHandler = (e) => {
    e.preventDefault();
    Publisher.notify(Publisher.events.clickOnSendBtn, this.data);
  }
}