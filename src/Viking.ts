import { Arme } from "./Arme"
export class Viking {
    public nom:string
    public sante:number
    public force:number
    public defense:number
    public arme:Arme
    constructor(nom:string, sante:number, force:number, defense:number,arme:Arme) {
        this.nom=nom;
        this.sante=sante;
        this.force=force;
        this.defense=defense;
        this.arme=arme;
    }

}