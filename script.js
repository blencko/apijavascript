const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');
const nome = document.querySelector('#nome');
const nomeDoPersonagem = document.querySelector('li');
const especie = document.querySelector('#especie');
const stats = document.querySelector('#status');

gerarValorAleatorio = ()=>{
  let numerosAleatorios=[];
  for(let i = 0; i<=2; i++){
    numerosAleatorios.push( Math.floor(Math.random() * 671));
  }
  return numerosAleatorios;
}

pegarPersonagem=()=>{
  let numeroAleatorio = gerarValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method:'GET',
    headers:{
        Accept:'application/json',
        'Content-type':'application/json'
    }
  }).then((response)=>response.json()).then((data)=>{
      imagem.src = data.image;
      imagem.alt = data.name;
      nome.innerHTML = data.name;
      especie.innerHTML = data.species;
      stats.innerHTML = data.status;
 })
}

botao.onclick = pegarPersonagem;