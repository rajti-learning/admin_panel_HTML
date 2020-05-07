function toggleMenu () {
    document.querySelector('.section--sidebar').classList.toggle('show');
}

document.querySelector('.hamburger_button').addEventListener('click', function(event){
    event.preventDefault();
    toggleMenu();
});

function datePicker() {
    const dataField = document.querySelector('.lol');
    
    flatpickr(dataField, {
        dateFormat: "d-m-Y",
        mode: "range",
    });
}

function buttonBlocker() {
    document.querySelector('.refresh').addEventListener('click', function(event) {
        event.preventDefault();
    });
}

datePicker();
buttonBlocker();