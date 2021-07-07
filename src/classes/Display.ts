import { IHasHtmlFormat } from './../interfaces/IHasHtmlFormat';
import { IHasRender } from '../interfaces/IHasRender';
import { Storage } from '../classes/Storage.js'

export class Display implements IHasRender {
  
  formContainer: HTMLDivElement

  constructor(
    private container: HTMLDivElement,
    private hiddenDiv: HTMLDivElement,
    private btnPrint: HTMLButtonElement
  ) {
    this.formContainer = document.getElementById('form-container') as HTMLDivElement
  }

  render(docObj: IHasHtmlFormat, docType: string) {
    const htmlString: string = docObj.htmlFormat();
    this.container.innerHTML = htmlString

    new Storage(docType, htmlString);

    if(docType === 'invoice') {
      this.btnPrint.innerText = 'Imprimer la facture'
    } else {
      this.btnPrint.innerText = 'Imprimer le devis'
    }

    this.hiddenDiv.classList.remove('invisible')
    this.formContainer.innerHTML = ""; // Supprime tous le contenu de la div
  }
}