var allButtons = document.querySelectorAll('button.class__btn');
var allClass = document.querySelectorAll('div.timetable__class');

let current_class = allClass[0];

for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function(e) {
        current_class.classList.remove('show');
        allClass[i].classList.add('show');
        current_class = allClass[i];
    })
}