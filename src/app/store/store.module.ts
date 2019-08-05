import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    BrowserModule,
    ModelModule,
  ]
})
export class StoreModule { }
