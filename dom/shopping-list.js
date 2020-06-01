const ulElement = document.querySelector('ul');
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');

//Below helps to visualize what is currently in each of the
//above variables.
console.log(buttonElement, ulElement, inputElement);

buttonElement.onclick = function() {
    let inputValue = inputElement.value;
    inputElement.value = '';

    const liElement = document.createElement('li');
    const spanElement = document.createElement('span');
    const buttonElementTwo = document.createElement('button');

    liElement.appendChild(spanElement);
    spanElement.textContent = inputValue;
    liElement.appendChild(buttonElementTwo);
    buttonElementTwo.textContent = 'Delete';
    ulElement.appendChild(liElement);

    buttonElementTwo.onclick = function() {
        ulElement.removeChild(liElement);
    }

    inputElement.focus();
}