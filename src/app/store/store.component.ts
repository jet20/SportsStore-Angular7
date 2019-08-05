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
  public productsPerPage: number = 4;
  public selectedPage: number = 1;

  constructor(private productRepository: ProductRepository) {}

  ngOnInit() {
  }

  get products(): Product[] {
    var pageIndex = this.productsPerPage * (this.selectedPage - 1);
    console.log(pageIndex);
    return this.productRepository.getProducts(this.selectedCategory)
      .slice(pageIndex, this.productsPerPage + pageIndex);
  }

  get categories(): string[] {
    return this.productRepository.getCategories();
  }
  
  get pageNumbers(): number[]  {
    var total = this.productRepository.getProducts(this.selectedCategory).length;
    return Array(Math.ceil(total / this.productsPerPage)).fill(0).map((x, i) => i + 1);
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePageSize(newSize: number) {
    this.productsPerPage = newSize;
    this.changePage(1);
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  
}
