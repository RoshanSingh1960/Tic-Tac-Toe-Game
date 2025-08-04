// Select elements
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('game-status');
const resetButton = document.getElementById('reset-button');

// Audio
let x_turn = new Audio("x.mp3");
let o_turn = new Audio("o.mp3");
let won = new Audio("won.wav");
let draw = new Audio("draw.wav");

// Game variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Winning combinations
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

// Display current player turn
function displayCurrentPlayer() {
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    if (currentPlayer === 'X') {
        x_turn.play();
    } else {
        o_turn.play();
    }
}

// Display game result
function displayResult(message) {
    statusDisplay.textContent = message;
}

// Handle cell click
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedIndex] !== '' || !gameActive) {
        return;
    }

    updateCell(clickedCell, clickedIndex);
    checkResult();
}

// Update cell with current player's mark
function updateCell(cell, index) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('disabled');
    if (currentPlayer === 'X') {
        cell.classList.add('x');
    } else {
        cell.classList.add('o');
    }
}

// Check for win or tie
function checkResult() {
    let roundWon = false;
    let winningCombo = [];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            winningCombo = [a, b, c];
            break;
        }
    }

    if (roundWon) {
        displayResult(`Player ${currentPlayer} wins!`);
        won.play();
        document.getElementById('win-gif').style.display = 'block';
        winningCombo.forEach(index => {
            cells[index].classList.add('flash');
        });
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        displayResult("It's a tie!");
        draw.play();
        gameActive = false;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayCurrentPlayer();
}

// Reset the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('disabled', 'flash', 'x', 'o');
    });
    document.getElementById('win-gif').style.display = 'none';
    displayCurrentPlayer();
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

// Initialize display
displayCurrentPlayer();
