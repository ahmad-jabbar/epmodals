const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData('csv');
      }
  });

let timeline = [];
const irb = {
    // Which plugin to use
    type: jsPsychHtmlButtonResponse,
    // What should be displayed on the screen
    stimulus: '<p><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.</font></p>',
    // What should the button(s) say
    choices: ['Continue']
};

// push to the timeline
timeline.push(irb)

const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "In this experiment, you will read five passages about five situations. For each passage, we will ask you two questions. Press SPACE to continue. Thanks! :)",
    choices: [" "]
};
timeline.push(instructions);



var trial1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Yoonji is a prolific baseball player. She wants to try out for America\'s national team. The trials are a month away. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br>Yoonji wonders if she should stop practicing and rest until the trials, but she also worries that rest may make her rusty. For more certainty, she gets an MRI done. Regardless of the MRI results, she decides that she will rest due to mental health reasons.<br><br>Still, she is interested in finding out whether her physiotherapist is competent and if she should stay with him. Yoonji goes to the radiologist who has the MRI results, which show no tear at all. Yoonji asks the radiologist:<br><br> \"My physiotherapist said that I might have a slight meniscus tear. Is what he said true?\"<br><br><b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};


var trialcheck1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Did the MRI result suggest something different from the initial physical exmaination done by the physiotherapist?<br><br>",
    choices: ['Yes', 'No'],
};


// var trialq1 = {
//     type: jsPsychSurveyLikert,
//     questions: [
//         {
//             prompt: "How important is it for Yoonji to know whether her physiotherapist is competent?",
//             labels: [
//                 "Very important",
//                 "Important",
//                 "Slightly important",
//                 "Neutral",
//                 "Slightly unimportant",
//                 "Not important",
//                 "Not important at all"
//             ]
//         }
//     ]
// };

var trialq1 = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: "Given Yoonji's situation, how important is it for Yoonji to know whether her physiotherapist is competent or not?", 
        labels: [
          "Not important at all", 
          "Not important", 
          "Slightly unimportant",
          "Neutral", 
          "Slightly important",
          "Important", 
          "Very important"
        ]
      }
    ]
  };



timeline.push(trial1, trialcheck1, trialq1)


var trial2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Yoonji liked to play baseball when she was a kid. Now, she\'s busy most of the day due to work, but she wants to try playing it with her nieces. Due to rustiness over time, she\'s not sure if she should do that though. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a slight meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br> Yoonji wonders if she should ditch plans of playing baseball with her nieces. She gets an MRI done. Regardless of the MRI results, she decides that she\'ll delay her plans to play with her nieces for some other weekend. Still, she is interested in finding out whether her physiotherapist is competent and if she should stay with him. Yoonji goes to the radiologist who has the MRI results, which show no tear at all. Yoonji asks the radiologist:<br><br> \"My physiotherapist said that I might have a slight meniscus tear. Is what he said true?\"<br><br> <b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};


timeline.push(trial2, trialcheck1, trialq1)

// var bigt = [trial1, trial2]

// timeline.push(bigt[0], bigt[1])


var trial3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Yoonji is a prolific baseball player. She wants to try out for America\'s national team. The trials are a month away. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br>Yoonji wonders if she should stop practicing and rest until the trials, but she also worries that rest may make her rusty. For more certainty, she gets an MRI done.<br><br> Yoonji goes to the radiologist who has the MRI results, which show no tear at all. Yoonji asks the radiologist:<br><br> \"My physiotherapist said that I might have a slight meniscus tear. Is what he said true?\"<br><br> <b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};


var trialq2 = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: "Given Yoonji's situation, how important is it for Yoonji to know whether she has a meniscus tear or not?", 
        labels: [
          "Not important at all", 
          "Not important", 
          "Slightly unimportant",
          "Neutral", 
          "Slightly important",
          "Important", 
          "Very important"
        ]
      }
    ]
  };



timeline.push(trial3, trialcheck1, trialq2)


var trial4 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Yoonji liked to play baseball when she was a kid. Now, she\'s busy most of the day due to work, but she wants to try playing it with her nieces. Due to rustiness over time, she\'s not sure if she should do that though. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a slight meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br> Yoonji wonders if she should ditch plans of playing baseball with her nieces. She gets an MRI done. Yoonji goes to the radiologist who has the MRI results, which show no tear at all. Yoonji asks the radiologist:<br><br>\"My physiotherapist said that I might have a slight meniscus tear. Is what he said true?\"<br><br> <b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

timeline.push(trial4, trialcheck1, trialq2)



var trial5 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "John is worried he might have strep throat. He goes to his primary doctor. The doctor runs an initial test that indicates that there is a 75% chance that John does not have strep. Based on the initial test results, John\'s doctor says:<br><br><b>\"You probably don\'t have strep throat.\"</b><br><br>However, the doctor recommends doing a throat culture in order to be safe. John's symptoms went away, but John is still interested in knowing whether his primary doctor is competent.<br><br> John comes back two days later to find out the results of the throat culture, and sees a different doctor, who has the results and a report that suggests that John's primary doctor did not make any mistakes in running the tests or interpreting them. The throat culture comes up positive, which indicates there is a 90% chance that John has strep throat.<br><br>John is interested in his doctor's competence because John is on the advisory committee of Pano Albo\'s doctors unit (PADU) that specializes in diagnosing rare diseases. John wants to recommend his primary doctor for the position of PADU\'s chief scientist. But now John wants to know whether his primary doctor is a suitable recommendation.<br><br> John asks the second doctor: <br><br>\"I\'m trying to figure out whether I can rely on my primary doctor. He told me, \'You probably don\'t have strep'. <b>Is what he said true?\"</b><br><br><b>What's the most appropriate response to John\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};


var trialcheck2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Did the throat culture done by the second doctor suggest something different from the initial test done by the primary doctor?<br><br>",
    choices: ['Yes', 'No'],
};


var trialq3 = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: "Given John's situation, how important is it for John to know whether his primary doctor is competent or not?", 
        labels: [
          "Not important at all", 
          "Not important", 
          "Slightly unimportant",
          "Neutral", 
          "Slightly important",
          "Important", 
          "Very important"
        ]
      }
    ]
  };


timeline.push(trial5, trialcheck2, trialq3)



var trial6 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "John is worried he might have strep throat. He goes to his primary doctor. The doctor runs an initial test that indicates that there is a 75% chance that John does not have strep. Based on the initial test results, John\'s doctor says:<br><br><b>\"You probably don\'t have strep throat.\"</b><br><br>However, the doctor recommends doing a throat culture in order to be safe. John's symptoms went away, but John is still interested in knowing whether his primary doctor is competent. <br><br> John comes back two days later to find out the results of the throat culture, and sees a different doctor, who has the results and a report that suggests that John's primary doctor did not make any mistakes in running the tests or interpreting them. The throat culture comes up positive, which indicates there is a 90% chance that John has strep throat.<br><br>John is interested in his doctor's competence because John is wondering whether he should switch doctors.<br><br> John asks the second doctor: <br><br>\"I\'m trying to figure out whether I can rely on my primary doctor. He told me, \'You probably don\'t have strep'. <b>Is what he said true?\"</b><br><br><b>What's the most appropriate response to John\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

timeline.push(trial6, trialcheck2, trialq3)


var trialq4 = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: "Given John's situation, how important is it for John to know whether he has strep throat or not?", 
        labels: [
          "Not important at all", 
          "Not important", 
          "Slightly unimportant",
          "Neutral", 
          "Slightly important",
          "Important", 
          "Very important"
        ]
      }
    ]
  };



var trial7 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "John is worried he might have strep throat. He goes to his primary doctor. The doctor runs an initial test that indicates that there is a 75% chance that John does not have strep. Based on the initial test results, John\'s doctor says:<br><br><b>\"You probably don\'t have strep throat.\"</b><br><br>However, the doctor recommends doing a throat culture in order to be safe.<br><br> For John, the pain with strep throat is unbearable and it lasts a long time.<br><br> John comes back two days later to find out the results of the throat culture, and sees a different doctor who has the results and a report that suggests that John's primary doctor did not make any mistakes in running the tests or interpreting them. The throat culture comes up positive, which indicates there is a 90% chance that John has strep throat.<br><br>\"I\'m trying to figure out whether I can rely on my primary care physician. He told me, \'You probably don\'t have strep'. <b>Is what he said true?\"</b><br><br><b>What\'s the most appropriate response to John\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

timeline.push(trial7, trialcheck2, trialq4)

var trial8 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "John is worried he might have strep throat. He goes to his primary doctor. The doctor runs an initial test that indicates that there is a 75% chance that John does not have strep. Based on the initial test results, John\'s doctor says:<br><br><b>\"You probably don\'t have strep throat.\"</b><br><br>However, the doctor recommends doing a throat culture in order to be safe.<br><br> For John, strep throat really doesn't cause much of a problem, but he has a lot of free time these days.<br><br> John comes back two days later to find out the results of the throat culture, and sees a different doctor who has the results and a report that suggests that John's primary doctor did not make any mistakes in running the tests or interpreting them. The throat culture comes up positive, which indicates there is a 90% chance that John has strep throat.<br><br>. He told me, \"You probably don\'t have strep'. <b>Is what he said true?\"</b><br><br><b>What's the most appropriate response to John\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

timeline.push(trial8, trialcheck2, trialq4)


var trial9 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "A town named \'Hailytop\' has an infamous murderer called \'Big Tony\'. There are reports circulating that say that near the main train station, there\'s evidence of Big Tony\'s death. Inspector Ari arrives at the crime scene. After looking at the evidence carefully and exhaustively running all the tests they could, Ari says:<br><br><b> \"Big Tony might be dead\".</b><br><br>Ari decides to ease the patrol at night in the town. Soon after, two brutal murders gets committed in a single night, just in the style of Big Tony. Then a team of federal agents gets called by Ari\'s supervisor. The federal agents look at the evidence more and after running some specialized forensic tests conclude that the evidence planted was fake, but the initial investigation by Ari was as careful as it could have been. The supervisor asks the federal agents:<br><br>\"After looking at the evidence carefully, one of our investigators concluded that Big Tony might be dead. <b>Is what he said true?</b>\"<br><br><b>What's the most appropriate response to the supervisor\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

var trialcheck3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Did the specialized forensic tests reveal something different from the initial thorough investigation by Ari?<br><br>",
    choices: ['Yes', 'No'],
};


var trialq5 = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: "Given the on-goings in the town, how important is it for Ari's supervisor to know whether Big Tony is alive?", 
        labels: [
          "Not important at all", 
          "Not important", 
          "Slightly unimportant",
          "Neutral", 
          "Slightly important",
          "Important", 
          "Very important"
        ]
      }
    ]
  };



timeline.push(trial9, trialcheck3, trialq5)



var trial10 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "A town named \'Hailytop\' has an infamous murderer called \'Big Tony\'. There are reports circulating that say that near the main train station, there\'s evidence of Big Tony\'s death. Inspector Ari arrives at the crime scene. After looking at the evidence carefully and exhaustively running all the tests they could, Ari says:<br><br><b> \"Big Tony might be dead\".</b><br><br>Ari decides to ease the patrol at night in town. Soon after, a local reports a sighting of Big Tony. Then a team of federal agents gets called by Ari\'s supervisor. The federal agents look at the evidence more and after running some specialized forensic tests conclude that the evidence planted was fake, but the initial investigation by Ari was as careful as it could have been. The supervisor asks the federal agents:<br><br>\"After looking at the evidence carefully, one of our investigators concluded that Big Tony might be dead. <b>Is what he said true?</b>\"<br><br><b>What's the most appropriate response to the investigator\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

timeline.push(trial10, trialcheck3, trialq5)



var trialq6 = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: "Given the on-goings in the town, how important is it for Ari's supervisor to know whether Ari is competent or not?", 
        labels: [
          "Not important at all", 
          "Not important", 
          "Slightly unimportant",
          "Neutral", 
          "Slightly important",
          "Important", 
          "Very important"
        ]
      }
    ]
  };




var trial11 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "A town named \'Hailytop\' has an infamous murderer called \'Big Tony\'. There are reports circulating that say that near the main train station, there\'s evidence of Big Tony\'s death. Inspector Ari arrives at the crime scene. After looking at the evidence carefully and exhaustively running all the tests they could, Ari says:<br><br><b> \"Big Tony might be dead\".</b><br><br>Ari decides to ease the patrol at night in the town. Soon after, two brutal murders gets committed in a single night, just in the style of Big Tony. Then a team of federal agents gets called by Ari\'s supervisor. The federal agents look at the evidence more and after running some specialized forensic tests conclude that the evidence planted was fake, but the initial investigation by Ari was as careful as it could have been.<br><br> The supervisor wonders if Ari is a competent inspector and if he should be kept as a member of the inspection team for future cases. The supervisor asks the federal agents:<br><br>\"After looking at the evidence carefully, one of our investigators concluded that Big Tony might be dead. <b>Is what he said true?</b>\"<br><br><b>What's the most appropriate response to the supervisor\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

timeline.push(trial11, trialcheck3, trialq6)



var trial12 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "A town named \'Hailytop\' has an infamous murderer called \'Big Tony\'. There are reports circulating that say that near the main train station, there\'s evidence of Big Tony\'s death. Inspector Ari arrives at the crime scene. After looking at the evidence carefully and exhaustively running all the tests they could, Ari says:<br><br><b> \"Big Tony might be dead\".</b><br><br>Ari decides to ease the patrol at night in the town. Soon after, a local reports a sighting of Big Tony. Then a team of federal agents gets called by Ari\'s supervisor. The federal agents look at the evidence more and after running some specialized forensic tests conclude that the evidence planted was fake, but the initial investigation by Ari was as careful as it could have been.<br><br>  The supervisor wonders if Ari is a competent inspector and if he should be kept as a member of the inspection team for future cases. The supervisor asks the federal agents:<br><br>\"After looking at the evidence carefully, one of our investigators concluded that Big Tony might be dead. <b>Is what he said true?</b>\"<br><br><b>What's the most appropriate response to the supervisor\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

timeline.push(trial12, trialcheck3, trialq6)



var myarray = [trial1, trial2, trial3, trial4, trial5, trial6, trial7, trial8, trial9, trial10, trial11, trial12];

var array1 = jsPsych.randomization.repeat(myarray, 1, false);

timeline.push(array1[1])




// trialsarray = [trial1, trial2, trial3, trial4]

// function shuffle_array(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }


// shuffle_array(trialsarray)

// timeline.push(trialsarray)









const conclusion = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Thank you for time! Have a nice rest of your day! :) Press space to conclude this study.",
    choices: [" "]
};
timeline.push(conclusion);


jsPsych.run(timeline)





