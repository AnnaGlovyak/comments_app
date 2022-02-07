import Publisher from '../shared/publisher.js';
import View from '../shared/view.js';

export default class FormView extends View {

  domElem = [
    {
      name: 'main',
      tag: 'main',
      class: 'main'
    },
    {
      name: 'form',
      tag: 'form',
      class: 'form'
    },
    {
      name: 'title',
      tag: 'h1',
      class: 'title'
    },
    {
      name: 'inputName',
      tag: 'input',
      class: 'form__input-name'
    },
    {
      name: 'inputText',
      tag: 'textarea',
      class: 'form__input-text'
    },
    {
      name: 'button',
      tag: 'button',
      class: 'form__button',
    },
    {
      name: 'messageSuccess',
      tag: 'p',
      class: 'form__msg-success',
    },
    {
      name: 'messageWarning',
      tag: 'p',
      class: 'form__msg-warning',
    },
  ];

  formMessanges = {
    success: 'Your comment successfully added!',
    warning: 'Fail validation! All fields are required, at least 3 characters.'
  }

  constructor(eventHandler) {
    super();
    this.linkDomElem(this.domElem);
    this.eventHandler = eventHandler;
  }

  createForm = () => {
    this.setTextForElements();
    this.setAttrForElements();
    this.appendElements();
    this.initButton();
  }

  setTextForElements = () => {
    this.dom.title.innerHTML = 'Comments';
    this.dom.button.innerHTML = 'POST';
    this.dom.messageSuccess.innerHTML = this.formMessanges.success;
    this.dom.messageWarning.innerHTML = this.formMessanges.warning;
  }

  setAttrForElements = () => {
    this.dom.inputName.required = true;
    this.dom.inputName.setAttribute('minlength', '3');
    this.dom.inputName.setAttribute('type', 'text');
    this.dom.inputName.setAttribute('id', 'input-name');
    this.dom.inputName.setAttribute('name', 'input-name');
    this.dom.inputName.setAttribute('placeholder', 'Name');
    this.dom.inputText.required = true;
    this.dom.inputText.setAttribute('minlength', '3');
    this.dom.inputText.setAttribute('type', 'text');
    this.dom.inputText.setAttribute('id', 'input-text');
    this.dom.inputText.setAttribute('name', 'input-text');
    this.dom.inputText.setAttribute('placeholder', 'Comment');
    this.dom.inputText.setAttribute('rows', '5');
  }

  appendElements = () => {
    this.dom.formSection = document.querySelector('.form-section');
    this.dom.form.append(this.dom.inputName, this.dom.inputText, this.dom.button, this.dom.messageSuccess, this.dom.messageWarning);
    this.dom.formSection.append(this.dom.form);
  }

  initButton = () => {
    this.dom.button.addEventListener('click', this.eventHandler);
  }

  checkValidation = () => {
    const minLength = 3;
    let isValid = false;
    if(this.dom.inputName.value.length >= minLength && this.dom.inputText.value.length >= minLength) {
      isValid = true;
    };
    return isValid;
  }

  getFormData = () => {
    this.payload = {
      name: this.dom.inputName.value,
      text: this.dom.inputText.value,
    }
    return this.payload;
  }

  showMessage = () => {
    this.dom.messageSuccess.classList.toggle('show');
    setTimeout(function() {
      document.querySelector('.form__msg-success').classList.toggle('show')
    }, 3000);
  }

  showWarning = () => {
    this.dom.messageWarning.classList.toggle('show');
    setTimeout(function() {
      document.querySelector('.form__msg-warning').classList.toggle('show')
    }, 3000);
  }

  resetFormFields = () => {
    this.dom.form.reset();
  }
}