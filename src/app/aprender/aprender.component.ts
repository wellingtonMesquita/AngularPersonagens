import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprender',
  templateUrl: './aprender.component.html',
  styleUrls: ['./aprender.component.css']
})
export class AprenderComponent implements OnInit {



  isVariavel: boolean;

  umArray = ['Arroz', 'Feijao', 'Carne', 'Salada'];
  constructor() { }

  ngOnInit() {
    this.isVariavel = false;

  }

  mudar() {
    this.isVariavel = !this.isVariavel;
 }

 alerta(item): void {
    return alert(item);
 }


  verEvento(event): void {
    console.log('HelloWord');
 }
}
