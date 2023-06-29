//Variables
const calculadora = document.getElementById('calcu');
const reusltado = document.getElementById('resultado');

//eventos
calculadora.addEventListener("click", añadirNumeros);

//operaciones
let operaciones = [];

//añadir numeros

function añadirNumeros(e){
    if(e.target.getAttribute('type') === 'button'){
        if(e.target.className != 'operacion'){
            resultado.value += e.target.innerText;
        }
        if(e.target.id === 'sumar'){
            operaciones.push(resultado.value);
            operaciones.push('+');
            resultado.value= "";
            console.log(operaciones);
        }
        if(e.target.id === 'igual'){
            operaciones.push(resultado.value);
            resultado.value= "";
            const resultadoOperacion = eval(operaciones.join(''))
            resultado.value = resultadoOperacion
            operaciones = [];
        }
        if(e.target.id === 'restar'){
			operaciones.push(resultado.value)
			operaciones.push('-')
			resultado.value="";
		}
        if(e.target.id === 'multiplicar'){
            operaciones.push(resultado.value);
            operaciones.push('*')
            resultado.value= "";
        }
        if(e.target.id === 'dividir'){
            operaciones.push(resultado.value);
            operaciones.push('/')
            resultado.value="";
        }
        if(e.target.id === 'borrar'){
            operaciones = [];
            resultado.value="";
        }
    }
}




