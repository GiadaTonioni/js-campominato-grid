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

    square.addEventListener('click', function(){    //uso this sui quadretti
        console.log(this)
        //tolgo e aggiungo con toggle
        this.classList.toggle('clicked')
    });

    //rendo visibili quadrati
    grid.append(square);
}