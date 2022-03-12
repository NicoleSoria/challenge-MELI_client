import { IPrice } from './price.model';

export interface IProducts {
    id: string;
    title: string;
    free_shipping: boolean;
    picture: string;
    condition: string;
    price: IPrice;
}
