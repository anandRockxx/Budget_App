// budgetController
const budgetController = (function() {



})();



// UIController
const uiController = (function() {

	let domString = {
		getInput: '.add__type',
		getdescription: '.add__description',
		getvalue: '.add__value',
		addBtn: '.add__btn'
	};

	return {
		getInput: function() {

			return {
				input: document.querySelector(domString.getInput).value,
				description: document.querySelector(domString.getdescription).value,
				value: parseInt(document.querySelector(domString.getvalue).value)
			};
		},


		getdomString: function() {

			return domString;

		}

	};



})();



// Global App Controller
const Controller = (function(bctrl, uictrl) {


	let setupEventListener = function() {

		let dom = uictrl.getdomString();

		// when button is clicked
		document.querySelector(dom.addBtn).addEventListener('click', ctrlAddItem);



		// when keypress by user
		document.addEventListener('keyPress', function(event) {

			if (event.keycode === 13 || event.which === 13) {

				ctrlAddItem();
			}

		})

	}


	const ctrlAddItem = function() {

		let input = uictrl.getInput();


		console.log(input)

		// Get the input data



		// add the data into budget controller

		// add the data into ui controller
	}

	return {
		init: function() {
			console.log('Application successfully started.')
			setupEventListener();
		}
	}


})(budgetController, uiController);


// Initialize
Controller.init();