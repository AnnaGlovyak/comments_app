import Publisher from '../shared/publisher.js';
import CommentModel from '../comment/comment_model.js';
import CommentView from '../comment/comment_view.js';

export default class CommentController {

  constructor(){
    this.view = new CommentView();
    Publisher.subscribe(Publisher.events.createComments, this.createComments);
    Publisher.subscribe(Publisher.events.createMoreComments, this.createMoreComments);
  }

    createComments = (inputData) => {
      const comments = inputData.map(el => new CommentModel(el));
      this.data = this.view.renderComments(comments);
      Publisher.notify(Publisher.events.renderComments, this.data);
   }

   createMoreComments = (inputData) => {
    const comments = inputData.map(el => new CommentModel(el));
    this.data = this.view.renderComments(comments);
    Publisher.notify(Publisher.events.renderMoreComments, this.data);
   }
}