import View from '../shared/view.js';

export default class PageView extends View {

  domElem = [
    {
      name: 'main',
      tag: 'main',
      class: 'main'
    },
    {
      name: 'title',
      tag: 'h1',
      class: 'title'
    },
    {
      name: 'commentsSection',
      tag: 'section',
      class: 'comments-section'
    },
    {
      name: 'formSection',
      tag: 'section',
      class: 'form-section'
    },
  ];

  constructor() {
    super();
    this.linkDomElem(this.domElem);
  }

  createPage() {
    this.dom.title.innerHTML = 'Comments';
    this.dom.main.append(this.dom.title, this.dom.formSection, this.dom.commentsSection);
    const body = document.querySelector('body');
    body.append(this.dom.main);
  }
}