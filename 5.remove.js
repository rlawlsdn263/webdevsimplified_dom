//Remove Elements

const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');


spanBye.remove(); //remove spanBye
div.append(spanBye); //re-add spanBye
div.removeChild(spanHi); //remove child Element

