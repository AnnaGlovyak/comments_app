export default class LoadBtnView {

  constructor(clickLoadMoreBtn) {
    this.clickLoadMoreBtn = clickLoadMoreBtn;
  }

  setListener = () => {
    this.button.addEventListener('click', this.clickLoadMoreBtn);
  }

  renderLoadMoreBtn = () => {
    if (document.querySelector('.load-more-button')) return;
    this.button = document.createElement('button');
    this.button.classList.add('load-more-button');
    this.button.innerText = 'Load more';
    const main = document.querySelector('main');
    main.append(this.button);
  }

  checkBtn = (navigation) => {
    if (navigation.currentPageNumber === navigation.lastPageNumber){
      this.button.classList.add('hide');
      return;
    }; 
    if (navigation.currentPageNumber !== 1){
      if (this.button.classList.contains('hide')) {
        this.button.classList.remove('hide');
      }
      return;
    }
    return;
  }
}