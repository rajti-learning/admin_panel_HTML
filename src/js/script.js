function toggleMenu () {
    document.querySelector('.section--sidebar').classList.toggle('show');
}

document.querySelector('.hamburger_button').addEventListener('click', function(event){
    event.preventDefault();
    toggleMenu();
});