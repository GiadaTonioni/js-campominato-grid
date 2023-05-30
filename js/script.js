//funzione quadretto
function createSquare(){
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

//griglia dal dom
const grid = document.getElementById('grid');

//aggiungo quadretti
for(let i = 0; i < 100; i++){
    let square = createSquare();
    console.log(square);

    square.innerText = i + 1;

    square.addEventListener('click', function(){    //creo o tolgo con this
        this
    })

    //rendo visibili quadrati
    grid.append(square);
}