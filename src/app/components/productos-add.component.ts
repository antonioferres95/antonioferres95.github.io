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
  public boton_text:string;
  public producto:Producto;
  public res:string;
  public display:boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ){
    this.titulo = "Agregar productos";
    this.res = '';
    this.display = false;
    this.boton_text = "Agregar producto";
    this.producto = new Producto(0, "", "", 0, 0, 0, 0, "", "", "",[])
  }

  ngOnInit(){
    console.log("Productos Add cargado");
  }

  onSubmit(){
    this._productoService.addProducto(this.producto).subscribe(
      (response: any) => { 
        this.display = true;
        if(response.status == 200){
          this.res = "Producto agregado satisfactoriamente con id: " + response.body["id"]
        }
        else{
          this.res = "Algo salió mal. El producto no pudo ser añadido"
        }
        },
      (error: any) => { 
        console.log(error); 
        } 
      );  
  }
}