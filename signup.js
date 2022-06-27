let input = document.getElementsByTagName('input')

let err = document.querySelector('.error-msg')

function send() {
    if (input[0].value == '') {
        err.innerHTML = 'First Name cannot br empty'
        
    }
    
}