//Angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Servicio
import { ProductoService } from '../services/productos.service';

//Modelos
import { Producto } from '../models/producto';

@Component({
  selector: 'producto-edit',
  templateUrl: '../views/productos-add.html',
  styleUrls: ['../views/productos-add.css'],
  providers: [ProductoService]
})
export class ProductoEditComponent {
  public titulo:string;
  public boton_text:string;
  public producto:Producto;
  public res:string;
  public display:boolean;
  public id:number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ){
    this.titulo = "Editar producto";
    this.res = '';
    this.boton_text = "Editar producto";
    this.display = false;
    this.id = 0;
    this.producto = new Producto(0, "", "", 0, 0, 0, 0, "", "", "",[])
  }

  ngOnInit(){
    console.log("Productos Edit cargado");
    this.getProducto();
  }

  getProducto(){
    this._route.params.forEach((params: Params) => {
      this.id = params['id'];
      this._productoService.getProducto(this.id)
      .subscribe(
      (response: any) => { 
        console.log(response);
        if(response.status == 200){
          this.producto = response.body;
        }
        else{
          this._router.navigate(['/error']);
        }
        },
      (error: any) => { 
        console.log(error); 
        } //Capturamos y mostramos el error, de existir
      );
    });
  }

  onSubmit(){
    this._productoService.editProducto(this.id, this.producto)
    .subscribe(
      (result: any) => { 
        this.display = true;
        if(result.status == 200){
          this.res = "Producto editado satisfactoriamente"
        }
        else{
          this.res = "Algo salió mal. El producto no pudo ser editado"
        }
        },
      (error: any) => { 
        console.log(error); 
        } //Capturamos y mostramos el error, de existir
      );  
  }


}