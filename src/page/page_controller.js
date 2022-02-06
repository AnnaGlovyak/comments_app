import Publisher from '../shared/publisher.js';
import PageView from '../page/page_view.js';

export default class PageController {

  constructor(){
    this.view = new PageView();
  }
  
  init = () => {
    this.view.createPage();
    Publisher.notify(Publisher.events.pageCreated, this.navigation);
  }
}