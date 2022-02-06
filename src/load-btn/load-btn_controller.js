import Publisher from '../shared/publisher.js';
import LoadBtnView from '../load-btn/load-btn_view.js';
export default class LoadBtnController {

  constructor() {
    this.view = new LoadBtnView(this.clickLoadMoreBtn);
    Publisher.subscribe( Publisher.events.clickLoadMoreBtn, this.clickLoadMoreBtn);
    Publisher.subscribe( Publisher.events.setNavigation, this.createBtn);
    Publisher.subscribe( Publisher.events.hideLoadBtn, this.checkBtn);
  }

  clickLoadMoreBtn = () => {
    const page = this.navigation.currentPageNumber + 1;
    Publisher.notify(Publisher.events.loadMore, page);
  }

  createBtn = (data) => {
    this.navigation = data;
    this.view.renderLoadMoreBtn();
    this.view.setListener();
  }

  checkBtn = (navigation) => {
    this.view.checkBtn(navigation);
  }
}


