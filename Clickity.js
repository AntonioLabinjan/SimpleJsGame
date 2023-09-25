let score = 0;
let timeLeft = 30;
let gameStarted = false;

const square = document.getElementById("square");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start-button");

function startGame() {
    gameStarted = true;
    startButton.disabled = true;

    // Function to move the square to a random position
    function moveSquare() {
        const maxX = 150; // Maximum X-coordinate for the square
        const maxY = 150; // Maximum Y-coordinate for the square

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        square.style.left = `${randomX}px`;
        square.style.top = `${randomY}px`;
    }

    // Function to handle square click
    function handleSquareClick() {
        if (gameStarted) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            moveSquare();
        }
    }

    square.addEventListener("click", handleSquareClick);

    // Timer function
    function countdown() {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Time left: ${timeLeft}`;
            setTimeout(countdown, 1000);
        } else {
            gameStarted = false;
            startButton.disabled = false;
            alert(`Game over! Your score is ${score}`);
            score = 0;
            scoreDisplay.textContent = `Score: ${score}`;
            timeLeft = 30;
            timerDisplay.textContent = `Time left: ${timeLeft}`;
        }
    }

    countdown();
}

startButton.addEventListener("click", startGame);
