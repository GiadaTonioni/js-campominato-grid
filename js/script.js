//funzione quadretto
function createSquare(){
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

const grid = document.getElementById('grid');

for(let i = 0; i < 64; i++){
    let square = createSquare();
    console.log(square)
}