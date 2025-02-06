// secoll header desktop
function scrollHeader(){
  const nav = document.getElementById('header');

  // se o scroll for mais de 50 adiciona a classe se n remove
  if(this.scrollY >= 50) nav.classList.add('active-header');
  else nav.classList.remove('active-header');

}
window.addEventListener('scroll', scrollHeader);
// fim scroll header desktop




const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');

// console.log(menu_mobile);

bx.addEventListener('click', () =>{
  // adiciona a classe no hamburger que vira o x
  bx.classList.toggle('active');
  menu_mobile.classList.toggle('showmenu');
})

// evento de click para fechar o nav
link_mobile.forEach((item) => {
  item.addEventListener('click', () =>{
    menu_mobile.classList.remove('showmenu');
    bx.classList.toggle('active');
  })
})