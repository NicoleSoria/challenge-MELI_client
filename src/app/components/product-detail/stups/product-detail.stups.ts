import { Observable, of } from 'rxjs';

export class ProductTestingService {
  getItem(id: string): Observable<Object> {
    return of(
      {
        author: { name: 'Tamara', lastname: 'Soria' },
        item: {
          id: '12345',
          title: 'product 1',
          free_shipping: true,
          picture: '',
          condition: 'new',
          price: {
            currency: 'ARS',
            amount: 1234,
            decimals: 12
          },
          sold_quantity: 2,
          description: 'description'
        }
      }
    )
  }
}
