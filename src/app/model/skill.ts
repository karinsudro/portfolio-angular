export class Skill {

    id?: number;   
    skill: string;
    icono: string;
    progreso: number;
    color: string;

    constructor(
    skill: string,
    icono: string,
    progreso: number,
    color: string){

        this.skill=skill;
        this.icono=icono;
        this.progreso=progreso;
        this.color=color;

    }

}
