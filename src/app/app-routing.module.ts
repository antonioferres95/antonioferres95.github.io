//Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductosAddComponent } from './components/productos-add.component';
import { ProductoDetailComponent } from './components/producto-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosListComponent},
  {path: 'agregar-producto', component: ProductosAddComponent},
  {path: 'producto/:id', component: ProductoDetailComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
