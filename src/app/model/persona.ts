export class Persona {

    id?: number;
    hola: string;
    nombre: string;
    apellido: string;
    cargo: string;
    foto: string;
    saludoA: string;
    saludoB: string;
    saludoC: string;
    saludoD: string;
    saludoE: string;
    saludoF: string;
    saludoG: string;
    fondo: string;
    user: string;
    password: string;

    
    constructor(
        hola: string,
        nombre: string,
        apellido: string,
        cargo: string,
        foto: string,
        saludoA: string,
        saludoB: string,
        saludoC: string,
        saludoD: string,
        saludoE: string,
        saludoF: string,
        saludoG: string,
        fondo: string,
        user: string,
        password: string){

        this.hola=hola;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.foto=foto;
        this.saludoA=saludoA;
        this.saludoB=saludoB;
        this.saludoC=saludoC;
        this.saludoD=saludoD;
        this.saludoE=saludoE;
        this.saludoF=saludoF;
        this.saludoG=saludoG;
        this.fondo=fondo;
        this.user=user;
        this.password=password;
    }

}
