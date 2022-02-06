import { commentsURL } from '../shared/config.js';

export default class ListModel {

  loadData = async (page = 1) => {
    await fetch(`${commentsURL}?page=${page}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.data = data
    });
    this.list = this.data.data;
    return this.list;
  }

  setNavigationData = () => {
    return this.navigation = {
      currentPageNumber: this.data.current_page,
      lastPageNumber: this.data.last_page,
      }
    }
}