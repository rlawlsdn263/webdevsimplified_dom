//Date Attributes
const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

//How to get Data-*
console.log(spanHi.dataset);
console.log(spanHi.dataset.test);
console.log(spanHi.dataset.longerTest);

//How to set Data-*
spanHi.dataset.newName = 'Hi';
console.log(spanHi.dataset);
