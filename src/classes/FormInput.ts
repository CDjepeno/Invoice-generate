import { IHasHtmlFormat } from "../interfaces/IHasHtmlFormat";
import {Datas} from '../classes/Datas.js'
import { IHasRender } from '../interfaces/IHasRender';
import { Display } from "../classes/Display.js";

export class FormInput {
  form: HTMLFormElement;
  type: HTMLSelectElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  address: HTMLInputElement;
  country: HTMLInputElement;
  town: HTMLInputElement;
  zip: HTMLInputElement;
  product: HTMLInputElement;
  price: HTMLInputElement;
  quantity: HTMLInputElement;
  tva: HTMLInputElement;
  docContainer: HTMLDivElement;
  hiddenDiv: HTMLDivElement;
  btnPrint: HTMLButtonElement:;

  constructor() {
    this.form = document.getElementById("form") as HTMLFormElement;
    this.type = document.getElementById("type") as HTMLSelectElement;
    this.firstName = document.getElementById("firstName") as HTMLInputElement;
    this.lastName = document.getElementById("lastName") as HTMLInputElement;
    this.address = document.getElementById("address") as HTMLInputElement;
    this.country = document.getElementById("country") as HTMLInputElement;
    this.town = document.getElementById("town") as HTMLInputElement;
    this.zip = document.getElementById("zip") as HTMLInputElement;
    this.product = document.getElementById("product") as HTMLInputElement;
    this.price = document.getElementById("price") as HTMLInputElement;
    this.quantity = document.getElementById("quantity") as HTMLInputElement;
    this.tva = document.getElementById("tva") as HTMLInputElement;

    this.docContainer = document.getElementById('document-container') as HTMLDivElement
    this.hiddenDiv = document.getElementById('hiddenDiv') as HTMLDivElement

    this.btnPrint = document.getElementById('print') as HTMLButtonElement

    this.submitFormListener();
  }

  private submitFormListener(): void {
    this.form.addEventListener("submit", this.handleFormSubmit.bind(this))
  }

  private handleFormSubmit(e: Event) {
    e.preventDefault()

    const inputs = this.inputDatas()

    if(Array.isArray(inputs)) {
      const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;
      // console.log(Type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);

      let docData: IHasHtmlFormat;
      let date: Date = new Date();

      docData = new Datas(...inputs, date)

      let template: IHasRender;
      template = new Display(this.docContainer, this.hiddenDiv, this.btnPrint)
      template.render(docData, type)
    } else {
      alert("ce n'est pas un tableau")
    }

  }

  private inputDatas(): [string, string, string,string,string,string,number, string, number, number, number] | void {
    const type = this.type.value;
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const address = this.address.value;
    const country = this.country.value;
    const town = this.town.value;
    const zip = this.zip.valueAsNumber;
    const product = this.product.value;
    const price = this.price.valueAsNumber;
    const quantity = this.quantity.valueAsNumber;
    const tva = this.tva.valueAsNumber;

    if(zip > 0 && price > 0 && quantity > 0 && tva > 0) {
      return [type, firstName, lastName,address,country,town,zip, product, price, quantity, tva]
    }
    alert('Les valeurs numérique doivent être supérieur à 0')
    return
  }


}
