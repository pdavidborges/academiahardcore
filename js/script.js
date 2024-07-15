//Seleção dos elementos que serão manipulados
//Seleção de DOM

var btn = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
var links = document.querySelectorAll('.menu a');

//console.log(links);
//var btn = document.getElementById('identificador');
//var menu = document.getElementsByClassName('classe');

//console.log(btn);
//console.log(menu);

function menuSite(){
    //alert('Funçao acionada');
    menu.classList.toggle('menu-open');
    btn.classList.toggle('x');
}

// function removerMenu(){
//     menu.classList.remove('menu-open');
// }

//associando o btn a um evento para disparo de uma função
btn.addEventListener('click', menuSite);
//menu.addEventListener('click', menuSite);

//Percorrendo a lista de links dando um nome para CADA um dos links (link)

links.forEach(function(link){
    //console.log(link);
    link.addEventListener('click', menuSite);
})


//console.log(links.length); retorna o número de itens de uma lista
// for(var i=0; i<links.length; i++){
//     links[i].addEventListener('click', menuSite);
// }