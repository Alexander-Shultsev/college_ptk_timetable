var allButtons = document.querySelectorAll('button.class__btn');
var allClass = document.querySelectorAll('div.timetable__class');

let current_class = allClass[0];
let current_button = allButtons[0];

for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function(e) {
        current_class.classList.remove('show');
        allClass[i].classList.add('show');

        current_button.classList.remove('class__btn--active');
        allButtons[i].classList.add('class__btn--active');

        current_class = allClass[i];
        current_button = allButtons[i];
    })
}