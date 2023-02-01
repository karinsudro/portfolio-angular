export class Project {

    id?: number;   
    imagen:string;
    proyecto:string;    
    descripcion:string;
    live_url:string;
    repo_url:string;


    constructor(
        imagen:string,
        proyecto:string,
        descripcion:string,
        live_url:string,
        repo_url:string){

        this.imagen=imagen;
        this.proyecto=proyecto;
        this.descripcion=descripcion;
        this.live_url=live_url;
        this.repo_url=repo_url;

    }


}
