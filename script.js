let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = (e) => {
    e.preventDefault()

    let temErro = false

    let inputNome = document.forms['formCadastro']['nome']

    if(!inputNome.value){
        temErro = true
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = "Digite o nome corretamente"
    } else {
        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }


    let inputEmail = document.forms['formCadastro']['email']

    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = "Digite o email corretamente"
    } else {
        inputEmail.classList.remove('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }


    let inputCpf = document.forms['formCadastro']['cpf']

    if(!inputCpf.value){
        temErro = true
        inputCpf.classList.add('inputError')

        let span = inputCpf.nextSibling.nextSibling
        span.innerText = "Digite um CPF válido"
    } else {
        inputCpf.classList.remove('inputError')

        let span = inputCpf.nextSibling.nextSibling
        span.innerText = ''
    }


    let inputRadio = document.forms['formCadastro']['radio']
    
    if(!inputRadio){
        temErro = true
        inputRadio.classList.add('inputError')

        let span = inputRadio.nextSibling.nextSibling
        span.innerText = "Selecione uma opção"
    }

    if(!temErro){
        formulario.submit()
    }


    
}