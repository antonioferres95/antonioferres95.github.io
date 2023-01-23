import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.html',
  styleUrls: ['../views/home.css']
})
export class HomeComponent {
  public titulo:string;

  constructor(){
    this.titulo = "Webapp de productos"
  }

  ngOnInit(){
    console.log("Home Component cargado");
  }
}