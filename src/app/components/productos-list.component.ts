//Angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Servicio
import { ProductoService } from '../services/productos.service';

//Modelos
import { Producto } from '../models/producto';

@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.html',
  styleUrls: ['../views/productos-list.css'],
  providers: [ProductoService]
})
export class ProductosListComponent {
  public titulo:string;
  public producto:Producto | undefined;
  public productos:Array<Producto>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ){
    this.titulo = "Listado de productos";
    this.productos = [];
  }

  ngOnInit(){
    console.log("Productos List cargado");
    this.showPosts();
  }

  showPosts(){
    this._productoService.getProductos()
    .subscribe(
      (result: any) => { 
        console.log(result); 
        this.productos = [...result.products]; 
        console.log(this.productos);
        }, //Guardamos el resultado en una variable del componente
      (error: any) => { 
        console.log(error); 
        } //Capturamos y mostramos el error, de existir
      );      
  }
}