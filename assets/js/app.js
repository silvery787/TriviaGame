
const MaxQuestionsToAsk = 3;
const MaxTimer = 10;//seconds to answer
const DelayTime = 2000;

var questionList = [
	{
		q: "aaa", 
		a1: "a", 
		a2: "b", 
		a3: "c", 
		a4: "d", 
		corr: 1, 
		img : "image.gif"
	},
	{
		q: "bbb", 
		a1: "a", 
		a2: "b", 
		a3: "c", 
		a4: "d", 
		corr: 2, 
		img : "image.gif"
	},
	{
		q: "ccc", 
		a1: "a", 
		a2: "b", 
		a3: "c", 
		a4: "d", 
		corr: 3, 
		img : "image.gif"
	},
	{ q: "ddd", a1: "d", a2: "e", a3: "f", a4: "a", corr: 1, img : "image.gif"},
	{ q: "eee", a1: "d", a2: "e", a3: "f", a4: "a", corr: 2, img : "image.gif"},
	{ q: "fff", a1: "d", a2: "e", a3: "f", a4: "d", corr: 3, img : "image.gif"},	
];


function shuffle(array){

	var currIndex = array.length;
	var randIndex, tmp;

	while(currIndex > 0 ){
		randIndex = Math.floor(Math.random()*currIndex);
		currIndex --;

		tmp = array[currIndex];
		array[currIndex] = array[randIndex];
		array[randIndex] = tmp;
	}
}

// ========= GAME OBJECT ================================================

var game = {

	currQuestion : -1,
	currAnswer : 0,

	timerTimeLeft : MaxTimer,
	timerActive : false,
	timerId : null,

	nCorrect : 0,
	nWrong : 0,

	start : function(){

		this.currQuestion = -1;
		this.currAnswer = 0;

		this.timerTimeLeft = MaxTimer;
		this.timerActive = false;
		this.timerId = null;

		this.nCorrect = 0;
		this.nWrong = 0;
		
		$("#start").hide();
		$("#timer").hide();
		$("#question_area").hide();
		$("#answer_area").hide();
		$("#final_area").hide();

		shuffle( questionList );
		this.askQuestion();
	},

	stop : function(){
		
		this.stopTimer();

		var unAnswered = MaxQuestionsToAsk - (this.nCorrect+this.nWrong);

		var firstRowTab =  $("table").children().eq(1).children("tr").eq(0).children("td");
    	firstRowTab.eq(0).text("Correct Answers:");
    	firstRowTab.eq(1).text(this.nCorrect);

		var secondRowTab =  $("table").children().eq(1).children("tr").eq(1).children("td");
    	secondRowTab.eq(0).text("Incorrect Answers:");
    	secondRowTab.eq(1).text(this.nWrong);

		var thirdRowTab =  $("table").children().eq(1).children("tr").eq(2).children("td");
    	thirdRowTab.eq(0).text("Unanswered:");
    	thirdRowTab.eq(1).text(unAnswered);

		$("#start").hide();
		$("#timer").hide();
		$("#question_area").hide();
		$("#answer_area").hide();

		$("#final_area").show();
	},

	askQuestion : function(){

    	game.currQuestion++;

    	if( game.currQuestion < MaxQuestionsToAsk ){

			$("#timer").text("Remaining Time: "+ MaxTimer + " Seconds");
    		game.startTimer();

			$("#timer").show();
			$("#question_area").show();
			$("#answer_area").hide();	

			$("#curr_question").empty();
			$("#answers").empty();
			var qObj = questionList[game.currQuestion];
			
			$("#curr_question").text(qObj.q);

			var optArray = [];
			for(var i=1; i<=4; i++){
				var listItem = $("<li>").text(qObj["a"+i]);
				listItem.attr("data", "a"+i);
				$("#answers").append(listItem);
			}
    	}
    	
    	else game.stop();

	},

	showAnswer : function(nA){

		this.stopTimer();

		$("#question_area").hide();
		// $("#timer").hide();

		var qObj = questionList[this.currQuestion];
		var answerText = "";

		if(nA[1] == qObj.corr){
			answerText += "Correct!";
			this.nCorrect++;
		}
		else if(nA[1] == 0){
			answerText += "Out of Time!";
		}
		else{
			answerText += "Incorrect!";
			this.nWrong++;
		}

		$("#correct_answer").text(answerText);

		$("#answer_area").show();
		$("#question_area").hide();

		setTimeout( this.askQuestion , DelayTime );

	},

	startTimer: function() {

	    if (!this.timerActive) {

	    	this.timerTimeLeft = MaxTimer-1;
	        this.timerId = setInterval( this.countSeconds, 1000 );
	        this.timerActive = true;
	    }

	},

  	stopTimer: function() {

    	clearInterval(this.timerId);
    	this.timerActive = false;

  	},

  	countSeconds: function() {

	    $("#timer").text("Remaining Time: "+ game.timerTimeLeft + " Seconds");
    	
    	game.timerTimeLeft--;

    	if(game.timerTimeLeft < 0){
    		game.showAnswer("a0");
    	}

  	}
};

//==================================

$(document).ready( function(){
	
	$("#timer").hide();
	$("#question_area").hide();
	$("#answer_area").hide();
	$("#final_area").hide();

	$("#start").on("click", "button", function(){
		game.start();
	});

	$("#restart").on("click", "button", function(){
		game.start();
	});

	$("#answers").on("click", "li", function(){
		var nAnswer = $(this).attr("data");
		game.showAnswer(nAnswer);
	});

});

