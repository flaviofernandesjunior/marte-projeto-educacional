/** tornando menu burguer interativo*/
let show = true;

const menuSection = document.querySelector(".menu-section");
const menuBurguer = menuSection.querySelector(".menu-burguer");


menuBurguer.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show /** show mudando para falso ao clicar */
})


let botao = document.getElementById("botao-topo");
// Função nativa do windows chamada onscroll ao scrollar, armazena a função chamada scrollFunction(), que define quando o botão deve aparecer
window.onscroll = function scrollFunction () {
  // Se, a quantidade de pixels percorridos na tela for igual à condição passada entre parentêses, então:
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    // mostrar o botão
    botao.style.display = "block";
    // senão,
  } else {
    // não mostrar o botão 
    botao.style.display = "none";
  }
}

// Quando a pessoa clicar em voltar para o topo, executar esta função
function voltarParaTopo () {
  document.documentElement.scrollTop = 0;
}