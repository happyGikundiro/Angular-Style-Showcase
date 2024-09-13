import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../model/model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HoverEffectDirective } from '../../../Hover-directive/hover-effect.directive';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss',
  standalone: true,
  imports: [CommonModule, HoverEffectDirective]
})
export class ChildOneComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  errorMessage: string | null = null;
  private productSubscription!: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productSubscription = this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        
      },
      error: (error) => {
        console.error('Error fetching products', error);
        this.errorMessage = 'Failed to load products. Please try again later.';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
