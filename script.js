const input = document.getElementById('InputBox');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        switch (buttonText) {
            case '=':
                string = eval(string);
                input.value = string;
                break;
            case 'AC':
                string = "";
                input.value = string;
                break;
            case 'DEL':
                string = string.slice(0, -1);
                input.value = string;
                break;
            default:
                string += buttonText;
                input.value = string;
                break;
        }
    });
});

})
