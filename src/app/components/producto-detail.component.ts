//Angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Servicio
import { ProductoService } from '../services/productos.service';

//Modelos
import { Producto } from '../models/producto';

@Component({
  selector: 'producto-detail',
  templateUrl: '../views/producto-detail.html',
  styleUrls: ['../views/producto-detail.css'],
  providers: [ProductoService]
})
export class ProductoDetailComponent {
  public titulo:string;
  public producto:Producto;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ){
    this.titulo = "Detalles del producto"
    this.producto = new Producto(0, "", "", 0, 0, 0, 0, "", "", "",[])
  }

  ngOnInit(){
    console.log("Producto-detail Component cargado");
    this.getProducto();
  }

  getProducto(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._productoService.getProducto(id).subscribe(
      (response: any) => { 
        if(response.status == 200){
          this.producto = response.body;
        }
        else{
          this._router.navigate(['/error']);
        }
        },
      (error: any) => { 
        console.log(error); 
        }
      );
    });
  }

}