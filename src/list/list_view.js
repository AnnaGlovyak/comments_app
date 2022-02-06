import View from '../shared/view.js';

export default class ListView extends View {

  domElem = [
    {
      name: 'commentsList',
      tag: 'div',
      class: 'comments__list'
    }
  ];

  constructor() {
    super();
    this.linkDomElem(this.domElem);
  }

  createList = (commentsHTML) => {
    this.dom.commentsList.innerHTML = commentsHTML.join('');
    this.dom.commentsSection = document.querySelector('.comments-section');
    this.dom.commentsSection.prepend(this.dom.commentsList);
  }

  addList = (listHTML) => {
    this.dom.commentsList.innerHTML += listHTML.join('');
    this.dom.commentsSection = document.querySelector('.comments-section');
    this.dom.commentsSection.prepend(this.dom.commentsList);
  }
}