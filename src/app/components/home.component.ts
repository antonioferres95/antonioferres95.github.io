import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.html',
  styleUrls: ['../views/home.css']
})
export class HomeComponent {
  public titulo:string;

  constructor(){
    this.titulo = "Bienvenido/a a esta webapp de productos"
  }

  ngOnInit(){
    console.log("Home Component cargado");
  }
}