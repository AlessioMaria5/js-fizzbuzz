

// ul.append(li);

const cont_in = document.getElementById('container');

    for (let i=1; i<=100; i++) {
        
        if (i%15 == 0) {
            cont_in.innerHTML += ('<div class="box" style="background-color:#F53364">' + 'fizzbuzz' + '</div>');
            console.log('i');
        }

        else if (i%5 == 0) {
            cont_in.innerHTML += ('<div class="box" style="background-color:#FFCA5D">' + 'Buzz' + '</div>');
            console.log('i');
        }

        else if (i%3 == 0) {
            cont_in.innerHTML += ('<div class="box" style="background-color:#00D396">' + 'Fizz' + '</div>');
            console.log('i');
        }


        else {
            cont_in.innerHTML += ('<div class="box" style="background-color:#007EA8">' + i + '</div>');
            console.log('i');
        }
    }


const containerPlus = document.getElementById('container-plus');
const NuovoElemento = document.createElement('section');



containerPlus.append(NuovoElemento);
const string = NuovoElemento.append('That is' + cont_in);







