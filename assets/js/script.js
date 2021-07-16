
//Pedimos al usuario las veces que quiere jugar y el valor se lo asignamos a una variable
var cantidadVeces = parseInt(prompt("Ingrese la cantidad de veces que quiere jugar al Cachipún"));

//inicializamos la variable contador en cero
var cont=0;

//El juego se ejecutara solo si la cantidad de veces es mayor a contador
if(cantidadVeces > cont) {
    
    //le asignamos el valor de 1 a contador y lo que este dentro de este codigo se ejecutara las veces que diga el usuario
    for( cont = 1; cont <= cantidadVeces; cont ++) {
        
        var eleccion = prompt("Ingrese su jugada (piedra, papel o tijera)").toLowerCase();
        
        
        // numero random entre 1 y 3 y asignacion de valor de jugada
        //1 para piedra
        //2 para papel
        //3 para tijera
        function random() {
             var aleatorioJugadaPC = Math.ceil(Math.random()*3);
            
             if (aleatorioJugadaPC == 1) {
                aleatorioJugadaPC = "piedra";

             }else if (aleatorioJugadaPC == 2) {
                aleatorioJugadaPC ="papel";
   
             } else if (aleatorioJugadaPC == 3) {
                aleatorioJugadaPC = "tijera";

             } 
             //Le decimos al usuario que eligio laa computadora
             alert ("La computadora elige: " + aleatorioJugadaPC);
             
                    //Empezamos definiendo el empate
                    if (eleccion == aleatorioJugadaPC){
                        
                        alert("Tu eleccion: " + eleccion +" " +" La jugada del computador: "+ aleatorioJugadaPC+ " EMPATE!!! ")

                    }
                    //si el usuario elije piedra frente a papel
                     if (eleccion == "piedra" && aleatorioJugadaPC == "papel") {
                        alert("Tu eleccion: " + eleccion +" " +" La jugada del computador: "+ aleatorioJugadaPC+ " lo sentimos PIERDES!!! ")
                        
                    }
                    //si el usuario elije piedra frente a Tijera
                    if (eleccion == "piedra" && aleatorioJugadaPC == "tijera") {
                        alert("Tu eleccion: " + eleccion +" " +" La jugada del computador: "+ aleatorioJugadaPC+ " Felicitaciones GANAS")
                    }


                    //Si el usuario elije papel frente a piedra
                    if(eleccion == "papel" && aleatorioJugadaPC == "piedra") {
                        alert("Tu eleccion: " + eleccion +" " +" La jugada del computador: "+ aleatorioJugadaPC+ " Felicitaciones GANAS!!!!")
                    }
                    //Si el usuario elije papel frente a tijera
                    if(eleccion == "papel" && aleatorioJugadaPC == "tijera") {
                        alert("Tu eleccion: " + eleccion +" " +" La jugada del computador: "+ aleatorioJugadaPC+ " lo sentimos PIERDES!!!" )
                    }

                    //Si el usuario elije tijera frente a piedra
                    if (eleccion == "tijera" && aleatorioJugadaPC == "piedra") {
                        alert("Tu eleccion: " + eleccion +" " +" La jugada del computador: "+ aleatorioJugadaPC+ " lo sentimos PIERDES!!!" )
                    }
                    //Si el usuario elije tijera frente a papel
                    if (eleccion == "tijera" && aleatorioJugadaPC == "papel") {
                        alert("Tu eleccion: " + eleccion +" " +" La jugada del computador: "+ aleatorioJugadaPC+ " Felicitaciones GANAS!!!!" )
                    }
                    


        }
        
        //Ejecutamos la funcion random
        random();
      


    }
       

} 
//Mensaje de fin del juego
alert("Fin del juego")


