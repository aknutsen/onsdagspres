describe('MainController', function() {
	
	var MainCtrlPage = function() {
		this.greet = element(by.binding('firstName()'));
		this.input = element(by.model('name'));
		this.guessBtn = element(by.id('guessBtn'));
		this.lastName = element(by.binding('lastName'));

		this.get = function() {
			browser.get('/');
		};
		return this;
	};

	beforeEach(function() {
		MainCtrlPage().get();
	});

	it('should initially greet with Yo!', function() {
		console.log(MainCtrlPage);
		expect(MainCtrlPage().greet.getText()).toBe('Yo!');
	});

	it('should greet with first name of input', function() {
		var text = MainCtrlPage().input.sendKeys('Anders petrus');
		expect(MainCtrlPage().greet.getText()).toBe('Yo, Anders');
	});

	it('should guess Lee when surname is not specified', function() {
		MainCtrlPage().guessBtn.click();
		expect(MainCtrlPage().lastName.getText()).toBe('Maybe Lee?');
	});

	it('should guess the specified surname when specified', function() {
		MainCtrlPage().input.sendKeys('Reidar Olsen');
		MainCtrlPage().guessBtn.click();
		expect(MainCtrlPage().lastName.getText()).toBe('Must be Olsen!');
	});
});