function criaHoraDossegundos() {
  const data = new Date(segundos * 100);

  return data.toLocaleTimeString('pt-BR',{
    hour12: false,
    timeZone: 'UTC'
  })

}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function atualizaHora() {
 timer = setInterval(function(){
   segundos ++
   relogio.innerHTML = criaHoraDossegundos(segundos);
 })
}

iniciar.addEventListener('click', (e) => {
  clearInterval(timer);
  atualizaHora()
})

pausar.addEventListener('click', (e) => {
  clearInterval(timer);
})

zerar.addEventListener('click', (e) => {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
})
