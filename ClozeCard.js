// Create a new file named ClozeCard.js:
// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
// var fs = require('fs');
// var inquirer = require('inquirer');
// module.exports = ClozeCard;



function ClozeCard (text, cloze) {
	this.cloze = cloze;
	this.text = text;
	if (this.checkCloze() === false) {
		throw this.cloze + " must be in the text. \n Text is:" + this.text;
	}
	this.partial = this.makePartial();
}

ClozeCard.prototype.checkCloze = function() {
	if (this.text.includes(this.cloze)) {
		return true;
		// console.log(this.cloze + " must be in the text. \n Text is:" + this.text);
	} else {
		return false;
	}
};

ClozeCard.prototype.makePartial = function() {
	return this.text.replace(this.cloze, "...");


}



try {
	var georgeWashington = new ClozeCard("George Washington was the first President of the USA","George Washington");

	// var evilGeorge = new ClozeCard("George Washington was the first President of the USA","Evil George");

	console.log(georgeWashington);
	console.log(georgeWashington.checkCloze());
	console.log(georgeWashington.makePartial());
	console.log(georgeWashington.partial);


	// console.log(evilGeorge);
	// console.log(evilGeorge.checkCloze());

} catch (e) {
	console.log(e);
}





// }
// Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName;
// };

