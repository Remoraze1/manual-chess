let selectedPiece = null;
board.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'TD') {
        if (selectedPiece) {
            // Move piece to the selected square
            target.innerHTML = selectedPiece.innerHTML;
            selectedPiece.innerHTML = '';
            selectedPiece = null;
        } else {
            // Select a piece to move
            if (target.innerHTML !== '') {
                selectedPiece = target;
            }
        }
    }
});
