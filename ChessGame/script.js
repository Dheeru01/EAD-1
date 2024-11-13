const chessboard = document.getElementById('chessboard');
const resetBtn = document.getElementById('resetBtn');

let pieces = [
    'rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook',
    'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'
];

// Initialize the chessboard
function initBoard() {
    chessboard.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.classList.add('square', (i + j) % 2 === 0 ? 'white' : 'black');

            // Place pieces on the board
            if (i === 0) {
                square.appendChild(createPiece('black', pieces[j]));
            } else if (i === 1) {
                square.appendChild(createPiece('black', 'pawn'));
            } else if (i === 6) {
                square.appendChild(createPiece('white', 'pawn'));
            } else if (i === 7) {
                square.appendChild(createPiece('white', pieces[j]));
            }

            chessboard.appendChild(square);
        }
    }
}

// Create a piece element
function createPiece(color, type) {
    const piece = document.createElement('div');
    piece.classList.add('piece', color);
    piece.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/${color === 'white' ? '0/0f' : '6/60'}/Chess_${type.charAt(0).toUpperCase() + type.slice(1)}t60.svg')`;
    return piece;
}

// Reset the game
resetBtn.addEventListener('click', initBoard);

// Initialize the board on load
window.onload = initBoard;
