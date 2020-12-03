import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosRouterModule } from './productos.routes';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [ProductosComponent, NuevoComponent, ListaComponent],
  imports: [
    CommonModule,
    ProductosRouterModule
  ]
})
export class ProductosModule { }
