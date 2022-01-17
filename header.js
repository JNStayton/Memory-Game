const colors = [ 'ff0000', '0000ff', '008000', 'ffa500', '800080' ];
const letters = document.getElementsByClassName('colorful');

function randColor(array) {
	return array[Math.floor(Math.random() * array.length)];
}

setInterval(() => {
	for (let letter of letters) {
		letter.style.color = `#${randColor(colors)}`;
	}
}, 1000);
