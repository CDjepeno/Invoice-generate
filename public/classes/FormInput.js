import { Datas } from '../classes/Datas.js';
export class FormInput {
    constructor() {
        this.form = document.getElementById("form");
        this.type = document.getElementById("type");
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.address = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        this.submitFormListener();
    }
    submitFormListener() {
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const inputs = this.inputDatas();
        if (Array.isArray(inputs)) {
            const [Type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;
            // console.log(Type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
            let docData;
            let date = new Date();
            docData = new Datas(...inputs, date);
            console.log(docData.htmlFormat());
        }
        else {
            alert("ce n'est pas un tableau");
        }
    }
    inputDatas() {
        const Type = this.type.value;
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
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [Type, firstName, lastName, address, country, town, zip, product, price, quantity, tva];
        }
        alert('Les valeurs numérique doivent être supérieur à 0');
        return;
    }
}