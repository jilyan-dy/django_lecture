if (!localStorage.getItem('counter')) {
	localStorage.setItem('counter', 0);
}

function increment() {
	let counter = localStorage.getItem('counter');
	counter++;
	document.querySelector('h1').innerHTML = 'Count:' + counter;
	localStorage.setItem('counter', counter);

	if (counter % 10 === 0) {
		alert(`Counter has reached ${counter}`);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('h1').innerHTML = 'Count:' + localStorage.getItem('counter');
	document.querySelector('button').onclick = increment;

	// auto increment
	// setInterval(interval, 1000); 
});