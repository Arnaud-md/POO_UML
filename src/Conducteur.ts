import {Voiture} from "./Voiture"
export class Conducteur {
    public nom:string
    public prenom:String
    public voiture:Array<Voiture>
    constructor(nom:string,prenom:string,voiture:Array<Voiture>){
      this.nom=nom;
      this.prenom=prenom;
      this.voiture=voiture;
    }
    public direBonjour(){
      console.log("Bonjour, je m'appelle "+this.prenom+" "+this.nom);
    }
    public seCrasher(index:number){
      this.voiture[index].crasher();
    }
  }