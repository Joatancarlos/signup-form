
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function send() {
    var input = document.getElementsByTagName('input');
    var divErrorFN = document.getElementById('msg-f-name');
    var divErrorLN = document.getElementById('msg-l-name')
    var divErrorEm = document.getElementById('msg-email');
    var divErrorPW = document.getElementById('msg-password');


    
    // First Name
    
    if (input[0].value == '') {
        divErrorFN.style.display = 'block';
        
        // exibe ícone de erro
        if (!input[0].classList.contains('iconError'))
            input[0].classList.add('iconError');
    } else {
        divErrorFN.style.display = 'none';

        // remove ícone de erro
        if (input[0].classList.contains('iconError'))
            input[0].classList.remove('iconError');
    }

    // Last Name

    if (input[1].value == '') {
        divErrorLN.style.display = 'block';
        
        // exibe ícone de erro
        if (!input[1].classList.contains('iconError'))
            input[1].classList.add('iconError');
    } else {
        divErrorLN.style.display = 'none';

        // remove ícone de erro
        if (input[1].classList.contains('iconError'))
            input[1].classList.remove('iconError');
    }

    // E-mail
    
    if (validateEmail(input[2].value)) {
        divErrorEm.style.display = 'none';

        // remove ícone de erro
        if (input[2].classList.contains('iconError'))
            input[2].classList.remove('iconError');
    } else {
        
        divErrorEm.style.display = 'block';

        // exibe ícone de erro
        if (!input[2].classList.contains('iconError'))
            input[2].classList.add('iconError');
    }

    // Password

    if (input[3].value == '') {
        divErrorPW.style.display = 'block';
        
        // exibe ícone de erro
        if (!input[3].classList.contains('iconError'))
            input[3].classList.add('iconError');
    } else {
        divErrorPW.style.display = 'none';

        // remove ícone de erro
        if (input[3].classList.contains('iconError'))
            input[3].classList.remove('iconError');
    }

    // Recarrega a página -> retorna true
    return false;
}