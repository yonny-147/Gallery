function validationLogin (values) {
    let error = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/

    if(values.email === ''){
        error.email = 'The email field cannot be empty'
    }else if(!emailPattern.test(values.email)){
        error.email = 'This email is not registered'
    }else {
        error.email = ''
    }

    if(values.password === ''){
        error.password = 'The password field cannot be empty'
    }else if(!passwordPattern.test(values.password)){
        error.password = 'Incorrect password'
    }else {
        error.password = ''
    }
    return error
}

export default validationLogin
