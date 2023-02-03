var questionsArr = [
    {question: 'The sky is blue',
     answer: true},
    {question: 'Grass is green',
    answer: true},
    {question: 'The Beatles are from Italy',
     answer: false},
    {question: 'CSS stands for cascading stylish shrimp',
     answer: false},
    {question: 'Kermit the Frog is a frog',
     answer: true}    
]

var numCorrect=0

function runQuiz (){
    for (var i=0; i<questionsArr.length; i++){
        if(confirm(questionsArr[i].question)===questionsArr[i].answer){
            numCorrect++
        }
    }
    var quizScore = Math.round ((numCorrect/questionsArr.length)*100)

    alert ("You scored" + quizScore + "%")
    numCorrect=0
}