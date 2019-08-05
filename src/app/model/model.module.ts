import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static-data-source';
import { ProductRepository } from './product-repository';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StaticDataSource,
    ProductRepository,
  ]
})
export class ModelModule { }
