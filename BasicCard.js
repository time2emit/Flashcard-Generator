//Make BasicCard constructor exportable
module.exports = BasicCard;

//BasicCard constructor creates the front and back text of a flashcard
function BasicCard(front, back) {
	//Text for front of card
	this.front = front,
	//Text for back of card
	this.back = back,
	//Print front and back of card
	this.print = console.log("Front: " + this.front + "\nBack: " + this.back)
};

//Instances of BasicCard
var humanBodayTrivia1 = new BasicCard("How many teeth does the average adult have?","32 teeth");
var humanBodyTrivia2 = new BasicCard("How many chambers are in the average human heart?", "4 chambers");
