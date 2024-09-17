// TODO: this file! :)

/* State */
let number_bank = [];
let odds = [];
let evens = [];

function push_number(n) {
	const number = parseInt(n);
	if (!Number.isNaN(number)) {
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
	if (0 < number_bank.length) {
		const number = number_bank.shift();
		push_sort(number);
		return number;
	}
	return NaN;
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
/**
 *
 * @param {Event} event
 */
function add_one(event) {
	// form script, prevent refereshing
	event.preventDefault();

	const $number = document.querySelector("#number");
	push_number($number.value);

	$number.value = "";
	$render_number_bank();
}

function sort_one(event) {
	event.preventDefault();

	const value = pull_one();
	$render_number_bank();
	if (!Number.isNaN(value)) {
		if (is_even(value) === true) {
			$render_evens();
		} else if (is_even(value) === false) {
			$render_odds();
		}
	}
}

function sort_all(event) {
	event.preventDefault();

	pull_all();
	$render_all();
}

const form = document.querySelector("form");
const btn1 = document.querySelector("#sortOne");
const btn2 = document.querySelector("#sortAll");

form.addEventListener("submit", add_one);
btn1.addEventListener("click", sort_one);
btn2.addEventListener("click", sort_all);
