class Normal{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    mostrarDatos(){
        return `Email: ${this.email} \nContraseña ${this.password}`
    }
}

class Vip extends Normal{
    constructor(email, password, username){
        super(email, password);
        this.username = username;
    }
    mostrarDatos(){
        return `Usuario: ${this.username} \n${super.mostrarDatos()}`
    }
}

export {Normal, Vip}