import Publisher from '../shared/publisher.js';
import PaginationView from '../pagination/pagination_view.js';
export default class PaginationController {

  constructor() {
    this.view = new PaginationView(this.clickPagination);
    Publisher.subscribe( Publisher.events.clickPagBtn, this.clickPagination);
    Publisher.subscribe( Publisher.events.setNavigation, this.createPagBtn);
    Publisher.subscribe( Publisher.events.loadData, this.init);
  }

  init = () => {
    this.view.renderPaginationSection();
    this.view.renderPaginationBtns();
    this.view.setListeners();
  }

  createPagBtn = (navigationData) => {
    Publisher.notify(Publisher.events.hideLoadBtn, navigationData);
    this.view.setupPagination(navigationData);
    this.view.setPaginationBtnsValue();
  }

  clickPagination = (event) => {
    const page = this.view.clickOnPagBut(event);
    Publisher.notify(Publisher.events.renderListOnPage, page);
  }
}


