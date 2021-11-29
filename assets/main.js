const textField = document.querySelector('input[type="text"]')
const button = document.querySelector('input[type="button"]')
const result = document.querySelector('div.result span')

button.addEventListener('click', function(){
    result.innerText = textField.value.length
})