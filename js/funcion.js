class Perfil {
    constructor(Nombre, Apellido, fNacimiento, Email, Password, Edad = ""){
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.nacimiento = fNacimiento;
        this.email = Email;
        this.password = Password
        this.edad = Edad;
    }

    validar (){
        console.log(this.nombre + " " + this.apellido + " " + "esta logueado");
    }
}

class Pelotas {
    constructor(id, marca, unidades, precio){
        this.id = parseInt(id);
        this.marca = marca.toString;
        this.unidades = parseInt(unidades);
        this.precio = parseFloat(precio);
        this.tubo = true; 
    }

    validar (){
        console.log(this.nombre + " " + this.apellido + " " + "esta logueado");
    }
}
class Raquetas {
    constructor(id, marca, pulgadas, precio){
        this.id = parseInt(id);
        this.marca = marca.toString;
        this.tpulgadas = parseFloat(pulgadas);
        this.precio = parseFloat(precio);
        this.color = color.toString;
    }

    validar (){
        console.log(this.nombre + " " + this.apellido + " " + "esta logueado");
    }
}