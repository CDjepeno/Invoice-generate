export class Print {
    constructor(el) {
        this.el = el;
    }
    print() {
        document.body.innerHTML = this.el.innerHTML; // Permet d'imprimer que la div
        window.print();
        document.location.reload();
    }
}
