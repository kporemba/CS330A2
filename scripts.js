//Krystyna Poremba 20719178

var attempt = 1;
var questions = [
  {
	q : "What does the above NAND Gate return?",
    o : [
      " 1",
      " 0",
	  " 10",
      " None",
    ],
    a : 0
  },
  {
    q : "What is the oldest model of storage?",
    o : [
      " HDD",
      " SRAM",
      " SSD",
	  " DRAM",
    ],
    a : 0
  }, 
  {
   q : "What does SSD stand for?",
    o : [
      " Standard Storage Device",
      " Standard State Drive",
      " Solid Storage Drive",
      " Solid State Drive"
    ],
    a : 3 
  },
  {
    q : "The time it takes for the platter to spin and the actuator arm to find the correct data is known as:",
    o : [
      " Latency",
      " Wear Leveling",
      " Delay",
      " Speed"
    ],
    a : 0
  },
  {
    q : "Whats the general range of consumer computer platters to spin at?",
    o : [
      " 3200 rpm to 7200 rpm",
      " 4200 rpm to 5200 rpm",
      " 4200 rpm to 7200 rpm",
      " 3200 rpm to 5200 rpm"
    ],
    a : 2
  }
];

function draw () {
var img = document.createElement("img");
img.src = "images/quiz.jpg";
var src = document.getElementById("x");

    var wrapper = document.getElementById("quiz-wrap");
	wrapper.appendChild(img);

    for (var index in questions) {
      var number = parseInt(index) + 1; // The current question number
      var qwrap = document.createElement("div"); // A div wrapper to hold this question and options
      qwrap.classList.add("question");

      // The question
      var question = document.createElement("h1");
      question.innerHTML = number + ") " + questions[index]['q'];
      qwrap.appendChild(question);

      // The options 
      for (var oindex in questions[index]['o']) {
        var label = document.createElement("label");
        qwrap.appendChild(label);

        var option = document.createElement("input");
        option.type = "radio";
        option.value = oindex;
        option.required = true;
        option.classList.add("oquiz"); 

        option.name = "quiz-" + number;
        label.appendChild(option);

        var otext = document.createTextNode(questions[index]['o'][oindex]);
        label.appendChild(otext);
      }
      wrapper.appendChild(qwrap);
    }

    // Attach submit button + event handler to the quiz wrapper
    var submitbutton = document.createElement("input");
    submitbutton.type = "submit";
    wrapper.appendChild(submitbutton);
    wrapper.addEventListener("submit", submit);
  }

function submit (evt) {
    // Stop the form from submitting
    evt.preventDefault();
    evt.stopPropagation();

    // get all the selected options
    var selected = document.querySelectorAll(".oquiz:checked");
	var qnum = document.querySelectorAll(".question");

    // Get the score
    var score = 0;
    for (var index in questions) {
      if (selected[index].value == questions[index]['a']) {
        score++;
		  qnum[index].style.backgroundColor = "#4fb854";
      }
	  else{
		  qnum[index].style.backgroundColor = "#ee2e2c";
	  }
    }
	
    var total = selected.length;
    var percent = score / total ;

    // Update and show the score
    var html = "<h1>";
    if (percent>=0.7) {
      html += "WELL DONE!";
    } else if (percent>=0.4) {
      html += "NOT BAD!";
    } else {
      html += "TRY HARDER!";
    }
    html += "</h1>";
    html += "<div class=\"attempt\">Attempt: " + attempt + " You scored " + score + " out of " + total + ".</div>";
    document.getElementById("quiz-wrap").innerHTML += html;
	attempt++;
  }

window.addEventListener("load", draw);