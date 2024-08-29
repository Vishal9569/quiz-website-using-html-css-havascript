const box = document.querySelector(".box");
const QuestionBox = document.querySelector(".ques-box")
const choice = document.querySelector(".choice");
//const QuestionBox = document.getElementsByClassName("box"); //  this  code give html collection and we access by using index based like [0]  // but we use queryslector this only element than code work without aceese index //
const btn = document.getElementById('submit')
const score = document.querySelector(".score-card");
let scorenum = 0;





const oopsQuestions = [
    {
        question: "Which of the following is not a pillar of OOP?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
        correctAnswer: "Compilation"
    },
    {
        question: "Which concept of OOP is illustrated by the ability to use a single function name for different types of arguments?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        correctAnswer: "Polymorphism"
    },



    {
        question: "Which of the following is true about abstract classes?",
        options: [
            "They cannot have any methods",
            "They must have at least one abstract method",
            "They can be instantiated",
            "They cannot have constructors"
        ],
        correctAnswer: "They must have at least one abstract method"
    },
    {
        question: "Which OOP principle is being demonstrated when a subclass redefines a method of its superclass?",
        options: ["Abstraction", "Inheritance", "Encapsulation", "Polymorphism"],
        correctAnswer: "Polymorphism"
    },

    {
        question: "Which of the following is an example of polymorphism?",
        options: [
            "A class with both private and public members",
            "A function with multiple parameters",
            "A method that behaves differently in a subclass",
            "A class with multiple constructors"
        ],
        correctAnswer: "A method that behaves differently in a subclass"
    },

    {
        question: "Which OOP principle ensures that 'only essential information is displayed to the user and the rest is hidden'?",
        options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
        correctAnswer: "Abstraction"
    },

    {
        question: "In OOP, which of the following keywords is used to inherit a class in C++?",
        options: ["extends", "inherits", "implements", "public"],
        correctAnswer: "public"
    },
    {
        question: "What does the keyword 'super' refer to in a subclass?",
        options: [
            "The child class itself",
            "The current object of the class",
            "The parent class constructor",
            "A method in the child class"
        ],
        correctAnswer: "The parent class constructor"
    },
    {
        question: "Which concept allows a derived class to be treated as if it were a base class?",
        options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
        correctAnswer: "Polymorphism"
    },


    {
        question: "Which of the following is an example of runtime polymorphism?",
        options: ["Function overloading", "Operator overloading", "Method overriding", "Constructor overloading"],
        correctAnswer: "Method overriding"
    },

];


// make a arrow function to give data // 
let index = 0;
const showQues = () => {
    const questbasesIndex = oopsQuestions[index];
    QuestionBox.textContent = questbasesIndex.question;

    // for erase the choies and aapperase new choices //
    choice.innerHTML = "";
    for (let i = 0; i < questbasesIndex.options.length; i++) {
        const currentChoies = questbasesIndex.options[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoies;
        choice.appendChild(choiceDiv);


        // add select background color remove or add //

        choiceDiv.addEventListener("click", () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }


}

/*
The issue lies in the way you're selecting the user's choice. In the checkAns function, you're trying to use the .choies.selected selector, but the selected class is being applied to a div inside .choies. So the correct selector should be .choies > div.selected.  */
const checkAns = () => {
    const selectChoice = document.querySelector('.choice > div.selected');


    if (selectChoice) {  // Check if a choice is selected
        if (selectChoice.textContent === oopsQuestions[index].correctAnswer) {
            alert("Correct answer!");
            scorenum++;
        } else {
            alert("Wrong answer!");
        }
    } else {
        alert("Please select an option!");
    }
}

// fucntion to store point //

const totalScore = () => {

    box.innerHTML = "";
    score.innerHTML = `you scored ${scorenum} out of ${oopsQuestions.length}`;
    box.appendChild(score);
}


showQues();

btn.addEventListener("click", () => {
    checkAns();

    if (index < oopsQuestions.length - 1) {
        index++;
        showQues();
    }
    else {
        console.log("Quiz completed !");


        totalScore();
    }
});


