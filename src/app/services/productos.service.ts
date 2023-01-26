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
      console.log(this.url+'products/'+id)
      return this._http.get(this.url+'products/'+id, {observe: 'response'});
    }

    addProducto(producto:Producto){
      var params = JSON.stringify(producto);
      console.log(producto)
      console.log(params)
      return this._http.post(this.url+'products/add', params, {observe: 'response'});
    }

    makeFileRequest(url:string, params:Array<string>, file:File){
      return new Promise((resolve, reject) => {
        var formData:any = new FormData();
        var xhr = new XMLHttpRequest();

        //for(var)
      });
    }
}