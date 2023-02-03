export class Persona {

    id?: number;
    hola: string;
    nombre: string;
    apellido: string;
    cargo: string;
    user: string;
    clave: string;

    
    constructor(
        hola: string,
        nombre: string,
        apellido: string,
        cargo: string,
        user: string,
        clave: string){

        this.hola=hola;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.user=user;
        this.clave=clave;
    }

}
