import { IHasHtmlFormat } from './../interfaces/IHasHtmlFormat';
import { IHasRender } from '../interfaces/IHasRender';

export class Display implements IHasRender {
  
  formContainer: HTMLDivElement

  constructor(
    private container: HTMLDivElement,
    private hiddenDiv: HTMLDivElement
  ) {
    this.formContainer = document.getElementById('form-container') as HTMLDivElement
  }

  render(docObj: IHasHtmlFormat, docType: string) {
    const htmlString: string = docObj.htmlFormat();
    this.container.innerHTML = htmlString
    this.hiddenDiv.classList.remove('invisible')
    this.formContainer.innerHTML = ""; // Supprime tous le contenu de la div
  }
}