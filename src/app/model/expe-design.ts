export class ExpeDesign {

    id?: number;   
    cargo: string;
    inicio: string;
    fin: string;
    lugar: string;
    descripcion: string;


    constructor(
        cargo: string,
        inicio: string,
        fin: string,
        lugar: string,
        descripcion: string){


            this.cargo=cargo;
            this.inicio=inicio;
            this.fin=fin;
            this.lugar=lugar;
            this.descripcion=descripcion;

    }

}
