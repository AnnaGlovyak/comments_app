export default class View {

  linkDomElem ( domElements ) {
    this.dom = domElements.reduce((acc, cur) => {
      acc[cur.name] = document.createElement(cur.tag);
      acc[cur.name].classList.add(cur.class);
      return acc;
    }, {})
  }
}