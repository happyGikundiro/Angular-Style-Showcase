import { Component } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../model/model';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
