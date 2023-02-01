export class Education {

    id?: number;   
    carrera: string;
    inicio: string;
    fin: string;
    institucion: string;
    descripcion: string;


    constructor(
        carrera: string,
        inicio: string,
        fin: string,
        institucion: string,
        descripcion: string){

        this.carrera=carrera;
        this.inicio=inicio;
        this.fin=fin;
        this.institucion=institucion;
        this.descripcion=descripcion;
    }

}
