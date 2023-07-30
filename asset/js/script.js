let userName = document.getElementsByClassName("user-name");


// Arrow on pages implementation
let index = 1;
showSection(index);

// prev/next control
function controlPage(n) {
  showSection(index += n);
// prompts user for name using JS prompt method. Returns a default message if no input is entered.
  let user = prompt("What is your name?")
  if(user != null && user !== ''){
    userName = `Hello ${user}, pick a category to start `;
  }
  else {
    userName = 'Hello there!, pick a category to start'
  }
  document.querySelector(".user-name").textContent = userName;
}

// shows current section on page
function currentSection(n) {
  showSection(index = n);
}

function showSection(n) {
  let i;
  let section = document.getElementsByClassName("home");
  if (n > section.length) {index = 1}
  if (n < 1) {index = section.length}
  for (i = 0; i < section.length; i++) {
    section[i].style.display = "none";
  }
 section[index-1].style.display = " block";
}


//dropdown implementation

let dropdown = document.querySelector('.dropdown');

dropdown.onclick =function(){
  dropdown.classList.toggle('active');
}

//show text after selection
function show(tc){
  document.querySelector('.text_content').value = tc
}


//  Quiz Data

const quizData = {
  "Category 1": [
    {
      question: "How many students are in the UCD 2023 cohort?",
      options: ["12", "16", "18", "24"],
      correctAnswer: "18",
    },
    {
      question: "What is Moh's Surname",
      options: ["Akano", "July", "Bolt", "Muhammed"],
      correctAnswer: "Akano",
    },
    {
      question: "Who created the students whatsapp group",
      options: ["Ian", "Ricky", "Kevin", "Moh"],
      correctAnswer: "Ian",
  
  },
  {
    question: ' When was the students Whatsapp group created?',
    options: ['12/04/2023', '11/04/2023', '13/04/2023', '14/04/2023'],
    correctAnswer: '11/04/2023',
    
},
  ],
  "Category 2": [
    {
      question: "What is Yoni's surname?",
      options: ["Love", "Lavi", "Levi", "Lovi"],
      correctAnswer: "Lavi",
    },
    {
      question: "What year did Yoni start working for UCD PA?",
      options: ["2022", "2021", "2020", "2023"],
      correctAnswer: "2022",
    },
    {
      question: 'Which course have Yoni not covered?',
      options: ['Javascript', 'HTML','CSS','SQL' ],
      correctAnswer: 'SQL',
      
  },
  {
    question: "What field is Yoni specialized in?",
    options: ['IT', 'Energy', 'Fishery', 'Baking'],
    correctAnswer: 'IT',
   
},
  ],
 
};
// function to start quiz depending on the category

function startQuiz(category) {
  const selectedCategory = quizData[category];
  localStorage.setItem('quizData', JSON.stringify(selectedCategory));
  window.location.href = 'quiz.html'; // Redirect to the quiz page
  setTime = Math.floor(Date.now()/1000) + 30;  // set count down to 30 secs from now
  localStorage.setItem('setTime', setTime); //save set time to local storage
  countdown();// call countdown
}
