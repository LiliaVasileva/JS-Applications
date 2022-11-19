import {html, render} from 'https://unpkg.com/lit-html?module';


const timer = (time) => html`<p>The time is ${time}</p>`;
const root = document.querySelector('main');

render(timer(new Date()), root);