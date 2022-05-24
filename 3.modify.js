//modify element text
const div = document.querySelector('div');

//Copy and past from your HTML directly(spacing and indents included)
//Grabs invisible information hidden by CSS
console.log(div.textContent);

//Display texts as it would inside of your HTML
//Doesn't grab invisible information hidden by CSS
console.log(div.innerText); 


{/* 
<div>
    <span>Hello</span>
    <span style="display: hidden;">Bye</span>
</div> 
*/}