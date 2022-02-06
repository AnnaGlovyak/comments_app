import Publisher from '../shared/publisher.js';
import ListModel from '../list/list_model.js';
import ListView from '../list/list_view.js';

export default class ListController {

  constructor(){
    this.model = new ListModel();
    this.view = new ListView();
    Publisher.subscribe(Publisher.events.pageCreated, this.init);
    Publisher.subscribe(Publisher.events.renderComments, this.renderList);
    Publisher.subscribe(Publisher.events.renderMoreComments, this.addList);
    Publisher.subscribe(Publisher.events.renderListOnPage, this.init);
    Publisher.subscribe(Publisher.events.loadMore, this.loadMoreComments);
  }

   init = async (page) => {
     this.data = await this.model.loadData(page);
     Publisher.notify(Publisher.events.loadData, this.data);
     Publisher.notify(Publisher.events.createComments, this.data);
     this.navigation = this.model.setNavigationData();
     Publisher.notify(Publisher.events.setNavigation, this.navigation);
   }

   renderList = (commentsArray) => {
      const list = this.view.createList(commentsArray);
   }

   addList = (listHTML) => {
     this.view.addList(listHTML);
   }

   loadMoreComments = async (page) => {
    const data = await this.model.loadData(page);
    Publisher.notify(Publisher.events.createMoreComments, this.data);
   }
}