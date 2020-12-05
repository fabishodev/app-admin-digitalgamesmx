import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'productos', loadChildren:() => import('./pages/productos/productos.module').then(module => module.ProductosModule)},
    { path: 'codigos', loadChildren:() => import('./pages/codigos/codigos.module').then(module => module.CodigosModule)},
    { path: 'clientes', loadChildren:() => import('./pages/clientes/clientes.module').then(module => module.ClientesModule)},
    { path: 'ventas', loadChildren:() => import('./pages/ventas/ventas.module').then(module => module.VentasModule)},            
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})

export class AppRouterModule {}