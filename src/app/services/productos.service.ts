//Angular
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//Modelos
import { Producto } from '../models/producto';

//Otros
import { GLOBAL } from './global';

@Injectable()
export class ProductoService{
    public url:string;

    constructor(private _http:HttpClient){
      this.url = GLOBAL.urlAPI;
    }

    getProductos(){
      return this._http.get(this.url+'products?skip=5&limit=16')
      .pipe(map((res: any) => res));
    }

    getProducto(id:number){
      return this._http.get(this.url+'products/'+id, {observe: 'response'});
    }

    addProducto(producto:Producto){
      var params = JSON.stringify(producto);
      return this._http.post(this.url+'products/add', params, {observe: 'response'});
    }

    editProducto(id:number, producto:Producto){
      var params = JSON.stringify(producto);
      return this._http.patch(this.url+'products/'+id, params, {observe: 'response'});
    }

    deleteProducto(id:number){
      return this._http.delete(this.url+'products/'+id, {observe: 'response'});
    }
}