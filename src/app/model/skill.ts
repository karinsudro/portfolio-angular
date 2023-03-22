export class Skill {

    id?: number;
    skill_tipo: string;   
    skill: string;
    icono: string;
    progreso: number;
    color: string;

    constructor(
        skill_tipo: string,
        skill: string,
        icono: string,
        progreso: number,
        color: string)
    {
        this.skill_tipo= skill_tipo;
        this.skill=skill;
        this.icono=icono;
        this.progreso=progreso;
        this.color=color;
    }

}
