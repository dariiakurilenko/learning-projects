let display = document.querySelector('.display')
let buttons = Array.from(document.querySelectorAll('.button'))

buttons.forEach(button => 
    button.addEventListener('click', (e)=> {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "0";
                break
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                }catch(e){
                    display.innerText = 'Error'
                }
                break
            case "%":
                let typed = display.innerText + '/100';
                display.innerText = eval(typed);
                break;
            case "+/-":
                display.innerText = "-";
                break;
            default:
                if (display.innerText === '0' && e.target.innerText !== '.') {
                    display.innerText = e.target.innerText;
                }else{
                    display.innerText += e.target.innerText;
                }
        }
    }
    )
)