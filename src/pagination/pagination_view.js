import renderPaginationWrapper from '../shared/render_pagination_wrapper.js';
import renderPaginationBtns from '../shared/render_pagination_btns.js';

export default class PagiantionView {

  pagElems = [
    {
      name: 'first',
      class: '.first'
    },
    {
      name: 'previous',
      class: '.previous'
    },
    {
      name: 'current',
      class: '.current'
    },
    {
      name: 'second',
      class: '.second'
    },
    {
      name: 'third',
      class: '.third'
    },
    {
      name: 'next',
      class: '.next'
    },
    {
      name: 'last',
      class: '.last'
    }
  ];

  constructor(clickPagination) {
    this.clickPagination = clickPagination;
  }

  clickOnPagBut = (even) => {
    const currentPage = event.target.attributes['data-page'].value;
    return currentPage;
  }

  setupPagination = (navigationData) => {
    const isOnLastPage = navigationData.currentPageNumber === navigationData.lastPageNumber;
    this.btnsValue = {
      first: (navigationData.currentPageNumber === 1) ? null : 1,
      last: (isOnLastPage) ? null : navigationData.lastPageNumber,
      current: navigationData.currentPageNumber,
      second: (isOnLastPage) ? null : navigationData.currentPageNumber + 1,
      third: (isOnLastPage || (navigationData.lastPageNumber === navigationData.currentPageNumber + 1)) ? null : navigationData.currentPageNumber + 2,
      previous: (navigationData.currentPageNumber === 1) ? null : navigationData.currentPageNumber - 1,
      next: (isOnLastPage) ? null : navigationData.currentPageNumber + 1,
    }
  }

  renderPaginationSection = () => {
    if(document.querySelector('.pagination')) {
        return;
    }
    const pagginationHTML = renderPaginationWrapper();
    const formSection = document.querySelector('.form-section');
    formSection.insertAdjacentHTML('afterend', pagginationHTML);
  }

  renderPaginationBtns = () => {
    const pagginationBtnsHTML = renderPaginationBtns();
    const paginationSection = document.querySelector('.pagination');
    paginationSection.innerHTML = (pagginationBtnsHTML);
  }

  setPaginationBtnsValue = () => {
    const pagBtns = this.pagElems.reduce((acc, cur) => {
      acc[cur.name] = document.querySelector(cur.class);
      if(this.btnsValue[cur.name] === null) {
        acc[cur.name].classList.add('disabled');
        return acc;
      }
      acc[cur.name].setAttribute('data-page', this.btnsValue[cur.name])
      return acc;
    }, {});

    pagBtns.current.innerText = this.btnsValue.current;
    pagBtns.second.innerText = this.btnsValue.second;
    pagBtns.third.innerText = this.btnsValue.third;
  }

  setListeners = () => {
    const paginationBtns = document.querySelectorAll('.pagination__item');
    paginationBtns.forEach(el => el.addEventListener('click', this.clickPagination));
  }
}