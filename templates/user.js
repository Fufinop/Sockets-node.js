let socket = io();

let form = document.getElementById('form');
let input = document.getElementById('input');
let mensajes = document.getElementById('mensajes');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	socket.emit('chat message', input.value);
	input.value = '';
});

socket.on('chat message', function (msg) {
	let item = document.createElement('li');
	item.textContent = msg;
	mensajes.appendChild(item);
	window.scrollTo(0, document.body.scrollHeight);
});
