/*Validation Input*/
const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', inputValidation)

function inputValidation(e) {
    e.preventDefault()
    const inputField = document.getElementById('input-text')
    
    if (!inputField.value) {
        alert('Please enter your text here')
    } else {
        console.log('Filled text in input field: ok!')
    }
}

export { inputValidation }








/* const fieldInput = document.getElementById('#TextInput');
console.log(fieldInput);

document.getElementById('submitt-btn').addEventListener('click', inputValidation)

function inputValidation(fieldInput) {
    const reg = new RegExp(/^[a-zA-Z ]+$/)
    if(fieldInput.value = reg) {
        console.log('I am working')
    } else {
        alert('please only fill in text')
    }
} */


/* 
// todo: add Eventlistener and validation statement
fieldInput.oninput = () => {
    if(/^[a-zA-Z ]+$/.test(fieldInput.value) == false) {
        alert('Please only enter letters')
    }
}
 */