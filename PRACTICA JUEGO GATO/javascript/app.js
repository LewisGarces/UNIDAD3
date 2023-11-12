let signo = '';

$(document).ready(function(){
    let turno = 0;
    $("img").click(function(){
        let idDeImagen = $(this).attr('id');
               
        switch (turno) {
            case 0:
                $(`#${idDeImagen}`).attr("src","./imagenes/O.png");
                turno=1;
                signo = 'O';
                break;
            case 1:
                $(`#${idDeImagen}`).attr("src","./imagenes/X.png");
                turno=0;
                signo = 'X'
                break;
            default:
                break;
        }
    });

    let contenedor = document.querySelector('.contenedorMayor'); //Obteniendo el contenedor de mi gato en una variable.

    let celdasGato = ['','','', //Creando un simulador de celdas.
                      '','','',
                      '','',''];
    const compararGano = (array) => {  //Creando una funcion para comparar si gano 
        let contadorX=0;
        let contadorO=0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == 'X') {
                contadorX++;
            }
            if (array[i] == 'O') {
                contadorO++;
            }
        }
        if (contadorX == 3 || contadorO == 3) {
            alert(`Gano ${signo}`);
        }
    }

    contenedor.addEventListener('click',(e) => {  //Dando todo el evento click a mi comtenedor 
        for (let i = 0; i < celdasGato.length; i++) { //Recorriendo mi arreglo de celdas de gatos 
            if (e.target.id == `img_${i+1}`) {
                celdasGato[i] = signo;
                compararGano([celdasGato[0],celdasGato[1],celdasGato[2]]);
                compararGano([celdasGato[3],celdasGato[4],celdasGato[5]]);
                compararGano([celdasGato[6],celdasGato[7],celdasGato[8]]);

                compararGano([celdasGato[0],celdasGato[3],celdasGato[6]]);
                compararGano([celdasGato[1],celdasGato[4],celdasGato[7]]);
                compararGano([celdasGato[2],celdasGato[5],celdasGato[8]]);

                compararGano([celdasGato[0],celdasGato[4],celdasGato[8]]);
                compararGano([celdasGato[2],celdasGato[4],celdasGato[6]]);
            }
        }
        console.log(celdasGato);
    });
 });