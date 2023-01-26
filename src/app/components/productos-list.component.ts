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
  public confirm:number;
  public producto:Producto | undefined;
  public productos:Array<Producto>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ){
    this.titulo = "Listado de productos";
    this.productos = [];
    this.confirm=-1;
  }

  ngOnInit(){
    console.log("Productos List cargado");
    this.listProductos();
  }

  confirmYes(id:number){
    this.confirm=id;
  }

  confirmCancel(){
    this.confirm=-1;
  }

  listProductos(){
    this._productoService.getProductos()
    .subscribe(
      (response: any) => { 
        console.log(response); 
        this.productos = [...response.products]; 
        console.log(this.productos);
        }, //Guardamos el responseado en una variable del componente
      (error: any) => { 
        console.log(error); 
        } //Capturamos y mostramos el error, de existir
      );      
  }

  onDeleteProducto(id:number){
    this._productoService.deleteProducto(id)
    .subscribe(
      (response: any) => { 
        if(response.status == 200){
          let index = this.productos.map(e => e.id).indexOf(id);
          this.productos.splice(index,1);
        }
        else{
          this._router.navigate(['/home']);
          console.log("Algo salio mal al eliminar el producto");
        }
        },
      (error: any) => { 
        console.log(error); 
        } //
  )};

}