import { Observable, of } from 'rxjs';

export class ProductsTestingService {
  getItems(): Observable<Object> {
    return of(
      {
        author: { name: 'Tamara', lastname: 'Soria' },
        items: [
          {
            id: '12345',
            title: 'product 1',
            free_shipping: true,
            picture: '',
            condition: 'new',
            price: {
              currency: 'ARS',
              amount: 1234,
              decimals: 12
            }
          },
          {
            id: '12345',
            title: 'product 1',
            free_shipping: true,
            picture: '',
            condition: 'new',
            price: {
              currency: 'ARS',
              amount: 1234,
              decimals: 12
            }
          },
          {
            id: '12345',
            title: 'product 1',
            free_shipping: true,
            picture: '',
            condition: 'new',
            price: {
              currency: 'ARS',
              amount: 1234,
              decimals: 12
            }
          },
          {
            id: '12345',
            title: 'product 1',
            free_shipping: true,
            picture: '',
            condition: 'new',
            price: {
              currency: 'ARS',
              amount: 1234,
              decimals: 12
            }
          },
          {
            id: '12345',
            title: 'product 1',
            free_shipping: true,
            picture: '',
            condition: 'new',
            price: {
              currency: 'ARS',
              amount: 1234,
              decimals: 12
            }
          },
          {
            id: '12345',
            title: 'product 1',
            free_shipping: true,
            picture: '',
            condition: 'new',
            price: {
              currency: 'ARS',
              amount: 1234,
              decimals: 12
            }
          }
        ],
        categories: ['Cat1', 'Cat2']
      }
    )
  }
}