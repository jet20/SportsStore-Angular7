import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: "store", component: StoreComponent },
  { path: "**", redirectTo: '/store' },
];

@NgModule({
  imports: [
    StoreModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
