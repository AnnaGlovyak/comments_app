import './style.scss';
import PageController from './page/page_controller.js';
import FormController from './send_form/form_controller.js';
import PaginationController from './pagination/pagination_controller.js';
import LoadBtnController from './load-btn/load-btn_controller.js';
import CommentController from './comment/comment_controller.js';
import ListController from '../src/list/list_controller.js';

const page = new PageController();
const form = new FormController();
const comment = new CommentController();
const pagination = new PaginationController();
const loadBtn = new LoadBtnController();
const list = new ListController();

// form.init();
// list.init();
page.init();