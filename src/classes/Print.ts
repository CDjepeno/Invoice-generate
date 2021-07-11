import { IHasPrint } from "../interfaces/IHasPrint";

export class Print implements IHasPrint {

  constructor(private el:HTMLDivElement){}

  print() {
    document.body.innerHTML = this.el.innerHTML; // Permet d'imprimer que la div
    window.print() 
    document.location.reload();
  }
}