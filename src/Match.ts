import { Equipe } from "./Equipe"
export class Match {
    public equipes:Equipe[] ;
    constructor(equipes:Equipe[]){
        this.equipes=equipes;
    }
    public jeu2Equipes() {
        let scoreEq1 = 0;
        let scoreEq2 = 0;
        let j=0;
        while (scoreEq1<=20&&scoreEq2<=20) {
            scoreEq1 += Math.floor(Math.random()*4);
            scoreEq2 += Math.floor(Math.random()*4);
        }
        if (scoreEq1>scoreEq2) {
            j=1;
        }
        else if (scoreEq2>scoreEq1) {
            j=2;
        }
        else {
            j=3
        }
        if (j==3) {
            console.log("il y a eu égalité avec le score : "+scoreEq1+" vs "+scoreEq2);
        }
        else {
            console.log("l'équipe "+j+" a gagnée avec le score : "+scoreEq1+" vs "+scoreEq2);
        }
        
        return [[scoreEq1,scoreEq2],j];
    }
}

