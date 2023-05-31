//funzione quadretto
function createSquare(){
    let square = document.createElement('div');

    square.classList.add('square');
    return square;
}


const grid = document.getElementById('grid');

//aggiungo quadretti
for(let i = 0; i < 100; i++){
    let square = createSquare();

    square.innerText = i + 1;

    square.addEventListener('click', function(){    //uso this sui quadretti
        //tolgo e aggiungo con toggle
        this.classList.toggle('clicked')
        console.log(this.innerText)

    });

    //rendo visibili quadretti
    grid.append(square);
}



