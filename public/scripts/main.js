/** @format */
// create the shadows for the hero links

let linkList = document.querySelectorAll('.hero-LinksContainer a');

linkList.forEach(
	link =>
		new FlatShadow(link, {
			angle: 30,
			length: 50,
			color: 'hsla(0, 45%, 30%, 1)',
			hover: true
		})
);

// function to copy the src link to the clipboard

window.addEventListener('click', event => {
	if (event.target.closest('#copyButton')) {
		copy();
	}
});

const copy = () => {
	let src = 'https://flatshadow.now.sh/dist/flatShadow.min.js';

	if (navigator.clipboard) {
		let data = [
			new ClipboardItem({
				'text/plain': new Blob(
					["<script src='" + src + "'><" + 'script>'],
					{
						type: 'text/plain'
					}
				)
			})
		];

		navigator.clipboard.write(data);
	} else {
		// fallback for Safari mostly, which doesn't support the clipboard api.
		// and obviouly IE, but who cares.

		let data = document.createElement('textarea');

		data.style =
			'display: hidden; position: fixed: top: 0; left: 0; z-index: -1000; visibilty: none;';
		document.querySelector('body').appendChild(data);
		data.value = "<script src='" + src + "'></" + 'script>';

		data.focus();
		data.select();
		data.setSelectionRange(0, 99999); /*For mobile devices*/

		/* Copy the text inside the text field */
		document.execCommand('copy');

		data.remove();
	}
};

// menu

let menu = document.querySelector('.nav-Menu ul');

window.addEventListener('click', event => {
	if (event.target.closest('.nav-Button')) {
		menu.style.transform = 'translateY(0)';
		document.querySelector('html').style.overflowY = 'hidden';
	}
	if (event.target.closest('.nav-ButtonClose')) {
		menu.style.transform = 'translateY(-100%)';
		document.querySelector('html').style.overflowY = 'auto';
	}
});
