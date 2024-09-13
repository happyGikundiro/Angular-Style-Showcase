import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of,  } from 'rxjs';
import { ChildOneComponent } from './child-one.component';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../model/model';

describe('ChildOneComponent', () => {
  let component: ChildOneComponent;
  let fixture: ComponentFixture<ChildOneComponent>;
  let mockProductService: Partial<ProductService>;

  beforeEach(async () => {
    mockProductService = {
      getProducts: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ChildOneComponent],
      providers: [{ provide: ProductService, useValue: mockProductService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOneComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on initialization', () => {
    const mockProducts: Product[] = [
      { id: 1, title: 'Product 1', price: 100, description: 'Desc 1', category: 'Category 1', image: 'image1.jpg', rating: { rate: 4.5, count: 120 } },
      { id: 2, title: 'Product 2', price: 200, description: 'Desc 2', category: 'Category 2', image: 'image2.jpg', rating: { rate: 4.0, count: 50 } },
    ];

    (mockProductService.getProducts as jest.Mock).mockReturnValue(of(mockProducts));

    fixture.detectChanges();

    expect(component.products).toEqual(mockProducts);
    expect(component.errorMessage).toBeNull();
  });
});