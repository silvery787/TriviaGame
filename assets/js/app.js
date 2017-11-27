
const MaxQuestionsToAsk = 10;
const MaxTimer = 30;//seconds to answer
const DelayTime = 3000;

var questionList = [
	{
		q: "Which is the second planet from the Sun?", 
		a1: "Venus", 
		a2: "Mars", 
		a3: "Earth", 
		a4: "Mercury", 
		corr: 1, 
		img : "venus.jpg"
	},
	{
		q: "Phobos and Deimos are the moons of which planet in our solar system?", 
		a1: "Venus", 
		a2: "Jupiter", 
		a3: "Mars", 
		a4: "Uranus", 
		corr: 3, 
		img : "mars-phobos_deimos.jpg"
	},
	{
		q: "Titania, Miranda and Bianca are all moons of which planet in our solar system?", 
		a1: "Jupiter", 
		a2: "Uranus", 
		a3: "Saturn", 
		a4: "Mars", 
		corr: 2, 
		img : "uranus.jpg"
	},
	{ 
		q: "What is the fifth planet from the Sun?", 
		a1: "Jupiter", 
		a2: "Venus", 
		a3: "Saturn", 
		a4: "Earth", 
		corr: 1, 
		img : "jupiter.jpg"
	},
	{ 
		q: "How many planets are in our solar system have rings?", 
		a1: "1", 
		a2: "4", 
		a3: "2", 
		a4: "5", 
		corr: 2, 
		img : "planets.jpg"
	},
	{ 
		q: "Which planet lies between Jupiter and Uranus?", 
		a1: "Mars", 
		a2: "Neptun", 
		a3: "Saturn", 
		a4: "Mercury", 
		corr: 3, 
		img : "saturn.jpg"
	},
	{ 
		q: "Which is the fastest rotating planet in our solar system?", 
		a1: "Mars", 
		a2: "Jupiter", 
		a3: "Earth", 
		a4: "Mercury", 
		corr: 2, 
		img : "jupiter.jpg"
	},
	{ 
		q: "Which planet lies between Saturn and Neptune?", 
		a1: "Uranus", 
		a2: "Jupiter", 
		a3: "Earth", 
		a4: "Mars", 
		corr: 1, 
		img : "uranus.jpg"
	},
	{ 
		q: "How may moons does the planet Mars have?", 
		a1: "1", 
		a2: "2", 
		a3: "0", 
		a4: "3", 
		corr: 2, 
		img : "mars-phobos_deimos.jpg"
	},
	{ 
		q: "How many stars make up Orion’s Belt?", 
		a1: "7", 
		a2: "4", 
		a3: "5", 
		a4: "3", 
		corr: 4, 
		img : "orion.jpg"
	},
	{ 
		q: "Io, Europa, Ganymede and Callisto are all moons of which planet in our solar system?", 
		a1: "Saturn", 
		a2: "Venus", 
		a3: "Uranus", 
		a4: "Jupiter", 
		corr: 4, 
		img : "jupiter.jpg"
	},
	{ 
		q: "Which is the only planet in our solar system to rotate clockwise?", 
		a1: "Saturn", 
		a2: "Mars", 
		a3: "Mercury", 
		a4: "Venus", 
		corr: 4, 
		img : "venus.jpg"
	},
	{ 
		q: "What is the name of the galaxy that contains the Earth?", 
		a1: "Milky Way", 
		a2: "Andromeda", 
		a3: "Whirpool Galaxy", 
		a4: "Pinwheel Galaxy", 
		corr: 1, 
		img : "milky_way.jpg"
	},
	{ 
		q: "Which is the largest planet in our solar system?", 
		a1: "Venus", 
		a2: "Jupiter", 
		a3: "Saturn", 
		a4: "Uranus", 
		corr: 2, 
		img : "jupiter.jpg"
	},
	{ 
		q: "What is called a star showing a sudden large increase in brightness, then gradually returning to its original state over a period of weeks to years?", 
		a1: "Nebula", 
		a2: "Nova", 
		a3: "Black hole", 
		a4: "Guest star", 
		corr: 2, 
		img : "nova.jpg"
	},
	{ 
		q: "Which planet in our solar system takes the shortest time to orbit the Sun?", 
		a1: "Venus", 
		a2: "Earth", 
		a3: "Mercury", 
		a4: "Mars", 
		corr: 3, 
		img : "mercury.jpg"
	},
	{ 
		q: "Terra is the Latin name for which planet in our solar system?", 
		a1: "Earth", 
		a2: "Jupiter", 
		a3: "Uranus", 
		a4: "Venus", 
		corr: 1, 
		img : "earth.jpg"
	},
	{ 
		q: "Which planet is named after the Roman god of war?", 
		a1: "Saturn", 
		a2: "Jupiter", 
		a3: "Uranus", 
		a4: "Mars", 
		corr: 4, 
		img : "mars.jpg"
	},
	{ 
		q: "Which planet spins the slowest?", 
		a1: "Mercury", 
		a2: "Jupiter", 
		a3: "Venus", 
		a4: "Mars", 
		corr: 3, 
		img : "venus.jpg"
	},
	{ 
		q: "How long does it take light from the Sun to reach the earth?", 
		a1: "about 8 minutes and 18 seconds", 
		a2: "about 3 minutes and 30 seconds", 
		a3: "about 30 minutes", 
		a4: "about 12 hours", 
		corr: 1, 
		img : "sunbeam.jpg"
	},
	{ 
		q: "Which is the largest moon in the solar system?", 
		a1: "Europa", 
		a2: "Ganymede", 
		a3: "Deimos", 
		a4: "Titania", 
		corr: 2, 
		img : "jupiter-moons.gif"
	},
	{ 
		q: "From which areas of space can there be no escape?", 
		a1: "White holes", 
		a2: "Wormholes", 
		a3: "Dumb holes", 
		a4: "Black holes", 
		corr: 4, 
		img : "black_hole.jpg"
	},
	{ 
		q: "What is the name of the thousands of small bodies which orbit the Sun?", 
		a1: "Comets", 
		a2: "Asteroids", 
		a3: "Planets", 
		a4: "Stars", 
		corr: 2, 
		img : "asteroids.jpg"
	},
	{ 
		q: "What can contract to give birth to a star?", 
		a1: "Nebula", 
		a2: "Supernova", 
		a3: "Nova", 
		a4: "Big bang", 
		corr: 1, 
		img : "nebula.jpg"
	},
	{ 
		q: "Proteus and Nereid are moons of which planet?", 
		a1: "Mars", 
		a2: "Venus", 
		a3: "Neptune", 
		a4: "Uranus", 
		corr: 3, 
		img : "neptune.png"
	},
	{ 
		q: "What name is given to the explosive death of a star?", 
		a1: "Nova", 
		a2: "Supernova", 
		a3: "Nebula", 
		a4: "Hypernova", 
		corr: 2, 
		img : "supernova.jpg"
	},
	{ 
		q: "Which is the second largest planet in the solar system?", 
		a1: "Jupiter", 
		a2: "Neptune", 
		a3: "Saturn", 
		a4: "Uranus", 
		corr: 3, 
		img : "saturn.jpg"
	},
	{ 
		q: "Which planet has been the focus of investigations for signs of life?", 
		a1: "Mars", 
		a2: "Venus", 
		a3: "Jupiter", 
		a4: "Uranus", 
		corr: 1, 
		img : "mars.jpg"
	}
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
	unAnswered : 0,

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

		var firstRowTab =  $("table").children().eq(1).children("tr").eq(0).children("td");
    	firstRowTab.eq(0).text("Correct Answers");
    	firstRowTab.eq(1).text(this.nCorrect);

		var secondRowTab =  $("table").children().eq(1).children("tr").eq(1).children("td");
    	secondRowTab.eq(0).text("Incorrect Answers");
    	secondRowTab.eq(1).text(this.nWrong);

		var thirdRowTab =  $("table").children().eq(1).children("tr").eq(2).children("td");
    	thirdRowTab.eq(0).text("Unanswered");
    	thirdRowTab.eq(1).text(this.unAnswered);

		$("#start").hide();
		$("#timer").hide();
		$("#question_area").hide();
		$("#answer_area").hide();

		$("#final_area").show();
	},

	askQuestion : function(){

    	game.currQuestion++;
    	var maxQ = MaxQuestionsToAsk;
    	if(MaxQuestionsToAsk > questionList.length) maxQ = questionList.length;

    	if( game.currQuestion < maxQ){

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

		var correctN = qObj.corr;

		if(nA[1] == correctN){
			answerText += "Correct!";
			this.nCorrect++;
		}
		else if(nA[1] == 0){
			answerText += "Out of Time!";
			this.unAnswered++;
		}
		else{
			answerText += "Incorrect!";
			this.nWrong++;
		}

		$("#correct_answer").empty();
		$("#correct_answer").append( $("<p>").text(answerText) );
		if(nA[1] != correctN){
			$("#correct_answer").append( $("<p>").text(
				"Correct answer: " + qObj["a"+correctN]) );
		}
		else{
			$("#correct_answer").append( $("<p>").text(
				"It's " + qObj["a"+correctN]) );
		}
		var answerImage = $("<img>");
		answerImage.attr("src", "assets/images/"+qObj.img);
		answerImage.attr("class", "a_image");
		// console.log(imgSrc);
		$("#correct_answer").append(answerImage);

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

	$("#start, #restart").on("click", "button", function(){
		game.start();
	});

	$("#answers").on("click", "li", function(){
		var nAnswer = $(this).attr("data");
		game.showAnswer(nAnswer);
	});

});

