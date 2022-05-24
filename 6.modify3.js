//Modify Element Attribute

const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

//getAttribute
console.log(spanHi.getAttribute('id'));
console.log(spanHi.id);
console.log(spanHi.getAttribute('title'));
console.log(spanHi.title);

//setAttribute
console.log(spanHi.setAttribute('title', 'asdfasdf'));
console.log(spanHi.title = 'blahblah');

//removeAttribute;
spanHi.removeAttribute('title');