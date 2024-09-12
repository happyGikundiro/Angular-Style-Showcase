import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../model/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss',
  standalone: true,
  imports:[CommonModule]
})
export class ChildOneComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
