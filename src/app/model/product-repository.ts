import { StaticDataSource } from './static-data-source';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductRepository {

    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource){
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index);
        });
    }

    getProducts(category: string = null): Product[] {
        return this.products.filter(x => category == null || x.category == category);
    }

    getProduct(id: number): Product {
        return this.products.find(x => x.id == id);
    }

    getCategories() : string[] {
        return this.categories;
    }
}
