export default class Publisher{

  static listeners = {}

  static set listener(name){
    if(!this.listeners[name]){
      this.listeners[name] = [];
    }
  }
  
  static subscribe(name, listener){
    this.listener = name;
    this.listeners[name].push(listener);
  }

  static unsubscribe(name, listener){
    this.listener = name;
    this.listeners[name] = this.listeners[name].filter(cb => cb != listener);
  }

  static notify(name, data){
    this.listener = name;
    this.listeners[name].forEach(listener => listener(data));
  }

  static events = {
    pageCreated: 'MAIN PAGE WAS CREATED',
    renderComments: 'RENDER COMMENTS',
    createComments: 'CREATE COMMENTS',
    createMoreComments: 'CREATE MORE COMMENTS',
    renderMoreComments: 'RENDER MORE COMMENTS',
    loadData: 'LOAD DATA',
    setNavigation: 'SET NAVIGATION',
    loadMore: 'LOAD MORE DATA ON PAGE',
    renderListOnPage: 'RENDER COMMENTS LIST ON CURRENT PAGE',
    clickPagBtn: 'CLICK ON PAGGINATION BUTTON',
    clickOnSendBtn: 'CLICK ON SEND COMMENT BTN',///fixed
    hideLoadBtn: 'HIDE LOAD MORE BUTTON'
  }
}