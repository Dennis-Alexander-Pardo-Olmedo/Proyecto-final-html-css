const toggleMenuElements=document.getElementById('toggle-menu');
const toggleMenuLogo=document.getElementById('toggle-menu-logo');
const maniMenuElements=document.getElementById('main-menu');
toggleMenuElements.addEventListener('click',()=>{
    maniMenuElements.classList.toggle('main-menu--show');
})
