const numberInput = document.querySelector('form > label > input[type="number"]');
const submitBtn = document.querySelector('input[type=submit]');
const outputSection = document.querySelector('section.output');
const typeInput = document.getElementById('type');
let number = 42;
let type = '';
let NUMBERS_API = `https://numbersapi.com`;
let textFrag = '';


async function fetchData() {
	let response = await fetch(`${NUMBERS_API}/${number}/${type}?json`)
	let data = await response.json()
	textFrag = await data.text;
	//
	let div = document.createElement('div');
	div.appendChild(document.createTextNode(`${type}: ${textFrag}`));
	outputSection.appendChild(div);
}


function generateResponse(e) {
	number = numberInput.value;
	type = typeInput.value;
	
}

// function appendElement() {
	
// 	let div = document.createElement('div');
// 	div.appendChild(document.createTextNode(`${number} ${type} ${textFrag}`));
// 	outputSection.appendChild(div);
// }

submitBtn.addEventListener('click', function(e) {
	e.preventDefault();
	generateResponse(e);
	fetchData();
	// appendElement();
	numberInput.value = '';
})


outputSection.onclick = function() {
	console.log('Clicked on output section!')
}