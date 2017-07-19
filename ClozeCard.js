//Allow the ClozeCard constructor to be accessible by another file/program
module.exports = ClozeCard;

//ClozeCard constructor creates a flash card
function ClozeCard (text, cloze) {
	//Full text of the card with answer
	this.text = text;
	//Part of the text that will be removed and replaced with a '...' in the partial scenario
	this.cloze = cloze;
	//Report error if checkCloze on instance is false (meaning cloze is not in the text)
	if (this.checkCloze() === false) {
		throw this.cloze + " must be in the text.\nText is: " + this.text;
	}
	//Defines this.partial as the makePartial function value (... version of text with cloze removed)
	this.partial = this.makePartial();
}

//Adds checkCloze function to constructor using prototype
ClozeCard.prototype.checkCloze = function() {
	//if cloze substring is in the text string that is what we are expecting
	if (this.text.includes(this.cloze)) {
		return true;
	// if cloze substring is NOT in the text string, that is unexpected
	} else {
		return false;
	}
};

//Adds makePartial function to constructor
//Replaces the close with '...'
ClozeCard.prototype.makePartial = function() {
	return this.text.replace(this.cloze, "...");
};


try {
	//instance geogeWashington which has the cloze in the text (no error should be reported)
	var georgeWashington = new ClozeCard("George Washington was the first President of the USA","George Washington");
	//instance evilGeorge which does NOT have the cloze in the text (error should occur)
	var evilGeorge = new ClozeCard("George Washington was the first President of the USA","Evil George");
	console.log(georgeWashington);
	console.log(georgeWashington.checkCloze());
	console.log(georgeWashington.makePartial());
	console.log(georgeWashington.partial);
	console.log(evilGeorge);
	console.log(evilGeorge.checkCloze());
	console.log(evilGeorge.makePartial());
	console.log(evilGeorge.partial);


} catch (e) {
	console.log(e);
}

console.log("georgeWashington Cloze: " + georgeWashington.cloze);
console.log("georgeWashington Text: " + georgeWashington.text);
console.log("georgeWashington Partial: " + georgeWashington.partial);

