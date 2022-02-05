import Icon from './icon.png';

import './style.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello Webpack 5';
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());