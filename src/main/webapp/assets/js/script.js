let boardSize = 3; // ขนาดเริ่มต้นของกระดานเล่น
let currentPlayer = 'X';
let gameBoard = [];

function startGame() {
    boardSize = parseInt(document.getElementById('board-size').value);
    document.getElementById('btnSave').style.display = 'none'
    initializeBoard();
    createBoard();
}

function initializeBoard() {
    document.getElementById('message_result').innerHTML = ''
    gameBoard = Array.from({ length: boardSize }, () => Array(boardSize).fill(''));
    currentPlayer = 'X';
}

function createBoard() {
    const gameBoardElement = document.getElementById('game-board');
    gameBoardElement.innerHTML = '';

    const cellSize = 100 / boardSize;

    gameBoardElement.style.gridTemplateColumns = `repeat(${boardSize}, ${cellSize}%)`;

    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', handleCellClick);
            gameBoardElement.appendChild(cell);
        }
    }
}

function handleCellClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin(row, col)) {
            // document.getElementById('message_result').innerHTML = `Player ${currentPlayer} wins!`
            alert(`Player ${currentPlayer} wins!`);
            document.getElementById('the_winner').value = `Player ${currentPlayer} wins!`
            document.getElementById('btnSave').style.display = 'block'
            disableCell()

            // startGame();
        } else if (isBoardFull()) {
            // document.getElementById('message_result').innerHTML = "It's a draw!";
            document.getElementById('the_winner').value = "It's a draw!"
            document.getElementById('type').value = 'draw'
            document.getElementById('btnSave').style.display = 'block'
            disableCell()
            alert("It's a draw!");
            // startGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

    }
}

function isBoardFull() {
    return gameBoard.every(row => row.every(cell => cell !== ''));
}

function resetGame() {
    // รีเซ็ตข้อมูลในกระดานเล่น
    document.getElementById('btnSave').style.display = 'none'
    initializeBoard();
    // ลบข้อมูลที่แสดงผลในกระดานเล่น
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = "auto";
        cell.style.backgroundColor = "#ffffff";
    });
}

function disableCell(){
    initializeBoard();
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.pointerEvents = "none";
        cell.style.backgroundColor = "#ccc";
    });
}


startGame();


function checkWin(row, col) {
    const currentPlayerSymbol = gameBoard[row][col];

    // Check horizontally
    let horizontalWin = true;
    for (let i = 0; i < boardSize; i++) {
        if (gameBoard[row][i] !== currentPlayerSymbol) {
            horizontalWin = false;
            break;
        }
    }

    // Check vertically
    let verticalWin = true;
    for (let i = 0; i < boardSize; i++) {
        if (gameBoard[i][col] !== currentPlayerSymbol) {
            verticalWin = false;
            break;
        }
    }

    // Check diagonals
    let diagonal1Win = false;
    let diagonal2Win = false;

    if (row === col) {
        diagonal1Win = true;
        for (let i = 0; i < boardSize; i++) {
            if (gameBoard[i][i] !== currentPlayerSymbol) {
                diagonal1Win = false;
                break;
            }
        }
    }

    if (row + col === boardSize - 1) {
        diagonal2Win = true;
        for (let i = 0; i < boardSize; i++) {
            if (gameBoard[i][boardSize - 1 - i] !== currentPlayerSymbol) {
                diagonal2Win = false;
                break;
            }
        }
    }
    if (horizontalWin){
        document.getElementById('type').value = 'horizontal'
    }else if (verticalWin){
        document.getElementById('type').value = 'vertical'
    }else if(!diagonal1Win || !diagonal2Win){
        document.getElementById('type').value = 'diagonal'
    }

    return horizontalWin || verticalWin || diagonal1Win || diagonal2Win;
}
