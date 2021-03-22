
// function mostrarScroll(){
//   alert("hola");
//   let scrollTop = document.documentElement.scrollTop;
//   for (var i = 0; i < animado.length; i++) {
//     let alturaAnimada = animado[i].offsetTop;
//
//     if((alturaAnimada-300) < scrollTop){
//       animado[i].style.opacity=1;
//       animado[i].classList.add("moveEffect");
//     }
//   }
// }
//
// window.addEventListener('onscroll', mostrarScroll;
let animado = document.querySelectorAll(".animationLeft");
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado.length; i++) {
    let alturaAnimada = animado[i].offsetTop;

    if((alturaAnimada-500) < scrollTop){
      animado[i].style.opacity=1;
      animado[i].classList.add("moveEffectLeft");
    }
  }
}
