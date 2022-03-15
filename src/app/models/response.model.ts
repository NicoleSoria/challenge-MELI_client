import { IProducts, IProduct } from './product.model';

export class ListResponseModel {
  author: AuthorModel;
  items: IProducts[];
  categories: string[];
}

export class DetailResponseModel {
  author: AuthorModel;
  item: IProduct;
}

export class AuthorModel {
  name: string;
  lastname: string;
}
