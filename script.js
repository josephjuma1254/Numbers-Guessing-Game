//Numbers Game Logic  

// Intialize Variables and getting elements
let score = 0
let randomNumber = generateRandomNumber()
let userNumber;
let gameCard = document.getElementById('game-card')
let userInput = document.getElementById('guess')
let resultText = document.getElementById('result')
let scoreText = document.getElementById('scores')


function checkNumber() {

    // Clear any existing background effects
    document.body.className = '';

    //Getting the input value
    userNumber = userInput.valueAsNumber 
    console.log(userNumber)

    if (!userNumber && userNumber !== 0) {
        resultText.innerHTML = 'Choose a valid number'
        document.body.classList.add('invalid-background');
        displayActionButtons()
        return;
    } 
    
    

    displayActionButtons()
    if (userNumber == randomNumber) {
        //The user has earned a point
        score += 1
        scoreText.innerHTML = score
        resultText.innerHTML = `Correct, the number is ${randomNumber}`
        gameCard.style.display = 'none'
        document.body.classList.add('correct-background');
        
    } else if (userNumber !== randomNumber) {
        if (userNumber < randomNumber) {
            resultText.innerHTML = `Wrong, go higher`
            document.body.classList.add('wrong-background');

        } else {
            resultText.innerHTML = `Wrong, go lower`
            document.body.classList.add('wrong-background');
        }
    } 
}

function displayActionButtons() {
    let actionSection = document.getElementById('action-section')
    actionSection.style.display = 'flex'
}


function gameAction (type = 'restart') {
    if (type == 'restart') {
        gameCard.style.display = 'block'
        randomNumber = generateRandomNumber()
        document.body.className = '';
        resultText.innerHTML = 'Make your first guess!'
    } else if (type === 'reset') {
        gameCard.style.display = 'block'
        randomNumber = generateRandomNumber()
        score = 0
        scoreText.innerHTML = score
        resultText.innerHTML = 'Make your first guess!'
        userInput.value = "";
        document.body.className = '';
    }
    
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
}
