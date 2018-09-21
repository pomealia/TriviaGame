var questions = [{
    "question": "Q: Every gasoline engine in production by BMW today is turbocharged",
    "valid": 1,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is True"]
  },
  {
    "question": "Q: The BMW logo was created to signify an airplane propeller",
    "valid": 0,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is False"]
  },
  {
    "question": "Q: BMW has owned Rolls Royce, Land Rover, and Mini Cooper ",
    "valid": 1,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is True"]
  },
  {
    "question": "Q: BMW stands for British Motor Works",
    "valid": 0,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is False"]
  },
  {
    "question": "Q: All current BMW's are within 3% of a 50/50 weight ratio",
    "valid": 1,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is True"]
  },
  {
    "question": "Q: Cars with snow tires on them will never slip in the winter",
    "valid": 0,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is False"]
  },
  {
    "question": "Q: All current BMW's have mechanical ignition systems",
    "valid": 0,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is False"]
  },
  {
    "question": "Q: BMW has a sensor which detects harmful odors or chemicals that may enter the passenger compartment, leading to the outside vents being shut",
    "valid": 1,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is True"]
  },
  {
    "question": "Q: BMW has a gasoline/electric hybrid SUV",
    "valid": 1,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is True"]
  },
  {
    "question": "Q: The BMW i8 only has a 3 cylinder engine",
    "valid": 1,
    "buttons": ["False", "True"],
    "answers": ["The correct answer is True"]
  },
];

$(document).ready(function () {

  var clockRunning = false;

  if (!clockRunning) {

    $("#startButton").on("click", gameStart);

    function gameStart() {

      var intervalId;

      var number = 15;

      clockRunning = true;

      

      $("#resetButton").on("click", reset);
      function reset() {
        questionFunction();
      }

      var query = $('#query'),
        $question = $("h2", query),
        $buttons = $("#buttons", query),
        $points = $("#score", query),
        questionsLength = questions.length,
        qc = 0,
        points = 0;

      function questionFunction() {

        var quest = questions[qc],
          question = quest.question,
          validindx = quest.valid,
          btns = quest.buttons,
          answer = quest.answers;

        $question.text(question);

        function timer() {
          clearInterval(intervalId);
  
          intervalId = setInterval(decrease, 1000);
  
          function decrease() {
            number--;
            $("#timer").html("<h2>" + number + "</h2>");
            if (number === 0) {
              number = 15;
            }
          }
          decrease();
        }
        timer();

        if (qc >= questionsLength - 1) {

          var link = document.getElementById('buttons');
          link.style.display = 'none';

        }


        $buttons.empty();
        var i = 0;
        i < btns.length; {
          $buttons.append("<button id='btnfalse'>" + btns[i] + "</button>");
        }
        var i = 1;
        i < btns.length; {
          $buttons.append("<button id='btntrue'>" + btns[i] + "</button>");
        }




        var $btn = $("button", $buttons);


        $btn.one('click', function () {
          var indx = $btn.index(this);
          points += (indx === parseInt(validindx, 10) ? 1 : -0);
          $points.text("Score: " + points);
          qc++;
          questionFunction();
          
        });
      };
      questionFunction();
    };
  };
});