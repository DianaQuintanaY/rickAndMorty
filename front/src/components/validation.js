const validate = (userData) => {
    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!regexEmail.test(userData.userName)) errors.userName = 'El email is invalido';
    if(!userData.userName) errors.userName = 'Este campo no puede estar vacio';
    if( userData.userName?.length > 35) errors.userName = 'El email no puede superar los 35 caracteres';

    if(!userData.password.match(/\d/)) errors.password = 'la contraseña tiene que tener al menos un número';
    if(userData.password?.length < 6 && userData.password?.length > 10) errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres';
    return errors
};

export default validate