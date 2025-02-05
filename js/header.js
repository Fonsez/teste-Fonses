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