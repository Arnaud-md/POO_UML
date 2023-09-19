import {Conducteur} from "./Conducteur"
import {Voiture} from "./Voiture"
import {Pomme} from "./Pomme"
import { Joueur } from "./Joueur"
import { Equipe } from "./Equipe"
import { Match } from "./Match"

const joueur1 = new Joueur("Kévin","Durant",37);
const joueur2 = new Joueur("Victor","Wembi",19);
const joueur3 = new Joueur("Jean","Dupont",28);
const joueur4 = new Joueur("Michel","Dupont",27);
const joueur5 = new Joueur("j5_prenom","j5_nom", 18);
const joueur6 = new Joueur("j6_prenom","j6_nom", 29);
const joueur7 = new Joueur("j7_prenom","j7_nom", 34);
const joueur8 = new Joueur("j8_prenom","j8_nom", 23);

const teamA = new Equipe([joueur1,joueur2]);
const teamB = new Equipe([joueur3,joueur4]);
const teamC = new Equipe([joueur5,joueur6]);
const teamD = new Equipe([joueur7,joueur8]);
teamA.afficherNbJoueurs();
teamB.afficherNbJoueurs();

const jeuAB = new Match([teamA,teamB]);
console.log("match entre l'équipe A et l'équipe B")
const resAB = jeuAB.jeu2Equipes();
const jeuAC = new Match([teamA,teamC]);
console.log("match entre l'équipe A et l'équipe C")
const resAC = jeuAC.jeu2Equipes();
const jeuAD = new Match([teamA,teamD]);
console.log("match entre l'équipe A et l'équipe D")
const resAD = jeuAD.jeu2Equipes();
const jeuBC = new Match([teamB,teamC]);
console.log("match entre l'équipe B et l'équipe C")
const resBC = jeuBC.jeu2Equipes();
const jeuBD = new Match([teamB,teamD]);
console.log("match entre l'équipe B et l'équipe D")
const resBD = jeuBD.jeu2Equipes();
const jeuCD = new Match([teamC,teamD]);
console.log("match entre l'équipe C et l'équipe D")
const resCD = jeuCD.jeu2Equipes();

let resA = 0;
let resB = 0;
let resC = 0;
let resD = 0;
// 3 points pour une victoire, 1 pour un match nul
if (resAB[1] == 1) {
    resA+=3;
}
else if (resAB[1] == 3) {
    resA+=1;
    resB+=1;
}
else if (resAB[1] == 2) {
    resB+=3
}
if (resAC[1] == 1) {
    resA+=3;
}
else if (resAC[1] == 3) {
    resA+=1;
    resB+=1;
}
else if (resAC[1] == 2) {
    resB+=3;
}
if (resAD[1] == 1) {
    resA+=3;
}
else if (resAD[1] == 3) {
    resA+=1;
    resD+=1;
}
else if (resAD[1] == 2) {
    resD+=3;
}
if (resBC[1] == 1) {
    resB+=3;
}
else if (resBC[1] == 3) {
    resB+=1;
    resC+=1;
    
}
else if (resBC[1] == 2) {
    resC+=3;
}
if (resBD[1] == 1) {
    resB+=3;
}
else if (resBD[1] == 3) {
    resB+=1;
    resD+=1;
    
}
else if (resBD[1] == 2) {
    resD+=3;
}
if (resCD[1] == 1) {
    resC+=3;
}
else if (resCD[1] == 3) {
    resB+=1;
    resD+=1;
}
else if (resBD[1] == 2) {
    resD+=3;
}

const max = Math.max(resA,resB,resC,resD);
let jeuFinale = new Match([]);
if (resA==max) {
    if (resB==max) {
        jeuFinale.equipes=[teamA,teamB]
        console.log("Il y a égalité entre les équipes A et B et le résultat de la finale est : ")
        let resFinale = jeuFinale.jeu2Equipes();
    }
    else if (resC==max) {
        jeuFinale.equipes=[teamA,teamC]
        console.log("Il y a égalité entre les équipes A et C et le résultat de la finale est : ")
        let resFinale = jeuFinale.jeu2Equipes();
    }
    else if (resD==max) {
        jeuFinale.equipes=[teamA,teamD]
        console.log("Il y a égalité entre les équipes A et D et le résultat de la finale est : ")
        let resFinale = jeuFinale.jeu2Equipes();
    }
    else {
        console.log("l'équipe A a gagne le tournoi")
    }
}
else if (resB==max) {
    if (resC==max) {
        jeuFinale.equipes=[teamB,teamC]
        console.log("Il y a égalité entre les équipes B et C et le résultat de la finale est : ")
        let resFinale = jeuFinale.jeu2Equipes();
    }
    else if (resD==max) {
        jeuFinale.equipes=[teamB,teamD]
        console.log("Il y a égalité entre les équipes B et D et le résultat de la finale est : ")
        let resFinale = jeuFinale.jeu2Equipes();
    }
    else {
        console.log("l'équipe B a gagne le tournoi")
    }
}
else if (resC==max) {
    if (resD==max) {
        jeuFinale.equipes=[teamC,teamD]
        console.log("Il y a égalité entre les équipes C et D et le résultat de la finale est : ")
        let resFinale = jeuFinale.jeu2Equipes();
    }
    else {
        console.log("l'équipe C a gagne le tournoi")
    }
}
else if (resD==max) {
    console.log("l'équipe  D a gagne le tournoi")
}

// const maVoiture=new Voiture("rouge",47);
// const conducteur = new Conducteur("Dupond","Jean",maVoiture);
// conducteur.direBonjour();
// conducteur.crasher();
// console.log("l etat de la voiture du conducteur est : "+conducteur.voiture.etat);

// maVoiture.crasher();
// console.log(maVoiture.etat);


// const voiturePetite=new Voiture("rouge",22);
// const voitureNeuve = new Voiture("noire",100);
// const conducteur = new Conducteur("Dupond","Jean",[voiturePetite,voitureNeuve]);
// conducteur.seCrasher(0);
// conducteur.seCrasher(1);
// conducteur.seCrasher(1);
// console.log("l etat de la voiture petite du conducteur est : "+conducteur.voiture[0].etat);
// console.log("l etat de la voiture neuve du conducteur est : "+conducteur.voiture[1].etat);
// console.log("les couleurs des deux voitures sont : "+conducteur.voiture[0].couleur+" et "+conducteur.voiture[1].couleur);


// console.log("l'etat de la voiture petite est : "+voiturePetite.etat);
// console.log("l'etat de la voiture neuve est : "+voitureNeuve.etat);


// const maPomme = new Pomme("Granny Smith","verte");
// maPomme.afficherAttributs();
// console.log(maPomme.color);
// maPomme.color = "rouge";
// console.log(maPomme.color);

// const pink = new Pomme("Pink Lady","rose");
// pink.afficherAttributs();
// console.log(pink.color);
// pink.color = "jaune";
// console.log(pink.color);
// console.log(Pomme.donnerHeure());


















// class Pomme {

//     public name: string
//     public color: string

//     constructor(
//         name: string,
//         color: string,
//     ) {
//       console.log('Initialisation de la pomme')
//       this.name = name
//       this.color = color
//     }

//     public eat() {
//       console.log('Je mange une pomme')
//     }

//     public changeColor(newColor: string) {
//       this.color = newColor
//     }

// }

// const apple = new Pomme('Golden', 'yellow')
// apple.eat()
// apple.changeColor('red')
// console.log(apple.color)

