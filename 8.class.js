const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

//Add&Remove class
spanHi.classList.add('new-class');
console.log(spanHi);

spanHi.classList.remove('hi1');
console.log(spanHi);


//Toggle
spanHi.classList.toggle('hi3');
console.log(spanHi);

//Boolean
spanHi.classList.toggle('hi4', true);
console.log(spanHi);