//Angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Servicio
import { ProductoService } from '../services/productos.service';

//Modelos
import { Producto } from '../models/producto';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'producto-detail',
  templateUrl: '../views/producto-detail.html',
  styleUrls: ['../views/producto-detail.css'],
  providers: [ProductoService]
})
export class ProductoDetailComponent {
  public titulo:string;
  public producto:Producto | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ){
    this.titulo = "Detalles del producto"
  }

  ngOnInit(){
    console.log("Producto-detail Component cargado");
  }

  getProducto(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._productoService.getProducto(id)
      .subscribe(
      (result: any) => { 
        console.log(result);
        this.producto = result.body;
        },
      (error: any) => { 
        console.log(error); 
        } //Capturamos y mostramos el error, de existir
      );
    });

    
      
  }
}