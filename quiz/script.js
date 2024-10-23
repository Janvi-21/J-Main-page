document.addEventListener('DOMContentLoaded', function() {
    const questions = [
      "How often have you felt ANXIOUS or WORRIED?",
      "Do you often have trouble falling asleep, staying asleep, or sleeping too much?",
      "How well have you been able to cope with STRESS?",
      "Have you experienced a significant change in your appetite or weight recently?",
      "How often do you feel worthless or excessively guilty?",
      "Have you had difficulty concentrating, making decisions, or remembering things?",
      "How often have you experienced feeling of SADNESS or DEPRESSION?",
      "How satisfied are you with your WORK or ACADEMIC performance?",
      "How often have you felt IRRITABLE or ANGRY without apparent cause?",
      "How often you felt DISCONNECTED from YOURSELF or REALITY?",
      "How often have you felt HOPELESS about the future?",
      "How often have you felt ISOLATED or LONELY?",
      "How satisfied are you with your PHYSICAL HEALTH?",
      "How frequently have you experienced PANIC ATTACKS or sudden feelings of INTENSE FEAR?",
      "How well have you been able to COMMUNICATE your feelings and needs to OTHERS?"
    ];
  
    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');
  
    questions.forEach((question, index) => {
      const questionHTML = `
        <div>
          <p>${question}</p>
          <select id="question${index}">
            <option value="0">Not at all</option>
            <option value="1">Occasionally</option>
            <option value="2">Frequently</option>
            <option value="3">Constantly</option>
          </select>
        </div>
      `;
      form.innerHTML += questionHTML;
    });
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      let totalScore = 0;
  
      for (let i = 0; i < questions.length; i++) {
        const score = parseInt(document.getElementById(`question${i}`).value);
        totalScore += score;
      }
  
      let resultText = '';
      if (totalScore >= 0 && totalScore <= 5) {
        resultText = "Your score lies between 0-5 \n(your mental health appears to be in a good range.) \n KEEP IT UP :)";
      } else if (totalScore >= 6 && totalScore <= 15) {
        resultText = "Your score lies between 6-15 \n(You're experiencing some mild symptoms of distress.) \n Don't WORRY follow FUNFIT :)";
      } else if (totalScore >= 16 && totalScore <= 25) {
        resultText = "Your score lies between 16-25\n(You're experiencing moderate symptoms of distress.) \n We are with you just BELIEVE & you'll ACHIEVE good health :)";

      }else if (totalScore >= 26 && totalScore <= 35) {
        resultText = "Your score lies between 26-35\n(You're experiencing little more symptoms of distress.) \n Share your problems and get help, remember \n YOU'RE SPECIAL :)"; 
      }
      else {
        resultText = "Your score lies between 35+\n(Your symptoms indicate significant distress.)\n Please seek professional help immediately & remember that you're never ALONE \n stay HAPPY & HEALTHY :)";
      }
  
      resultDiv.innerText = resultText;
    });
  });
  