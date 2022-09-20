// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой, в спане
//     должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputRef = document.querySelector("#name-input");
const spamRef = document.querySelector("#name-output");
const handleClick = (event) => {
    if (event.currentTarget.value === '')
    {
        spamRef.textContent = "Anonymous"
        return;
    }
  
    spamRef.textContent = event.currentTarget.value;
    
}
 

inputRef.addEventListener("input",handleClick)