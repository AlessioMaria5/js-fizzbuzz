const interactive = document.getElementById('btn');
const numPrint = document.getElementById('numPrint');

    interactive.addEventListener ('click',
    function() {

        let ciao = parseInt((numPrint.value));

        const cont_in = document.getElementById('container');

    for (let i=1; i <=ciao; i++) {
        
        if (i%15 == 0) {
            cont_in.innerHTML += ('<div class="box" style="background-color:#F53364">' + 'fizzbuzz' + '</div>');
            
        }

        else if (i%5 == 0) {
            cont_in.innerHTML += ('<div class="box" style="background-color:#FFCA5D">' + 'Buzz' + '</div>');
           
        }

        else if (i%3 == 0) {
            cont_in.innerHTML += ('<div class="box" style="background-color:#00D396">' + 'Fizz' + '</div>');
            
        }


        else {
            cont_in.innerHTML += ('<div class="box" style="background-color:#007EA8">' + i + '</div>');
           
        }
        console.log(i);
    }
        
    });

    const containerPlus = document.getElementById('container-plus');
    const NuovoElemento = document.createElement('section');
    
    
    
    containerPlus.append(NuovoElemento);
    NuovoElemento.append(`That is${NuovoElemento}`);

