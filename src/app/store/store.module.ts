import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';

@NgModule({
  declarations: [StoreComponent, CounterDirective],
  imports: [
    BrowserModule,
    ModelModule,
  ]
})
export class StoreModule { }
