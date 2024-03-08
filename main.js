let nombre = prompt ("¡Ingrese su nombre aqui!")

let Monstera = 5000;
let Ficus = 3500;
let Filodendro = 4300;
let Calateha = 2400;

alert ("Bienvenido " + nombre + " " );
let envio = 1600
let Direccion = prompt("Hacemos envios a todo el pais con un coste de $1600 por envio. Ingrese su direccion: ( Ejemplo: Nemesio Gonzalez  XX, Cordoba)");

let pedir = prompt("Ya sabes que planta es la que necesitas en tu hogar? ingrese Si o NO ");

if((pedir === "no") || (pedir === "No") || (pedir === "NO") || (pedir === "nO")){
    alert("Esperamos que vuelva pronto, estamos trabajando para ampliar la seleccion de plantas")
     
} else {
    let orden = prompt ("Elija una planta de nuestra selecion. Monstera, Ficus, Filodendro o Calathea.");

switch(orden){
    case "Monstera" :
        let totalMonstera = Monstera + envio;
        alert ("Gracias por su pedido ! Su cuenta es de: Monstera $ " + Monstera + " + el envio $ " + envio + " . El costo total es de: $" + totalMonstera);
        agradecer();
        break;
    

    case "Ficus" :
        let totalFicus = Ficus + envio;
        alert ("Gracias por su pedido. Su total es de: $ " + Ficus+ " + el envio $ " + envio + " . El costo total es de: $" +totalFicus);
        agradecer();
        break;
            

    case "Filodendro" :
        let totalFilodendro = Filodendro + envio;
        alert ("Gracias por su pedido. Su total es de: $ " + Filodendro+ " + el envio $ " + envio + " . El costo total es de: $" + totalFilodendro);
        agradecer();
        break;
            

    case "Calateha" :
        let totalCalateha = Calateha + envio;
        alert ("Gracias por su pedido. Su total es de: $ " + Calateha + " + el envio $ " + envio + " . El costo total es de: $" + totalCalateha);
        agradecer();
        break;
                

}
}

function agradecer(){
    alert(nombre +", ya hemos procesado su pedido para la direccion " + Direccion + " . Pronto sera contactado, Saludos :) ")
}

