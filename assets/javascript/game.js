var globalCount = 0;
//selects random number between 19-120 for user to guess
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//sets a variable to call getRandomInt function
var randNumber = getRandomInt(19, 120);
//Log in Chrome console to verify the getRandomInt function works
console.log(randNumber);
//place value of the variable "randNumber" in the div with a span within it that has an id="randomNumber"
$("#randomNumber").append(randNumber);
//When the red gem is clicked, select a random number between 1-12.
var redGemCounter = getRandomInt(1, 12);
//log in Chrome console to verify the value of the redGemCounter variable works.
console.log(redGemCounter);
//When the purple gem is clicked, select a random number between 1-12.
var purpleGemCounter = getRandomInt(1, 12);
//log in Chrome console to verify the value of the purpleGemCounter variable works.
console.log(purpleGemCounter);
//When the green gem is clicked, select a random number between 1-12.
var greenGemCounter = getRandomInt(1, 12);
//log in Chrome console to verify the value of the greenGemCounter variable works.
console.log(greenGemCounter);
//When the clear gem is clicked, select a random number between 1-12.
var clearGemCounter = getRandomInt(1, 12);
//log in Chrome console to verify the value of the clearGemCounter variable works.
console.log(clearGemCounter);
//When the red gem is clicked, add 1 to the current count
$("#redGem").click(function() {
	alert("YES!!!");
});
//show red gem count afte each click
console.log(redGemCounter);