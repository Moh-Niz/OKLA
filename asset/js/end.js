let finalScore = localStorage.getItem('finalScore');
let review = document.getElementById('scoreReview');
let finalMessage = document.querySelector('.finalMessage');
let retryBtn = document.querySelector('#retryBtn');

// convert score from string to integer
score = parseInt(finalScore);

// show result based on user's score
const scoreDisplay = () => {
    switch (score) {
        case 40:
            review.textContent = 'Awesome!';
            rating = document.querySelector('.first').classList.remove('hide');
            finalMessage.textContent = `You scored ${finalScore} points.`;
            break;

        case 30:
            review.textContent = 'Almost there!';
            rating = document.querySelector('.second').classList.remove('hide');
            finalMessage.textContent = `You scored ${finalScore} points.`;
            break;

        case 20:
            review.textContent = 'Better luck!';
            rating = document.querySelector('.third').classList.remove('hide');
            finalMessage.textContent = `You scored ${finalScore} points.`;
            break;

        case 10:
            review.textContent = 'Really...';
            rating = document.querySelector('.last').classList.remove('hide');
            finalMessage.textContent = `You scored ${finalScore} points.`;
            break;

         default:
            review.textContent = 'Really...';
            rating = document.querySelector('.last').classList.remove('hide');
            finalMessage.textContent = `You scored ${finalScore} points.`;
            break;


    }

}
scoreDisplay()

// clear local storage and take user to homepage 
const retry = () => {
    localStorage.clear();
    return window.location.href = "index.html";
}

retryBtn.addEventListener('click', retry);

//Email validation
const form = document.querySelector("form"),
userInput = form.querySelector(".emailscoreTxtbx"),
btn = document.querySelector(".emailscoreBtn"),
feedback = form.querySelector(".text");

function disable_btn_txtbx(){
    btn.disabled = true;
    userInput.disabled = true;
    userInput.value ="";
    userInput.placeholder = "email valid, score sent";
}

form.addEventListener("submit",(e)=>{
    e.preventDefault(); // prevent form from submiting
    let regexpattern = /^[^ ]+\.[a-z]{2,3}$/; //regular expression definition
    form.classList.add("error");
    form.classList.remove("valid");
    if(userInput.value == ""){
        feedback.innerText = "email cannot be blank";
    } else if(!userInput.value.match(regexpattern)){
        feedback.innerText = "please enter a valid email";
    } else {
        form.classList.replace("error","valid");
        //feedback.innerText = "email valid, score sent";
        disable_btn_txtbx();
    }
})



