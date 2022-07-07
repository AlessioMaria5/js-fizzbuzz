const interactive = document.getElementById('btn');
const numPrint = document.getElementById('numPrint');

    interactive.addEventListener ('click',
    function() {

        let ciao = parseInt((numPrint.value));

        const cont_in = document.getElementById('container');

    for (let i=1; i <=ciao; i++) {
        
        if (i%15 == 0) {
            cont_in.innerHTML += ('<div class="box box-fizzbuzz">' + 'fizzbuzz' + '</div>');     
        }

        else if (i%5 == 0) {
            cont_in.innerHTML += ('<div class="box box-buzz">' + 'Buzz' + '</div>');
        }

        else if (i%3 == 0) {
            cont_in.innerHTML += ('<div class="box box-fizz">' + 'Fizz' + '</div>');
        }

        else {
            cont_in.innerHTML += ('<div class="box box-n">' + i + '</div>');
        }
        console.log(i);
    }

    });

    const containerPlus = document.getElementById('container-plus');

    let divBox = document.createElement('div');
    containerPlus.append(divBox);
    divBox.innerHTML += ('<p class= "box-n" > Questo è un Numero </p>');
    divBox.innerHTML += ('<p class= "box-fizz" > Questo è un FIZZ </p>');
    divBox.innerHTML += ('<p class= "box-buzz" > Questo è un BUZZ </p>'); 
    divBox.innerHTML += ('<p class= "box-fizzbuzz" > Questo è un FIZZBUZZ </p>'); 
    

