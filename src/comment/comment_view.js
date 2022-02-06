import renderComment from '../shared/render_comment.js';
import View from '../shared/view.js';

export default class CommentView extends View {

  constructor () {
    super();
  }

  renderComments(comments) {
    return comments.map(el => renderComment(el));
  }
}