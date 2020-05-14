function toggleMenu () {
    document.querySelector('.hamburger_button').addEventListener('click', function(event){
        document.querySelector('.section--sidebar').classList.toggle('show');
    });  
}

function datePicker() {
    const dataField = document.querySelector('.date_picker');
    
    flatpickr(dataField, {
        dateFormat: "d-m-Y",
        mode: "range",
    });
}

function buttonBlocker() {
    document.querySelector('.block').addEventListener('click', function(event) {
        event.preventDefault();
    });
}

function chartDrawer() {
    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {
        // 1
        type: 'bar',
        data: {
            // 2
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            // 3
            datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
                // 7
                hidden: true,
            }]
        },

        options: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 38,
                },
            },
        },
    });
}

function modalOperator() {
    function closeModal() {
        document.getElementById('overlay').classList.remove('show_modal');
    }
    
    document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
        btn.addEventListener('click', function(event) {
          event.preventDefault();
          closeModal();
        })
    });
    
    document.querySelector('#overlay').addEventListener('click', function(event) {
        if(event.target === this) {
          closeModal();
        }
    });
    
    document.addEventListener('keyup', function(event) {
        if(event.keyCode === 27) {
          closeModal();
        }
    });

    function openModal(modal) {
        document.querySelectorAll('#overlay > *').forEach(function(modal) {
          modal.classList.remove('show_modal');
        });
        document.querySelector('#overlay').classList.add('show_modal');
        document.querySelector(modal).classList.add('show_modal');
    }
    
    const exits = document.querySelectorAll('.exit_modal_button');
    
    for (let exit of exits) {
        exit.addEventListener('click', function(){
            openModal('#exitModal');
        });
    }
}

toggleMenu();
datePicker();
buttonBlocker();
chartDrawer();
modalOperator();