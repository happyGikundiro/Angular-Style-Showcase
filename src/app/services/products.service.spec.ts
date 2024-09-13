import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../model/model';
import { ProductService } from './products.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const mockProducts: Product[] = [
    { id: 1, title: 'Product 1', price: 100, description: 'Description 1', category: 'Category 1', image: 'image1.jpg', rating: { rate: 4.5, count: 120 } },
    { id: 2, title: 'Product 2', price: 200, description: 'Description 2', category: 'Category 2', image: 'image2.jpg', rating: { rate: 4.0, count: 50 } }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
    it('should return an Observable<Product[]> when the request is successful', () => {
      service.getProducts().subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(service['apiUrl']);
      expect(req.request.method).toBe('GET');
      req.flush(mockProducts);
    });
  });
});
