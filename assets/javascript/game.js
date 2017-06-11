$(document).ready(function() {
	var globalCount = 0;
	var RED = 0;
	var PURPLE = 0;
	var GREEN = 0;
	var CLEAR = 0;
	var WINS = 1;
	var LOSSES = 1;

	//selects random number between 19-120 for user to guess
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	//sets a variable to call getRandomInt function
	var randNumber = getRandomInt(19, 120);
	//Log in Chrome console to verify the getRandomInt function works
	console.log("Computer pick: " + randNumber);
	/*update the style of variable "randNumber" so that it is centered and has a font size of 100px
	&&
	place value of the variable "randNumber" in the div with a span within it that has an id="randomNumber"*/
	$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(randNumber);
	
	
	//When the red gem is clicked, select a random number between 1-12.
	var redGemCounter = getRandomInt(1, 12);
	//log in Chrome console to verify the value of the redGemCounter variable works.
	console.log("Red gem value: " + redGemCounter);
	//When the purple gem is clicked, select a random number between 1-12.
	var purpleGemCounter = getRandomInt(1, 12);
	//log in Chrome console to verify the value of the purpleGemCounter variable works.
	console.log("Purple gem value: " + purpleGemCounter);
	//When the green gem is clicked, select a random number between 1-12.
	var greenGemCounter = getRandomInt(1, 12);
	//log in Chrome console to verify the value of the greenGemCounter variable works.
	console.log("Green gem value: " + greenGemCounter);
	//When the clear gem is clicked, select a random number between 1-12.
	var clearGemCounter = getRandomInt(1, 12);
	//log in Chrome console to verify the value of the clearGemCounter variable works.
	console.log("Clear gem value: " + clearGemCounter);

	
	//Select the id "redGem" and when it is clicked, alert a message "You clicked the Red Gem!". 
			$("#redGem").on("click",function() {
		alert("You clicked the Red Gem!");
	/*Update the new value of the variable "RED" by adding the value of the variable "redGemCounter" to the value 
	of the previous variable "RED"*/	
		RED = redGemCounter + RED;
	//print the value of the variable "RED" to the console
		console.log("total red gem score: " + RED);
	//set the value of the variable "globalCount" to the value of the variable "RED"	
		globalCount += RED;
		$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html(globalCount);

	if (globalCount === randNumber){
			$("#youWinYouLose").html(alert("You Win!!!"));
			$("#winCount").html("WINS: " + WINS++);
			$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html("0");
			$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(getRandomInt(19, 120));
		console.log("Global count is: " + globalCount);
		}
		else if (globalCount > randNumber){
			$("#youWinYouLose").html(alert("You Lose!!!"));
			$("#lossCount").html("LOSSES: " + LOSSES++);
			$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html("0");
			$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(getRandomInt(19, 120));
		//console.log("Global count is: " + globalCount);
		}	
		else{
			$("#youWinYouLose").html();
		}


		RED = 0;
	//print the value of the variable "globalCount" to the console	
		console.log("Global count is: " + globalCount);
	});


//Select the id "purpleGem" and when it is clicked, alert a message "You clicked the Purple Gem!". 
			$("#purpleGem").on("click",function() {
		alert("You clicked the Purple Gem!");
	/*Update the new value of the variable "PURPLE" by adding the value of the variable "purpleGemCounter" to the value 
	of the previous variable "PURPLE"*/	
		PURPLE = purpleGemCounter + PURPLE;
	//alert the value of the variable "PURPLE"
		//alert(PURPLE);
	//print the value of the variable "PURPLE" to the console
		console.log("total Purple gem score: " + PURPLE);
	//set the value of the variable "globalCount" to the value of the variable "PURPLE"	
		globalCount += PURPLE;
	//select the elemnt
		$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html(globalCount);

	if (globalCount === randNumber){
			$("#youWinYouLose").html(alert("You Win!!!"));
			$("#winCount").html("WINS: " + WINS++);
			$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html("0");
			$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(getRandomInt(19, 120));
			//globalCount = 0;
		console.log("Global count is: " + globalCount);
		}
		else if (globalCount > randNumber){
			$("#youWinYouLose").html(alert("You Lose!!!"));
			$("#lossCount").html("LOSSES: " + LOSSES++);
			$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html("0");
			$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(getRandomInt(19, 120));
		}	
		else{
			$("#youWinYouLose").html();
		}

		PURPLE = 0;
	//print the value of the variable "globalCount" to the console
	//globalCount = 0;
		console.log("Global count is: " + globalCount);
	});

//Select the id "greenGem" and when it is clicked, alert a message "You clicked the Green Gem!". 
			$("#greenGem").on("click",function() {
		alert("You clicked the Green Gem!");
	/*Update the new value of the variable "GREEN" by adding the value of the variable "greenGemCounter" to the value 
	of the previous variable "GREEN"*/	
		GREEN = greenGemCounter + GREEN;
	//print the value of the variable "GREEN" to the console
		console.log("total Green gem score: " + GREEN);
	//set the value of the variable "globalCount" to the value of the variable "GREEN"	
		globalCount += GREEN;
		$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html(globalCount);
	
	if (globalCount === randNumber){
			$("#youWinYouLose").html(alert("You Win!!!"));
			$("#winCount").html("WINS: " + WINS++);
			$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html("0");
			$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(getRandomInt(19, 120));
			//globalCount = 0;
		console.log("Global count is: " + globalCount);
		}
		else if (globalCount > randNumber){
			$("#youWinYouLose").html(alert("You Lose!!!"));
			$("#lossCount").html("LOSSES: " + LOSSES++);
			$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html("0");
			$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(getRandomInt(19, 120));	
		}	
		else{
			$("#youWinYouLose").html();
		}

		GREEN = 0;
	//print the value of the variable "globalCount" to the console
	console.log("Global count is: " + globalCount);
	});

//Select the id "clearGem" and when it is clicked, alert a message "You clicked the Clear Gem!". 
			$("#clearGem").on("click",function() {
		alert("You clicked the Clear Gem!");
	/*Update the new value of the variable "CLEAR" by adding the value of the variable "clearGemCounter" to the value 
	of the previous variable "CLEAR"*/	
		CLEAR = clearGemCounter + CLEAR;
	//print the value of the variable "CLEAR" to the console
		console.log("total Clear gem score: " + CLEAR);
	//set the value of the variable "globalCount" to the value of the variable "CLEAR"	
		globalCount += CLEAR;
		$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html(globalCount);

		if (globalCount === randNumber){
			$("#youWinYouLose").html(alert("You Win!!!"));
			$("#winCount").html("WINS: " + WINS++);
			$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html("0");
			$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(getRandomInt(19, 120));
			//globalCount = 0;
		console.log("Global count is: " + globalCount);
		}
		else if (globalCount > randNumber){
			$("#youWinYouLose").html(alert("You Lose!!!"));
			$("#lossCount").html("LOSSES: " + LOSSES++);
			$("#currentScoreNum").css({"font-size":"90px","text-align":"center"}).html("0");
			$("#randomNumber").css({"font-size":"100px","text-align":"center"}).html(getRandomInt(19, 120));
		}	
		else{
			$("#youWinYouLose").html();
		}
	
		CLEAR = 0;

		console.log("Global count is: " + globalCount);
		
	});
	//print the value of the variable "globalCount" to the console
	globalCount = 0;
	console.log("Global count is: " + globalCount);
	
});