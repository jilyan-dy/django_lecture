let counter = 0;
function increment() {
	counter++;
	document.querySelector('h1').innerHTML = 'Count:' + counter;

	if (counter % 10 === 0) {
		alert(`Counter has reached ${counter}`);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').onclick = increment;
});