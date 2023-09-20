import { Viking } from "./Viking"
export class Combat {
    public vikings:Viking[];
    constructor(vikings:Viking[]) {
        this.vikings=vikings;
    }
    private donnerCoup1() {
        const rand = Math.random()*100;
        const mult = 0.13;
        const multEpines = 0.5
        const degat = this.vikings[0].getForceTotale();
        if(rand<90) {
            this.vikings[1].sante = this.vikings[1].sante - degat+(this.vikings[1].defense<degat ? this.vikings[1].defense : degat);
            console.log("la sante du viking "+this.vikings[1].nom+" est de : "+this.vikings[1].sante);
            if (this.vikings[0].arme.nom=="Lame de sang") {
                this.vikings[0].sante += mult*(degat-(this.vikings[1].defense<degat ? this.vikings[1].defense : degat));
                console.log("la sante du viking apres restauration "+this.vikings[0].nom+" est de : "+this.vikings[0].sante);
            }
            if (this.vikings[1].bouclier=="Cote Epineuse") {
                this.vikings[0].sante -= multEpines*(degat-(this.vikings[1].defense<degat ? this.vikings[1].defense : degat));
                console.log("la sante du viking "+this.vikings[0].nom+" est après les dégats d'épines de : "+this.vikings[0].sante)
            }
        }
        else {
            this.vikings[1].sante = this.vikings[1].sante - 2*degat+(this.vikings[1].defense<2*degat ? this.vikings[1].defense : 2*degat);
            console.log("la sante du viking "+this.vikings[1].nom+" apres coup critique est de : "+this.vikings[1].sante);
            if (this.vikings[0].arme.nom=="Lame de sang") {
                this.vikings[0].sante += mult*(2*degat-(this.vikings[1].defense<2*degat ? this.vikings[1].defense : 2*degat));
                console.log("la sante du viking apres restauration "+this.vikings[0].nom+" est de : "+this.vikings[0].sante);
            }
            if (this.vikings[1].bouclier=="Cote Epineuse") {
                this.vikings[0].sante -= multEpines*(2*degat-(this.vikings[1].defense<2*degat ? this.vikings[1].defense : 2*degat));
                console.log("la sante du viking "+this.vikings[0].nom+" est après les dégats d'épines de : "+this.vikings[0].sante);
            }
        }
    }
    private donnerCoup2() {
        const rand = Math.random()*100;
        const mult = 0.13;
        const multEpines = 0.5;
        const degat = this.vikings[1].getForceTotale()
        if(rand<90) {
            this.vikings[0].sante = this.vikings[0].sante - degat+(this.vikings[0].defense<degat ? this.vikings[0].defense : degat);
            console.log("la sante du viking "+this.vikings[0].nom+" est de : "+this.vikings[0].sante);
            if (this.vikings[1].arme.nom=="Lame de sang") {
                this.vikings[1].sante += mult*(degat-(this.vikings[0].defense<degat ? this.vikings[0].defense : degat));
                console.log("la sante du viking  apres restauration "+this.vikings[1].nom+" est de : "+this.vikings[1].sante);
            }
            if (this.vikings[0].bouclier=="Cote Epineuse") {
                this.vikings[1].sante -= multEpines*(degat-(this.vikings[0].defense<degat ? this.vikings[0].defense : degat));
                console.log("la sante du viking "+this.vikings[1].nom+" est après les dégats d'épines de : "+this.vikings[1].sante)
            }
        }
        else {
            this.vikings[0].sante = this.vikings[0].sante - 2*degat+(this.vikings[0].defense<2*degat ? this.vikings[0].defense : 2*degat);
            console.log("la sante du viking "+this.vikings[0].nom+" apres coup critique est de : "+this.vikings[0].sante);
            if (this.vikings[1].arme.nom=="Lame de sang") {
                this.vikings[1].sante += mult*(2*degat-(this.vikings[0].defense<2*degat ? this.vikings[0].defense : 2*degat));
                console.log("la sante du viking apres restauration "+this.vikings[1].nom+" est de : "+this.vikings[1].sante);
            }
            if (this.vikings[0].bouclier=="Cote Epineuse") {
                this.vikings[1].sante -= multEpines*(2*degat-(this.vikings[0].defense<2*degat ? this.vikings[0].defense : 2*degat));
                console.log("la sante du viking "+this.vikings[1].nom+" est après les dégats d'épines de : "+this.vikings[1].sante);
            }
        }
    }
    public debutCombat() {
        console.log("Début du combat entre : "+this.vikings[0].nom+" et : "+this.vikings[1].nom)
        if (this.vikings[0].force<=this.vikings[1].force) {
            this.donnerCoup1();
        }
        while (this.vikings[0].sante>0 && this.vikings[1].sante>0) {
            this.donnerCoup2();
            if (this.vikings[0].sante >0) {
            this.donnerCoup1();
            }
        }
        if (this.vikings[0].sante>0){
            console.log("Gagnant : "+this.vikings[0].nom+" Santé : "+this.vikings[0].sante);
            console.log("Perdant : "+this.vikings[1].nom+" Santé : "+this.vikings[1].sante);
        }
        else {
            console.log("Gagnant : "+this.vikings[1].nom+" Santé : "+this.vikings[1].sante);
            console.log("Perdant : "+this.vikings[0].nom+" Santé : "+this.vikings[0].sante);
        }
    }
}