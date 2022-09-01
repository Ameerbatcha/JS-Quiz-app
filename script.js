function displayname() {
    let name = document.getElementById('nametext');
    let named = name.value;
    sessionStorage.setItem("username", named);
    let nameshower = document.getElementById('nameshower');
    if (typeof name.value === "string" && name.value != "") {
        nameshower.innerHTML = "Hey " + name.value + " !";
    }
}


const myApp = [{
    category: "Pipes and Cisterns",
    quizWrap: [
        {
            question: "Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
            options: ["3 9/17 hours",
                "1 13/17 hours",
                "2 8/11 hours",
                "4 1/2 hours"],
            answer: 0,
        },
        {
            question: " Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long it will take to fill the tank?",
            options: ["10 mins",
                "12 mins",
                "15 mins",
                "20 mins",
            ],
            answer: 1,
        },

        {
            question: " Pipe A can fill a tank in 45 hrs and pipe B can fill it in 36 hrs. If both the pipes are opened in the empty tank. In how many hours will it be full?",
            options: ["10 hr",
                "20 hr",
                "15 hr",
                "28 hr"],
            answer: 2,
        },
        {
            question: " Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
            options: ["11 min. 45 sec",
                "12 min. 30 sec",
                " 14 min. 40 sec",
                "10 min. 20 sec",],
            answer: 2,
        },
        {
            question: " Pipe A can fill a tank in 5 hours, pipe B in 10 hours and pipe C in 30 hours. If all the pipes are open, in how many hours will the tank be filled?",
            options: ["2",
                "2.5",
                " 3.5",
                "3",],
            answer: 3,
        },
        {
            question: " Two pipes can fill a tank in 20 minutes and 30 minutes respectively. If both the pipes are opened simultaneously, then the tank will be filled in",
            options: ["10 minutes",
                "21 minutes",
                " 15 minutes",
                "25 minutes",],
            answer: 3,
        },
        {
            question: "  A tap fill a pot in two hours because of a hole to the pot, it took 2 1/3 hours. Calculate the time needed for hole to emptied the pot completely?",
            options: ["14",
                "12",
                "17",
                "19",],
            answer: 3,
        },
        {
            question: " A water tank is two-fifth full. Pipe A can fill a tank in 10 minutes and pipe B can empty in 6 minutes. If both the pipes are open, how long will it take to empty or fill the tank completely?",
            options: [" 6 min to empty",
                "7 min to full",
                " 6 min to full",
                " 7 min to empty",],
            answer: 0,
        },
        {
            question: " A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?",
            options: [" 16 hrs",
                "25 hrs",
                " 20 hrs",
                " 40 hrs",],
            answer: 3,
        },
        {
            question: " A cistern is normally filled in 8 hrs. but takes 2 hrs. longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?",
            options: [" 16 hrs",
                "40 hrs",
                "25 hrs",
                "20 hrs",],
            answer: 1,
        }]
}, {
    category: "Probability",
    quizWrap: [
        {
            question: "A problem is given to three students whose chances of solving it are 1/2, 1/3 and 1/4 respectively. What is the probability that the problem will be solved?",
            options: ["1/2",
                " 1/4",
                "3/4",
                " 7/12"],
            answer: 2,
        },
        {
            question: "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
            options: ["1/2",
                " 3/5",
                " 9/20",
                " 8/15",
            ],
            answer: 2,
        },

        {
            question: "A bag contains 4 white, 5 red and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red, is:",
            options: ["2/91",
                "1/22",
                "3/22",
                "2/77"],
            answer: 0,
        },
        {
            question: "Two cards are drawn at random from a pack of 52 cards.what is the probability that either both are black or both are queen?",
            options: ["52/221",
                "55/190",
                "55/221",
                "19/221",],
            answer: 2,
        },
        {
            question: "A bag contains 6 white and 4 black balls .2 balls are drawn at random. Find the probability that they are of same colour.",
            options: ["1/2",
                "7/15",
                "8/15",
                "1/9",],
            answer: 1,
        },
        {
            question: "In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?",
            options: ["2/7",
                "5/7",
                "1/5",
                "1/2",],
            answer: 0,
        },
        {
            question: " Two dice are tossed. The probability that the total score is a prime number is:",
            options: ["5/12",
                "1/6",
                "1/2",
                "7/9",],
            answer: 0,
        },
        {
            question: " A man and his wife appear in an interview for two vacancies in the same post. The probability of husband's selection is (1/7) and the probability of wife's selection is (1/5). What is the probability that only one of them is selected ?",
            options: ["2/7",
                "1/7",
                "3/4",
                "4/5",],
            answer: 0,
        },
        {
            question: "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
            options: ["7/21",
                "3/5",
                "8/21",
                "1/3",],
            answer: 3,
        },
        {
            question: "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",
            options: ["1/15",
                "1/221",
                "25/57",
                "35/256",],
            answer: 1,
        }]
}, {
    category: "Problems on Ages",
    quizWrap: [
        {
            question: "The present age of Aradhana and Aadrika is in the ratio 3:4. 5 years back, the ratio of their ages was 2:3. What is the present age of Aradhana?",
            options: ["22 years",
                "15 years",
                "20 years",
                "12 years"],
            answer: 3,
        },
        {
            question: "  If the total ages of Iqbal and Shikhar is 12 years more than the total age of Shikhar and Charu. Charu is how many years younger than Iqbal?",
            options: ["11 years",
                "15 years",
                "13 years",
                "None of the above",
            ],
            answer: 3,
        },

        {
            question: "A father is twice as old as his daughter. If 20 years ago, the age of the father was 10 times the age of the daughter, what is the present age of the father?",
            options: ["22 years",
                "40 years",
                "33 years",
                "45 years"],
            answer: 3,
        },
        {
            question: " Arun is 2 years older than Bharat who is twice as old as Charat. If the total of the ages of Arun, Bharat and Charat be 27, then how old is Bharat?",
            options: ["10 years",
                "12 years",
                "15 years",
                "13 years",],
            answer: 0,
        },
        {
            question: " The sum of the ages of a daughter and mother is 56 years; after four years the age of the mother will be three times that of the daughter. What is the age of the daughter and the mother, respectively?",
            options: ["12 years,41 years",
                "12 years,30 years",
                " 12 years,34 years",
                "12 years,44 years",],
            answer: 3,
        },
        {
            question: "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
            options: ["2 3/4 times",
                "2 1/2 times",
                " 2 times",
                "3 times",],
            answer: 2,
        },
        {
            question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
            options: ["4 years",
                "8 years",
                "10 years",
                "None of these",],
            answer: 0,
        },
        {
            question: "A father said to his son, 'I was as old as you are at the present at the time of your birth'. If the father's age is 38 years now, the son's age five years back was:",
            options: [" 14 years",
                "19 years",
                "33 years",
                "38 years",],
            answer: 0,
        },
        {
            question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
            options: ["7",
                "8",
                "9",
                "10",],
            answer: 3,
        },
        {
            question: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
            options: ["40",
                "27",
                "24",
                "cannot be determined",],
            answer: 2,
        }]
}, {
    category: "Profit And Loss",
    quizWrap: [
        {
            question: " By selling 45 lemons for Rs 40, a man loses 20%. How many should he sell for Rs 24 to gain 20% in the transaction?",
            options: ["16",
                "18",
                "20",
                "22"],
            answer: 1,
        },
        {
            question: " A trader mixes 26 kg of rice at Rs 20 per kg with 30 kg of rice of other variety at Rs 36 per kg and sells the mixture at Rs 30 per kg. His profit percent is: ",
            options: ["No profit no loss",
                "5%",
                "8%",
                "10%",
            ],
            answer: 1,
        },

        {
            question: "Arun purchased 30 kg of wheat at the rate of Rs 11.50 per kg and 20 kg of wheat at the rate of Rs 14.25 per kg. he mixed the two and sold the mixture. Approximately what price per kg should he sell the mixture to make 30% profit? ",
            options: ["14.80",
                "15.40",
                "15.60",
                "16.30"],
            answer: 3,
        },
        {
            question: "  Padam purchased 30 kg of rice at the rate of Rs 17.50 per kg and another 30 kg rice at a certain rate. He mixed the two and sold the entire quantity at the rate of Rs 18.60 per kg and made 20% overall profit. At what price per kg did he purchase the lot of another 30 kg rice?",
            options: ["12.50",
                "13.50",
                "15.50",
                "None of these",],
            answer: 1,
        },
        {
            question: " A trader mixes three varieties of groundnuts costing Rs 50, Rs 20 and Rs 30 per kg in the ratio 2: 4 : 3 in terms of weight, and sells the mixture at Rs 33 per kg. What percentage of profit does he make?",
            options: ["8%",
                "9%",
                "10%",
                "none of these",],
            answer: 2,
        },
        {
            question: "Two shopkeepers announce the same price of Rs 700 for a sewing machine. The first offers successive discounts of 30% and 6% while the second offers successive discounts of 20% and 16%. The shopkeeper that offers a better discount, charges ……… less than the other shopkeeper.",
            options: ["9.80",
                "16.80",
                "22.40",
                "36.40",],
            answer: 0,
        },
        {
            question: "  The marked price of a watch was Rs 720. A man bought the same for Rs. 550.80 after getting two successive discounts, the first being 10%. What was the second discount rate?",
            options: ["12%",
                "14%",
                "17%",
                "18%",],
            answer: 1,
        },
        {
            question: "A shopkeeper purchased 150 identical pieces of calculators at the rate of Rs 250 each. He spent an amount of Rs. 2500 on transport and packaging. He fixed the labeled price of each calculator at Rs 320. However, he decided to give a discount of 5% on the labeled price. What is the percentage profit earned by him?",
            options: ["14%",
                "15%",
                "25%",
                "16%",],
            answer: 0,
        },
        {
            question: "A trader marked the price of his commodity so as to include a profit of 25%. He allowed a discount of 16% on the marked price. His actual profit was: ",
            options: ["25%",
                "9%",
                "16%",
                "5%",],
            answer: 3,
        },
        {
            question: " The price of an article is raised by 30% and then two successive discounts of 10% each are allowed. Ultimately, the price of the article is:",
            options: [" decreased by 5.3%",
                "increased by 3%",
                "increased by 5.3%",
                "increased by 10%",],
            answer: 2,
        }]
}];

var quizHomebox = document.getElementById("container");
var quizBox = document.getElementById("qp_container");
let quizresultbox = document.getElementById("qr_container");
var qnextquestionbtn = document.getElementById("qp_next_qnbtn1");
var qdisplayresultbtn = document.getElementById("qp_next_qnbtn2");
var score = 0;
var attempt = 0;
let sec = 300;
var questionIndex;
var categoryIndex;
let hitDuplicate;
let myArray = [];
let randomNumber;
let watch;
const optionLayer = document.getElementById("qp_answer_holder");
let alreadyselected;
qnextquestionbtn.addEventListener("click", nextQuestion);
qdisplayresultbtn.addEventListener("click", quizresult);



//Main Quiz Function
function startgame() {

    createCategory();

}

function createCategory() {
    
   

    const categorylayer = document.getElementById("categorylayer");


    for (let i = 0; i < myApp.length; i++) {

        const categoryList = document.createElement("button");

        categoryList.innerHTML = myApp[i].category;
        categoryList.setAttribute("data-id", i);
        categoryList.setAttribute("onclick", "selectedCategory(this)");
        categorylayer.appendChild(categoryList);
    }

}

function selectedCategory(ele) {
    const categoryText = document.getElementById("qp_header_title");

    categoryIndex = ele.getAttribute("data-id");
    categoryText.innerHTML = myApp[categoryIndex].category;
    quizHomebox.classList.add("hide");
    quizBox.classList.remove("hide");

    for (i = 0; i < myApp.length; i++) {
        if (i == categoryIndex) {
            alreadyselected = i;
        }
    }

    startTimer();
    nextQuestion();


}

function startTimer() {
    let timer = document.getElementById("qp_timer");
    watch = setInterval(() => {
        sec--;
        if (sec < 10 && sec > 0)
            timer.innerHTML = "0" + sec;
        else if (sec <= 0) {
            timer.innerHTML = "00"
            timer.style.color = "red";
            timer.classList.add("red");
        }
        else
            timer.innerHTML = sec;
    }, 1000);

}




function nextQuestion() {

    generateRandomQuestion();
    hideNextQuestionbtn();

}

function quizresult() {
    quizresultbox.classList.remove("hide");
    quizBox.classList.add("hide");
    document.getElementById("qr_name").innerHTML = sessionStorage.getItem("username");
    document.getElementById("qr_topic").innerHTML = myApp[categoryIndex].category;
    document.getElementById("qr_time").innerHTML = 300 - sec +" seconds";
    document.getElementById("qr_questions").innerHTML = myApp[categoryIndex].quizWrap.length;
    document.getElementById("qr_attempt").innerHTML = attempt;
    document.getElementById("qr_correct").innerHTML = score;
    document.getElementById("qr_wrong").innerHTML = parseInt(attempt) - parseInt(score);
    const percentage = (score / myApp[categoryIndex].quizWrap.length) * 100;
    document.getElementById("qr_percentage").innerHTML = percentage.toFixed(2) + " %";
    let restart = document.getElementById("btnstartagain");
    restart.addEventListener("click", startagain);
    let gotohome = document.getElementById("btngotohome");
    gotohome.addEventListener("click", homeagain);

}

function startagain() {
    myArray = [];
    score = 0;
    scoreBoard();
    attempt = 0;
    qdisplayresultbtn.classList.add("hide");
    sec = 300;
    quizresultbox.classList.add("hide");
    clearselects();
    selectedCategory(categorylayer.children[alreadyselected]);
}

function homeagain() {
    myArray = [];
    score = 0;
    scoreBoard();
    attempt = 0;
    qdisplayresultbtn.classList.add("hide");
    sec = 300;
    quizHomebox.classList.remove("hide");
    quizresultbox.classList.add("hide");
    clearselects();
    while (categorylayer.firstChild) {
        categorylayer.removeChild(categorylayer.firstChild);
    };
    createCategory();

}

function generateRandomQuestion() {
    attemptboard();

    const randomNumber = Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
    hitDuplicate = 0;

    if (myArray.length == 0) {
        questionIndex = randomNumber;
    }

    else {
        for (let i = 0; i < myArray.length; i++) {
            if (randomNumber == myArray[i]) {
                hitDuplicate = 1;
            }
        }
        if (hitDuplicate == 1) {
            generateRandomQuestion();
            return;

        } else {
            questionIndex = randomNumber;
        }
    }
    myArray.push(randomNumber);
    console.log(myArray);


    while (optionLayer.children.length > 0) {
        let toremove = document.querySelector("[data-toremove='rem']");
        toremove.remove();
    }

    for (let i = 0; i < myApp[categoryIndex].quizWrap[randomNumber].options.length; i++) {

        const displayquestion = document.getElementById("qp_questions");
        const optionList = document.createElement("button");

        displayquestion.innerHTML = myApp[categoryIndex].quizWrap[randomNumber].question;
        optionList.innerHTML = myApp[categoryIndex].quizWrap[randomNumber].options[i];
        optionList.setAttribute("id", i);
        optionList.setAttribute("data-todisable", "dis");
        optionList.classList.add("animated");
        optionList.setAttribute("data-toremove", "rem");
        optionList.setAttribute("onclick", "checker(this)");
        optionLayer.appendChild(optionList);
    }


}

function checker(ele) {
    const id = ele.id;
    if (id == myApp[categoryIndex].quizWrap[questionIndex].answer) {
        ele.classList.add("correct");
        score++;
        scoreBoard();
    } else {
        ele.classList.add("wrong");
        for (let i = 0; i < optionLayer.children.length; i++) {
            if (optionLayer.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer) {
                optionLayer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    disableoption();
    showNextQuestionBtn();
    if (attempt == myApp[categoryIndex].quizWrap.length) {
        quizOver();
    }

}

function clearselects(){
    let correct = document.querySelectorAll(".correct");
    for(i=0;i<correct.length;i++){
        correct[i].classList.remove("correct");
    }
    let wrong = document.querySelectorAll(".wrong");
    for(i=0;i<wrong.length;i++){
        wrong[i].classList.remove("wrong");
    }
}


function scoreBoard() {
    let displayscore = document.getElementById("qp_scorecard2");
    displayscore.innerHTML = " " + score;
}

function attemptboard() {
    let displayattempt = document.getElementById("qp_qnno_holder1");
    let displaytotalqn = document.getElementById("qp_qnno_holder2");
    let questionno = attempt;
    displayattempt.innerHTML = ++questionno;
    displaytotalqn.innerHTML = myApp[categoryIndex].quizWrap.length;
}

function disableoption() {
    let todisable = document.querySelectorAll("[data-todisable='dis']");
    for (i = 0; i < myApp[categoryIndex].quizWrap[questionIndex].options.length; i++) {
        todisable[i].removeAttribute("onclick")
    }
}


function showNextQuestionBtn() {
    qnextquestionbtn.classList.remove("hide");
}

function hideNextQuestionbtn() {
    qnextquestionbtn.classList.add("hide");
}

function quizOver() {
    qdisplayresultbtn.classList.remove("hide");
    qnextquestionbtn.classList.add("hide");
    clearInterval(watch);
}

startgame();

