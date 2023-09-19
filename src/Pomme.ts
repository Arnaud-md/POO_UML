export class Pomme {
    public name:string
    private _color:string
  
    constructor(name:string,color:string){
      console.log("initilaisation de la pomme");
      this.name=name;
      this._color=color;
    }
    public afficherAttributs(){
      console.log("cette pomme est : "+this.name+" et est de couleur : "+this._color);
    }
    public get color(){
      return this._color
    }
    public set color(color:string){
      this._color=color;
    }
    public static donnerHeure(){
      return Date.now();
    }
  }