import { Component } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: '../views/error.html',
  styleUrls: ['../views/error.css']
})
export class ErrorComponent {
  public titulo:string;

  constructor(){
    this.titulo = "¡Ups! Algo salió mal..."
  }

  ngOnInit(){
    console.log("Error Component cargado");
  }
}