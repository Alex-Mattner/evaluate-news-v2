import axios from 'axios'

const form = document.getElementById('CustomSubmit')
form.addEventListener('submit', handleSubmit)
// wrapped in window.onload = function () {...}  because did not load on time for Jest
window.onload = function() {form.addEventListener('submit', handleSubmit)}

function handleSubmit(event) {
    console.log('handleSubmit')
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('TextInput').value
    console.log(formText)

    fetch('http://localhost:8081/getTranslation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            txt: formText
        }) 
    })
    .then(res => res.json())
    .then(res => writeResponse(res))
}

const writeResponse = (res) => {
    const resultElement = document.getElementById('results')
    resultElement.innerHTML = ""
    res.language_list.forEach(el => {
        const listElement = document.createElement('li')
        listElement.innerHTML = el.name
        resultElement.append(listElement)
    })
}

export { handleSubmit }
export { writeResponse }


