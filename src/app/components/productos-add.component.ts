//Angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Servicio
import { ProductoService } from '../services/productos.service';

//Modelos
import { Producto } from '../models/producto';

@Component({
  selector: 'productos-add',
  templateUrl: '../views/productos-add.html',
  styleUrls: ['../views/productos-add.css'],
  providers: [ProductoService]
})
export class ProductosAddComponent {
  public titulo:string;
  public producto:Producto;
  public res_post:string;
  public display_post:boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ){
    this.titulo = "Agregar productos";
    this.res_post = '';
    this.display_post = false;
    this.producto = new Producto(0, "", "", 0, 0, 0, 0, "", "", "",[])
  }

  ngOnInit(){
    console.log("Productos Add cargado");
  }

  addProducto(){
    this._productoService.addProducto(this.producto)
    .subscribe(
      (result: any) => { 
        console.log(result);
        this.display_post = true;
        if(result.status == 200){
          this.res_post = "Producto agregado satisfactoriamente con id: " + result.body["id"]
        }
        else{
          this.res_post = "Algo salió mal. El producto no pudo ser añadido"
        }
        },
      (error: any) => { 
        console.log(error); 
        } //Capturamos y mostramos el error, de existir
      );  
  }
}