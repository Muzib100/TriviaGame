

$(document).ready(function() {

	// selectedVal will have the return val() of pick from each question
		 	var selectedVal;
		// selected array will contain all the selectedVal
		 	var selected = ["","","",""];
		// correctPick will be used to count correct answers
		 	var correctPick = 0;
		// wrongPick will be used to count wrong answers
		 	var wrongPick = 0;
		// for holding the obj value
		 	temp = 0;

			var number = 30; //initial timer
			var intervalId;




			// Quiz objects panel1, panel2 etc are loaded
			var allList = [];
				allList[0] = {
				 question: "What is the capital of Spain?  ",
				 ans1: "Prague",
				 ans2: "Lisbon",
				 ans3: "Madrid",
				 correct: "Madrid"
				};
				//console.log("correct ans for panel1: ", allList[0].correct);


				allList[1] = {
				 question: "What is the capital of Netherland?  ",
				 ans1: "Bonn",
				 ans2: "Hague",
				 ans3: "Brussel",
				 correct: "Hague"
				};
				//console.log("correct ans for panel2: ", allList[1].correct);

				allList[2] = {
				 question: "What is the capital of France?  ",
				 ans1: "Paris",
				 ans2: "Luxembourg city",
				 ans3: "Munich",
				 correct: "Paris"
				};
				//console.log("correct ans for panel3: ", allList[2].correct);

				allList[3] = {
				 question: "What is the capital of Italy?  ",
				 ans1: "Athens",
				 ans2: "London",
				 ans3: "Rome",
				 correct: "Rome"
				};
				//console.log("correct ans for panel4: ", allList[3].correct);

				allList[4] = {
				 question: "What is the capital of Denmark?  ",
				 ans1: "Stockholm",
				 ans2: "Helsinki",
				 ans3: "Copenhagen",
				 correct: "Copenhagen"
				};
				

				allList[5] = {
				 question: "What is the capital of Norway?  ",
				 ans1: "Oslo",
				 ans2: "Athens",
				 ans3: "Warsaw",
				 correct: "Oslo"
				};
				

				allList[6] = {
				 question: "What is the capital of Ukraine?  ",
				 ans1: "Reykjavik",
				 ans2: "Kiev",
				 ans3: "Valletta",
				 correct: "Kiev"
				};
				//console.log("correct ans for panel4: ", allList[6].correct);

			var temp1 = []; // a temporary array to create an array of unique numbers
			var quizList = []; // an array to contain objects

			//initializing the temp array with a higher number to check with indexOf

			for (i = 0; i < 9; i++){
					temp1[i] = 8;
				}

			for (i = 0; i < 9; i++){

					random = Math.floor(Math.random() * allList.length);
					if (temp1.indexOf(random) === -1){
						temp1.unshift(random);
					}
				}
				
			for (i = 0; i < 4; i++){
					quizList[i] = allList[temp1[i]];
			}
			console.log("quizList: ", quizList);




				// var lastrandom = 9;
				// var random;

				// var quizList = [];
				// for (i = 0; i < 4; i++){

				// 	random = Math.floor(Math.random() * allList.length);
					
				// 	while (random === lastrandom) {
				//     	random = Math.floor(Math.random() * allList.length);
				// 	}
				// 	lastrandom = random;
				// 	quizList[i] = allList[random];
				// 	console.log("random_number: ", random);
				// }

				// var quizList = [];
				// for (i=0; i<4; i++){
				// 	quizList[i] = allList[Math.floor(Math.random() * allList.length)];
					
				// }
				
				//console.log("quizList: ", quizList);


		//Clock function will be implemented below


		$("#random-button-button").on("click", run);

    	function run() {	
    	    $('#trivia-container').removeClass('bad');	// removes the display None
        	intervalId = setInterval(decrement, 1000);

  // the run funciton starts with start and then ends at the end of execution

        	function stop() {
		     	clearInterval(intervalId);
    			}

			function check() {
				if(correctPick + wrongPick === 4){
				alert("Game Over");
				return  stop(); //stops the clock counter
				}
			}	

        	function decrement() {
		         number--;
		    	$("#clock-display").html("<h2>" + number + "</h2>");
		    	
				 if (number === 0) {
				     stop();
				     alert("Time Up!");    
			 		}
				}


				// for (i = 1; i < 4; i++)
				// 	{
				// // 	  //create HTML element of tag li

				// 	  $('#Q1').append("<li id='q1a" + i + "'></li>");
				// 	  $('#q1a'+i).html(quizList[0]['ans' + i]);
				 	
			 // 		 console.log('q1a' + i );
			 // 		 console.log(quizList[0]['ans' + i]);
 	
 		  		//The value of the objects are loade"d in below

		 	$("#Q1").html(quizList[0].question);	
		 	$("#q1a1").html(quizList[0].ans1);
		 	$("#q1a2").html(quizList[0].ans2);
		 	$("#q1a3").html(quizList[0].ans3);

		 	$("#Q2").html(quizList[1].question);	
		 	$("#q2a1").html(quizList[1].ans1);
		 	$("#q2a2").html(quizList[1].ans2);
		 	$("#q2a3").html(quizList[1].ans3);

		 	$("#Q3").html(quizList[2].question);	
		 	$("#q3a1").html(quizList[2].ans1);
		 	$("#q3a2").html(quizList[2].ans2);
		 	$("#q3a3").html(quizList[2].ans3);

		 	$("#Q4").html(quizList[3].question);	
		 	$("#q4a1").html(quizList[3].ans1);
		 	$("#q4a2").html(quizList[3].ans2);
		 	$("#q4a3").html(quizList[3].ans3);



		 	function check1(object){
					
					temp = eval(selectedVal);	
			  		if (temp === object){
			  			correctPick ++
			  		} else{
			  			wrongPick ++
			  		}
		 	}


	 	$('#myForm1 input').on('change', function() {
	 		selectedVal = $('input[name= "radioName"]:checked', '#myForm1').val();
	  				
			  	check1(quizList[0].correct);
	//refresh the panel to display the correct answer

					$("#A1").html(quizList[0].correct);
					$("#correctScore").html(correctPick);
					$("#wrongScore").html(wrongPick);
				 
				check();

					
		});


	$('#myForm2 input').on('change', function() {
 		selectedVal = $('input[name= "radioName"]:checked', '#myForm2').val();

		  		check1(quizList[1].correct);

//refresh the panel to display the correct answer

					$("#A2").html(quizList[1].correct);
					$("#correctScore").html(correctPick);
					$("#wrongScore").html(wrongPick);
				check();

   	
	});

		
	$('#myForm3 input').on('change', function() {
 			selectedVal = $('input[name= "radioName"]:checked', '#myForm3').val();
	   		
		  		
		  		check1(quizList[2].correct);

					$("#A3").html(quizList[2].correct);
					$("#correctScore").html(correctPick);
					$("#wrongScore").html(wrongPick);
				check();

			
			   			
	});

	

		
	$('#myForm4 input').on('change', function() {
 			selectedVal = $('input[name= "radioName"]:checked', '#myForm4').val();
 			
 			
		  		check1(quizList[3].correct);

					$("#A4").html(quizList[3].correct);
					$("#correctScore").html(correctPick);
					$("#wrongScore").html(wrongPick);

				check();
	});

  		
 } // to encapsulate the whole program under clock function 

});

 	
	

