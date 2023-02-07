export class Experiencia {

    id?: number;   
    expe_tipo: string;
    cargo: string;
    inicio: string;
    fin: string;
    lugar: string;
    descripcion: string;


    constructor(
        expe_tipo:string,
        cargo: string,
        inicio: string,
        fin: string,
        lugar: string,
        descripcion: string){

            this.expe_tipo = expe_tipo;
            this.cargo=cargo;
            this.inicio=inicio;
            this.fin=fin;
            this.lugar=lugar;
            this.descripcion=descripcion;

    }


}
