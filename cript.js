const input = document.querySelector("input"),
    guess = document.querySelector('.guess'),
    checkbutton = document.querySelector("button"),
    remainChances = document.querySelector('.chances');

input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;

checkbutton.addEventListener('click', () => {
    chance--;
    let inputValue = input.value;

    if (inputValue == randomNum) {
        [guess.textContent, input.disabled] = ['поздравляю', true];
        [checkbutton.textContent, guess.style.color] = ['переиграть', '#41ac38'];
    } else if (inputValue > randomNum && inputValue < 100) {
        [guess.textContent, remainChances.textContent] = ['ваша догадка высока', chance];
        guess.style.color = '#333';
    } else if (inputValue < randomNum && inputValue > 0) {
        [guess.textContent, remainChances.textContent] = ['ваша догадка низка', chance];
        guess.style.color = '#333';
    } else {
        [guess.textContent, remainChances.textContent] = ['ваше число недействительно', chance];
        guess.style.color = '#DE0611';
    }

    if (chance == 0) {
        [checkbutton.textContent, input.disabled, inputValue] = ['переиграть', true, ''];
        [guess.textContent, guess.style.color] = ['вы проиграли', '#DE0611'];
    }
    if (chance < 0) {
        //window.location.reload();
    }
});
