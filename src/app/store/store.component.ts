import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product-repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less']
})
export class StoreComponent implements OnInit {

  public selectedCategory: string = null;

  constructor(private productRepository: ProductRepository) {}

  ngOnInit() {
  }

  get products(): Product[] {
    return this.productRepository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.productRepository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
