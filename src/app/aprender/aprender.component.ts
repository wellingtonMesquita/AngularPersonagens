import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprender',
  templateUrl: './aprender.component.html',
  styleUrls: ['./aprender.component.css']
})
export class AprenderComponent implements OnInit {



  isVariavel:boolean;
  umArray = ["Arroz","Feijao","Carne","Salada"];
  constructor() { }

  ngOnInit() {
    this.isVariavel = false;

  }
 
 mudar(){
    if(this.isVariavel){
        this.isVariavel = false;
    }else{
        this.isVariavel = true;
    }
 }

 alerta(item){
    alert(item);
 }


 verEvento(event){
    console.log(event.MouseEvent.type);
 }
}
