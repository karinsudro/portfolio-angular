export class Persona {

    id?: number;
    hola: string;
    nombre: string;
    apellido: string;
    cargo: string;
    email: string;
    clave: string;

    
    constructor(
        hola: string,
        nombre: string,
        apellido: string,
        cargo: string,
        email: string,
        clave: string){

        this.hola=hola;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.email=email;
        this.clave=clave;
    }

}
