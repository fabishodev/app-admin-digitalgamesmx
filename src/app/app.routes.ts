import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'productos', loadChildren:() => import('./pages/productos/productos.module').then(module => module.ProductosModule)},  
    { path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})

export class AppRouterModule {}