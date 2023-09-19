import { Joueur } from "./Joueur"
export class Equipe {
    public joueurs:Joueur[]
    constructor(joueurs:Joueur[]) {
        this.joueurs=joueurs
    }
    public afficherNbJoueurs(){
        console.log("le nombre de joueurs est : "+this.joueurs.length);
    }
}