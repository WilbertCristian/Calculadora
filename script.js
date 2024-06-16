
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Definir la función a calcular según el botón presionado.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //Si la salida tiene '%', reemplácela con '/100' antes de evaluar.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //Si se hace clic en el botón DEL, elimina el último carácter de la salida.
    output = output.toString().slice(0, -1);
  } else {
    //Si la salida está vacía y el botón tiene caracteres especiales, regresa
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Agregar detector de eventos a los botones, llamar a calcular() al hacer clic.
buttons.forEach((button) => {
  // El oyente que hace clic en el botón llama a calcular() con el valor del conjunto de datos como argumento.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


/*
//Definir la función a calcular según el botón presionado.
const calculate = ( btnValue ) => {  
    display.focus( );
    if ( btnValue === "=" && salida! == "" ) {  
      //Si la salida tiene '%', reemplácela con '/100' antes de evaluar.
      salida = eval ( salida. reemplazar ( " %" , "/100" ) ;
    } si no ( btnValue === "AC" ) {    
      salida = "" ;
    } si no ( btnValue === "DEL" ) {    
      //Si se hace clic en el botón DEL, elimina el último carácter de la salida.
      salida = salida. Encadenar ( ) . segmento ( 0 , -1 ) ;
    } demás {  
      //Si la salida está vacía y el botón tiene caracteres especiales, regresa
      if ( salida === "" && caracteres especiales. Incluye ( btnValue ) ) return ;  
      salida += btnValue;
    }
    mostrar. valor = salida;
  } ;
  //Agregar detector de eventos a los botones, llamar a calcular() al hacer clic.
  botones. para cada ( ( botón ) => {  
    // El oyente que hace clic en el botón llama a calcular() con el valor del conjunto de datos como argumento.
    botón. addEventListener ( "hacer clic" , ( e ) => calcular ( e. destino . conjunto de datos . valor ) ) ;  
  } ) ; */