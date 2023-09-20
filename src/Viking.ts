import { Arme } from "./Arme"
export class Viking {
    public nom:string
    public sante:number
    public force:number
    public defense:number
    public arme:Arme
    public bouclier:string
    constructor(nom:string, sante:number, force:number, defense:number,arme:Arme,bouclier:string) {
        this.nom=nom;
        this.sante=sante;
        this.force=force;
        this.defense=defense;
        this.arme=arme;
        this.bouclier=bouclier;
    }

    getForceTotale(){
        return this.force + this.arme.force
    }

}