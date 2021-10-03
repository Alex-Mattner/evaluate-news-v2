/*Validation if input exists or not*/

function inputValidation(event) {
    
    event.preventDefault()
    
    let inputText = event.target[0].value  
        //console.log(event.target[0].value)
     
        if (inputText.length == 0) {
        
            alert("Dont't forget to fill out the input field")
            return false

        } else {
            
            const reg = new RegExp(/^[a-zA-Z 0-9 .:;,!"'/w]+$/)
                
                if(reg.test(inputText) == true) {
                    console.log('RegEx working')
                } else {
                    alert('Please only fill in text, numbers and punctuation marks')
                }

            return true

        }   
    
} 
