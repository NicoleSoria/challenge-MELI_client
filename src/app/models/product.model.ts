export class ProductsModel {
    id: string;
    title: string;
    free_shipping: boolean;
    picture: string;
    condition: string;
    price: number;

    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.free_shipping = product.free_shipping;
        this.picture = product.picture;
        this.condition = product.condition;
        this.price = product.price;
    }
}
