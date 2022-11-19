import {html, render} from 'https://unpkg.com/lit-html?module';

// old way of doing before importing html:
// const p = document.createElement('p');
// p.textContent = 'Hello, World';
// render(p, document.querySelector('main'))


// new way using lit-html library
// const name = 'World'
// can be use with variable also:
// creating object, not html element, consol.log to check
// const p = html`<p>Hello ${name}!</p>`

// render(p, document.querySelector('main'));

// we can reused it the object :
// render(p, document.querySelector('nav'));

// we can create a function which will create a p.element:
// function createP(name){
//     return html`<p>Hello ${name}!</p>`
// }

// render(createP('Peter'), document.querySelector('main'));



// the best and the correct way of doing it:
 
const p = (name => html`<p>Hello ${name}!</p>`);

// with this syntax we ?disabled=${disabled} we can set true or false to disabled attribute
const input = (disabled) => html`<input ?disabled=${disabled}>`
render(input(false), document.querySelector('main'));


const inputSecond = (value) => html`<input .value=${value}>`;
render(inputSecond("Name"), document.querySelector('main'));

// we can also add class to the element 

const pWithClass = ((name,className) => html`<p class=${className} >Hello ${name}!</p>`)
render(pWithClass('Peter', "content"), document.querySelector('nav'));