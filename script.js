// Phishing Awareness Training - Interactive Quiz Module

const questions = [
  {
    subject: "URGENT: Verify Your HR Portal Account Now",
    body: "Dear Employee, Your HR portal account will be suspended within 24 hours due to inactivity. Click here immediately to verify your credentials: http://hr-update-security-portal.com/login",
    type: "phishing",
    explanation: "This is a phishing attempt. It uses high-urgency language, a suspicious domain name, and requests sensitive password details."
  },
  {
    subject: "Updated IT Maintenance Schedule for Saturday",
    body: "Hello Team, Please be aware that our internal network services will undergo scheduled maintenance this Saturday from 2:00 AM to 4:00 AM. No action is required on your part.",
    type: "legitimate",
    explanation: "This is a legitimate internal email. It is purely informational and asks for no passwords, logins, or personal data."
  },
  {
    subject: "Action Required: Overdue Invoice Payment",
    body: "Attached is invoice #98421. Please review and process payment today using the provided banking portal link: http://secure-pay-invoice-check.net",
    type: "phishing",
    explanation: "This is a phishing attempt. Malicious links claiming to be attached or linked invoices are common vector attacks designed to steal financial credentials."
  }
];

let currentIndex = 0;

function loadQuestion() {
  const q = questions[currentIndex];
  const questionContainer = document.getElementById("question") || document.querySelector(".scenario-box");
  const resultDiv = document.getElementById("result");

  if (questionContainer) {
    questionContainer.innerHTML = "<p><strong>Subject:</strong> " + q.subject + "</p><p><strong>Email Content:</strong> " + q.body + "</p>";
  }

  if (resultDiv) {
    resultDiv.innerHTML = "";
  }
}

function checkAnswer(userChoice) {
  const q = questions[currentIndex];
  const resultDiv = document.getElementById("result");

  if (resultDiv) {
    if (userChoice === q.type) {
      resultDiv.innerHTML = '<div style="color: #2e7d32; padding: 10px; background-color: #e8f5e9; border-radius: 4px; margin-top: 10px;"><strong>Correct!</strong> ' + q.explanation + '</div>';
    } else {
      resultDiv.innerHTML = '<div style="color: #c62828; padding: 10px; background-color: #ffebee; border-radius: 4px; margin-top: 10px;"><strong>Incorrect.</strong> ' + q.explanation + '</div>';
    }
  }
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % questions.length;
  loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();

  const phishingBtn = document.getElementById("phishing-btn") || document.querySelectorAll("button")[0];
  const legitBtn = document.getElementById("legit-btn") || document.querySelectorAll("button")[1];
  const nextBtn = document.getElementById("next-btn") || document.querySelectorAll("button")[2];

  if (phishingBtn) {
    phishingBtn.addEventListener("click", () => checkAnswer("phishing"));
  }
  if (legitBtn) {
    legitBtn.addEventListener("click", () => checkAnswer("legitimate"));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", nextQuestion);
  }
});