const add = document.getElementById("add")
const randomNumber = document.getElementById("randomNumber")
const inputNumber = document.getElementById("number")
const calcular = document.getElementById("calcular")
let arr = [];

function agregarNumero() {
    const inputNumero = inputNumber.value;
    arr.push(Number(inputNumero));
  
    // Actualizar la tabla de números
    arr.forEach((numero, index) => {
      document.getElementById((index + 1).toString()).innerText = numero;
    });
}

add.addEventListener("click",()=>{
    console.log(arr);
    agregarNumero()
})

function generarNumero() {
    const randomNumero = Math.floor(Math.random() * 100) + 1;
    document.getElementById('number').value = randomNumero;
}


randomNumber.addEventListener("click",()=>{
    generarNumero()
})


function calcularN() {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const promedio = sum / arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const maxMin = `${max}/${min}`;

  document.getElementById('promedio').innerText = promedio.toFixed(2);
  document.getElementById('total').innerText = sum;
  document.getElementById('max-min').innerText = maxMin;
}

calcular.addEventListener("click", ()=>{
    calcularN()
})