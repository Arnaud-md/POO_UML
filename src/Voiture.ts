export class Voiture {
    private _couleur:string
    private _etat:number
  
    constructor(couleur:string,etat:number){
      this._couleur=couleur;
      this._etat=etat;
    }
    public crasher(){
      this._etat=this._etat*0.8;
    }
    public get etat(){
      return this._etat;
    }
    public set etat(etat:number){
      this._etat=etat;
    }
    public get couleur(){
        return this._couleur;
      }
      public set couleur(couleur:string){
        this._couleur=couleur;
      }
  }