// TODO: this file! :)

/* State */
let number_bank = [];
let odds = [];
let evens = [];

function push_number(n) {
	const number = parseInt(n);
	if (number) {
		number_bank.push(number);
	}
}

function is_even(n) {
	return n % 2 === 0;
}

function push_sort(n) {
	if (is_even(n) === true) {
		evens.push(n);
	} else if (is_even(n) === false) {
		odds.push(n);
	}
}

function pull_one() {
	const number = number_bank.shift();
	push_sort(number);
}

function pull_all() {
	while (0 < number_bank.length) {
		pull_one();
	}
}

/* Render */
/**
 *  In each of the following functions, we update the contents of the output
 *  fields, comma-separated, which will render the values to HTML.
 */
function $render_number_bank() {
	const number_bank_output = document.querySelector("#numberBank output");
	number_bank_output.textContent = number_bank.join(", ");
}

function $render_odds() {
	const odds_output = document.querySelector("#odds output");
	odds_output.textContent = odds.join(", ");
}

function $render_evens() {
	const evens_output = document.querySelector("#evens output");
	evens_output.textContent = evens.join(", ");
}

function $render_all() {
	$render_number_bank();
	$render_odds();
	$render_evens();
}

/* Script */
