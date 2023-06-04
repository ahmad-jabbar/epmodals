const jsPsych = initJsPsych({
    on_finish: function (data) {
//         jsPsych.data.displayData('csv');
        proliferate.submit({"trials": data.values()});
    window.location = "https://app.prolific.co/submissions/complete?cc=COH7SM62"
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
    stimulus: "In this experiment, you will read a passage about a situation. Then, you will be asked two short questions. Please read the passage carefully and answer the questions as you see fit. Press SPACE to continue. Thanks! :)",
    choices: [" "]
};
timeline.push(instructions);

var yoonji1 = "Yoonji is a prolific baseball player. She wants to try out for America\'s national team. The trials are a month away. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a slight meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br>Yoonji wonders if she should stop practicing and rest until the trials, but she also worries that rest may make her rusty. For more certainty, she gets an MRI done. Regardless of the MRI results, she decides that she will rest due to mental health reasons.<br><br>Still, she is interested in finding out <b>whether her physiotherapist is competent</b> and if she should stay with him. Yoonji goes to the radiologist who has the MRI results, <b>which show no tear at all</b>. Yoonji asks the radiologist:<br><br> \"My physiotherapist said that I might have a slight meniscus tear. Is what he said true?\"<br><br><b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>"

var trial1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Yoonji is a prolific baseball player. She wants to try out for America\'s national team. The trials are a month away. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a slight meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br>Yoonji wonders if she should stop practicing and rest until the trials, but she also worries that rest may make her rusty. For more certainty, she gets an MRI done. Regardless of the MRI results, she decides that she will rest until the end of the sports season.<br><br>Still, she is interested in finding out <b>whether her physiotherapist is competent</b> and if she should stay with him for the next sports season too. Yoonji goes to the radiologist who has the MRI results, which show <b>no tear at all</b>. The radiologist also interprets the physiotherapist's report, which doesn't show any errors. Yoonji asks the radiologist:<br><br> \"I play baseball professionally. I am wondering if I should stay with my phsyiotherapist for another year. He said, \'You might have a slight meniscus tear\'. Is what he said true?\"<br><br><b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

var trialcheck1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Instructions: Given the statement below, choose whether what is said is TRUE or FALSE.<br><br><br>The MRI result suggested that Yoonji had a meniscus tear.<br><br>",
    choices: ['True', 'False'],
};

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


var trial2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Yoonji liked to play baseball when she was a kid. Now, she\'s busy most of the day due to work, but she wants to try playing baseball with her nieces. Due to rustiness over time, she\'s not sure if she should do that though. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a slight meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br> Yoonji wonders if she should ditch plans of playing baseball with her nieces. For more certainty, she gets an MRI done. Regardless of the MRI results, she decides that she\'ll delay her plans to play with her nieces for some other weekend. Still, she is interested in finding out <b>whether her physiotherapist is competent</b> and if she should stay with him for another year. Yoonji goes to the radiologist who has the MRI results, which show <b>no tear at all</b>. The radiologist also interprets the physiotherapist's report, which doesn't show any errors. Yoonji asks the radiologist:<br><br> \"I play baseball with my nieces at times. I am wondering if I should stay with my physiotherapist for another year. He said, \'You might have a slight meniscus tear\'. Is what he said true?\"<br><br> <b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

// timeline.push(trial2, trialcheck1, trialq1)
// var bigt = [trial1, trial2]
// timeline.push(bigt[0], bigt[1])


var trial3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Yoonji is a prolific baseball player. She wants to try out for America\'s national team. The trials are a month away. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a slight meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br>Yoonji wonders if she should stop practicing and rest until the trials, but she also worries that rest may make her rusty. For more certainty, she gets an MRI done, as she is interested in finding out <b>if she has a meniscus tear</b>.<br><br> Yoonji goes to the radiologist who has the MRI results, which show <b>no tear at all</b>. The radiologist also interprets the physiotherapist's report, which doesn't show any errors. Yoonji asks the radiologist:<br><br> \"I play baseball professionally. I am wondering if I have a meniscus tear. My physiotherapist said, \'You might have a slight meniscus tear\'. Is what he said true?\"<br><br> <b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>",
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



// timeline.push(trial3, trialcheck1, trialq2)


var trial4 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Yoonji liked to play baseball when she was a kid. Now, she\'s busy most of the day due to work, but she wants to try playing baseball with her nieces. Due to rustiness over time, she\'s not sure if she should do that though. Yoonji goes to her physiotherapist. The physiotherapist performs a careful and thorough physical examination, which suggests that she has a slight meniscus tear. The physiotherapist says to Yoonji:<br><br><b>\"You might have a slight meniscus tear.\"</b><br><br> Yoonji wonders if she should ditch plans of playing baseball with her nieces. She gets an MRI done, as she is interested in finding out <b>if she has a meniscus tear</b>. Yoonji goes to the radiologist who has the MRI results, which show <b>no tear at all</b>. The radiologist also interprets the physiotherapist's report, which doesn't show any errors. Yoonji asks the radiologist:<br><br>\"I play baseball with my nieces at times. I am wondering if I have a meniscus tear. My physiotherapist said, \'You might have a slight meniscus tear\'. Is what he said true?\"<br><br> <b>What\'s the most appropriate response to Yoonji\'s question \"Is what he said true?\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

// timeline.push(trial4, trialcheck1, trialq2)



var trial5 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "John is worried he might have strep throat. He goes to his primary doctor. The doctor runs an initial test that indicates that there is a 75% chance that John does not have strep. Based on the initial test results, John\'s doctor says:<br><br><b>\"You probably don\'t have strep throat.\"</b><br><br>However, the doctor recommends doing a throat culture in order to be safe. John's symptoms go away, but John is still interested in knowing <b>whether his primary doctor is competent</b>.<br><br> John comes back two days later to find out the results of the throat culture, and sees a different doctor, who has the results and a report that suggests that John's primary doctor did not make any mistakes in running the tests or interpreting them. The throat culture comes up positive, which indicates <b>there is a 90% chance that John has strep throat</b>.<br><br>John is interested in his doctor's competence because John is on the advisory committee of Pano Albo\'s doctors unit (PADU) that specializes in diagnosing diseases. John wants to recommend his primary doctor for the position of PADU\'s chief scientist. But now John wants to know <b>whether his primary doctor is a suitable recommendation</b>.<br><br> John asks the second doctor: <br><br>\"I have a recommendation to make for PADU, and I\'m trying to figure out whether I can rely on my primary doctor. He told me, \'You probably don\'t have strep\'. <b>Is what he said true?\"</b><br><br><b>What's the most appropriate response to John\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};


var trialcheck2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Instructions: Given the statement below, choose whether what is said is TRUE or FALSE.<br><br><br>The throat culture as done by the second doctor suggested that John did not have strep throat.<br><br>",
    choices: ['True', 'False'],
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


// timeline.push(trial5, trialcheck2, trialq3)



var trial6 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "John is worried he might have strep throat. He goes to his primary doctor. The doctor runs an initial test that indicates that there is a 75% chance that John does not have strep. Based on the initial test results, John\'s doctor says:<br><br><b>\"You probably don\'t have strep throat.\"</b><br><br>However, the doctor recommends doing a throat culture in order to be safe. John's symptoms go away, but John is still interested in knowing <b>whether his primary doctor is competent</b>. <br><br> John comes back two days later to find out the results of the throat culture, and sees a different doctor, who has the results and a report that suggests that John's primary doctor did not make any mistakes in running the tests or interpreting them. The throat culture comes up positive, which indicates <b>there is a 90% chance that John has strep throat</b>.<br><br>John is instered in his doctor's competence because John wonders <b>if John should file a complaint against his doctor</b>. John asks the second doctor: <br><br>\"I\'m trying to figure out whether I can rely on my primary doctor or if I should file a complaint against him. He told me, \'You probably don\'t have strep\'. <b>Is what he said true?\"</b><br><br><b>What's the most appropriate response to John\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

// timeline.push(trial6, trialcheck2, trialq3)


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
    stimulus: "John is worried he might have strep throat. He goes to his primary doctor. The doctor runs an initial test that indicates that there is a 75% chance that John does not have strep. Based on the initial test results, John\'s doctor says:<br><br><b>\"You probably don\'t have strep throat.\"</b><br><br>However, the doctor recommends doing a throat culture in order to be safe.<br><br> For John, the pain with strep throat is unbearable and it lasts a long time; so, John wonders <b>if he has strep throat or not</b>.<br><br> John comes back two days later to find out the results of the throat culture, and sees a different doctor who has the results and a report that suggests that John's primary doctor did not make any mistakes in running the tests or interpreting them. The throat culture comes up positive, which indicates <b>there is a 90% chance that John has strep throat</b>. John asks the second doctor: <br><br>\"I can't tolerate strep and I\'m trying to figure out whether I have strep or not. My primary doctor told me, \'You probably don\'t have strep\'. <b>Is what he said true?\"</b><br><br><b>What\'s the most appropriate response to John\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

// timeline.push(trial7, trialcheck2, trialq4)

var trial8 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "John is worried he might have strep throat. He goes to his primary doctor. The doctor runs an initial test that indicates that there is a 75% chance that John does not have strep. Based on the initial test results, John\'s doctor says:<br><br><b>\"You probably don\'t have strep throat.\"</b><br><br>However, the doctor recommends doing a throat culture in order to be safe.<br><br> For John, strep throat really doesn't cause much of a problem, but he has a lot of free time these days; so, John wonders <b>if he has strep throat or not</b>.<br><br> John comes back two days later to find out the results of the throat culture, and sees a different doctor who has the results and a report that suggests that John's primary doctor did not make any mistakes in running the tests or interpreting them. The throat culture comes up positive, which indicates <b>there is a 90% chance that John has strep throat</b>. John asks the second doctor: <br><br>.\"Although strep doesn't bother me much, I\'m trying to figure out whther I have strep or not. My primary doctor told me, \'You probably don\'t have strep\'. <b>Is what he said true?\"</b><br><br><b>What's the most appropriate response to John\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

// timeline.push(trial8, trialcheck2, trialq4)


var trial9 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "A town has an infamous murderer called \'Big Tony\'. There are reports circulating that say that near the main train station, there\'s evidence of Big Tony\'s death. Inspector Ari arrives at the crime scene. After looking at the evidence carefully and exhaustively running all the tests he could, Ari says:<br><br><b> \"Big Tony might be dead\".</b><br><br>Ari decides to ease the patrol at night in the town. <b>Soon after, two brutal murders get committed in a single night, just in the style of Big Tony</b>. Then a team of federal agents gets called by Ari\'s supervisor. The federal agents look at the evidence and after running some specialized forensic tests conclude that actually <b>Big Tony is alive and he planted the fake evidence himself</b>, but the initial investigation by Ari was carefully conducted without errors.<br><br> The supervisor wonders <b>if Big Tony is dead</b>, given that two brutal murders got committed after Ari's inspection. The supervisor asks the federal agents:<br><br>\"Two brutal murders got committed, and I am trying to figure out if Big Tony is dead. After looking at the evidence carefully, Ari said, \'Big Tony might be dead\'. <b>Is what he said true?</b>\"<br><br><b>What's the most appropriate response to the supervisor\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

var trialcheck3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Instructions: Given the statement below, choose whether what is said is TRUE or FALSE.<br><br><br>The specialized forensic tests revealed that Big Tony was dead.<br><br>",
    choices: ['True', 'False'],
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



// timeline.push(trial9, trialcheck3, trialq5)



var trial10 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "A town has an infamous murderer called \'Big Tony\'. There are reports circulating that say that near the main train station, there\'s evidence of Big Tony\'s death. Inspector Ari arrives at the crime scene. After looking at the evidence carefully and exhaustively running all the tests he could, Ari says:<br><br><b> \"Big Tony might be dead\".</b><br><br>Ari decides to ease the patrol at night in town. <b>Soon after, a town local reports a sighting of someone matching Big Tony's description</b>. Then a team of federal agents gets called by Ari\'s supervisor. The federal agents look at the evidence and after running some specialized forensic tests conclude that actually <b>Big Tony is alive and he planted the fake evidence himself</b>, but the initial investigation by Ari was carefully conducted without errors.<br><br> The supervisor wonders <b>if Big Tony is dead</b>, given Big Tony's sighting by a local after Ari's inspection. The supervisor asks the federal agents:<br><br>\"A local reported sighting Big Tony, and I am trying to figure out if Big Tony is dead. After looking at the evidence carefully, Ari said, \'Big Tony might be dead\'. <b>Is what he said true?</b>\"<br><br><b>What's the most appropriate response to the investigator\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

// timeline.push(trial10, trialcheck3, trialq5)



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
    stimulus: "A town has an infamous murderer called \'Big Tony\'. There are reports circulating that say that near the main train station, there\'s evidence of Big Tony\'s death. Inspector Ari arrives at the crime scene. After looking at the evidence carefully and exhaustively running all the tests he could, Ari says:<br><br><b> \"Big Tony might be dead\".</b><br><br>Ari decides to ease the patrol at night in the town. <b>Soon after, two brutal murders get committed in a single night, just in the style of Big Tony</b>. Then a team of federal agents gets called by Ari\'s supervisor. The federal agents look at the evidence and after running some specialized forensic tests conclude that actually <b>Big Tony is alive and he planted the fake evidence himself</b>, but the initial investigation by Ari was carefully conducted without errors.<br><br> The supervisor wonders <b>if Ari is a competent inspector</b> and if he should be kept as a member of the inspection team, given that two brutal murders got committed after Ari's inspection. The supervisor asks the federal agents:<br><br>\"Two brutal murders got committed, and I am wondering if I can rely on Ari or if I should fire him. After looking at the evidence carefully, Ari said, \'Big Tony might be dead\'. <b>Is what he said true?</b>\"<br><br><b>What's the most appropriate response to the supervisor\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

// timeline.push(trial11, trialcheck3, trialq6)



var trial12 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "A town has an infamous murderer called \'Big Tony\'. There are reports circulating that say that near the main train station, there\'s evidence of Big Tony\'s death. Inspector Ari arrives at the crime scene. After looking at the evidence carefully and exhaustively running all the tests they could, Ari says:<br><br><b> \"Big Tony might be dead\".</b><br><br>Ari decides to ease the patrol at night in the town. <b>Soon after, a town local reports a sighting of someone matching Big Tony's description</b>. Then a team of federal agents gets called by Ari\'s supervisor. The federal agents look at the evidence more and after running some specialized forensic tests conclude that actually <b>Big Tony is alive and he planted the fake evidence himself</b>, but the initial investigation by Ari was carefully conducted without errors.<br><br>  The supervisor wonders <b>if Ari is a competent inspector</b> and if he should be kept as a member of the inspection team, given Big Tony's sighting by a local after Ari's inspection. The supervisor asks the federal agents:<br><br>\"A local reported sighting Big Tony, and I am wondering if I can rely on Ari or if I should fire him. After looking at the evidence carefully, Ari said, \'Big Tony might be dead\'. <b>Is what he said true?</b>\"<br><br><b>What's the most appropriate response to the supervisor\'s question \"is what he said true\"?</b><br><br>",
    choices: ['\"Yes, what he said is true\"', '\"No, what he said is false\"'],
};

// timeline.push(trial12, trialcheck3, trialq6)

// timeline.push(trial1, trial2, trial3, trial4, trial5, trial6, trial7, trial8, trial9, trial10, trial11, trial12)

var big1 = [trial1, trialcheck1, trialq1]

// timeline.push(big1[0])

var big2 = [trial2, trialcheck1, trialq1]

var big3 = [trial3, trialcheck1, trialq2]

var big4 = [trial4, trialcheck1, trialq2]

var big5 = [trial5, trialcheck2, trialq3]

var big6 = [trial6, trialcheck2, trialq3]

var big7 = [trial7, trialcheck2, trialq4]

var big8 = [trial8, trialcheck2, trialq4]

var big9 = [trial9, trialcheck3, trialq5]

var big10 = [trial10, trialcheck3, trialq5]

var big11 = [trial11, trialcheck3, trialq6]

var big12 = [trial12, trialcheck3, trialq6]


var myarray = [big1, big2, big3, big4, big5, big6, big7, big8, big9, big10, big11, big12];

var array1 = jsPsych.randomization.repeat(myarray, 1, false);

timeline.push(array1[0][0], array1[0][1])




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





