//modify element
const body = document.body;
const div = document.createElement('div');

//Renders HTML but have huge security problem!
//Only way in JS add HTML from a string into an element
div.innerHTML = '<strong>Hello World 2</strong>';

//Much more secure way
const strong = document.createElement('strong');
strong.innerText = "Hello World 2";
div.append(strong);

body.append(div);