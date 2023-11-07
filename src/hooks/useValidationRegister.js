function validationRegister (name, age, email, password) {

    let error = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/

    //validacion del nombre
    if(name === ''){
        error.name = 'El campo de nombre no puede estar vacio'
    }else {
        error.name = ''
    }

    //validacion de edad
    if (age < 15 || age.age > 150) {
        error.age = "La persona no cumple con la edad permitida"
    } else {
        error.age = ''
    } 

    //validacion de correo electronico
    if(email === ''){
        error.email = 'El campo de correo electronico no puede estar vacio'
    }else if(!emailPattern.test(email)){
        error.email = 'Digite un correo electronico valido'
    }else {
        error.email = ''
    }
    //validacion de contraseña
    if(password === ''){
        error.password = 'El campo de contraseña no puede estar vacio'
    }else if(!passwordPattern.test(password)){
        error.password = 'Debe contener "a-Z" y "0-9", minimo 8 caracteres'
    }else {
        error.password = ''
    }
    
    return error
}

export default validationRegister
