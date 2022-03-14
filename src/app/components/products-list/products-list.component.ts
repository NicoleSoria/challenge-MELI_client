import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CategoriesObsService } from '../../services/categories-obs.service';
import { IProducts } from '../../models/product.model';
import { SpinnerObsService } from '../../services/spinner-obs.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  query: string;
  products: IProducts[] = [];
  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoriesObsService: CategoriesObsService,
    private router: Router,
    private spinnerObsService: SpinnerObsService) { }

  ngOnInit() {
   
    // Obtengo de la query de la ruta el texto a buscar
    this.activatedRoute.queryParams.subscribe((resp) => {
      this.query = resp.search;
      this.getItems();
      this.showEmptySatate();
    });
  }

  getItems() {
    // Llamo al servicio que consulta la api para la busqueda de productos que coincidan con el texto ingresdo
    this.productService.getItems(this.query).subscribe((resp: any) => {
      this.products = resp.items.splice(0, 4);

      // Asigno las categorias correspondientes a la respuesta de la consulta para que sean notificadas a sus suscriptores
      this.categoriesObsService.toAssingCategories(resp.categories);
    });
  }

  openProduct(idProduct: string) {
    this.router.navigate([`items/${idProduct}`]);
  }

  // Función para ocultar el empty state si el loading esta activo
  showEmptySatate() {
    this.spinnerObsService.getValue().subscribe((resp) => {
      this.isLoading = resp;
    });
  }

}
