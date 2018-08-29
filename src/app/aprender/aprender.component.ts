import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-aprender',
  templateUrl: './aprender.component.html',
  styleUrls: ['./aprender.component.css']
})
export class AprenderComponent implements OnInit {

  personagem = {
    name: '',
    classe: '',
    raca: '',
    elemento: ''

  };
  items = [];
  itemsf = [];
  name:any;
  classe:any;
  raca:any;


  constructor() { }

  ngOnInit() {}

   adc(){
     let personagem = {
      name: '',
      classe: '',
      raca: '',
      elemento: ''
     }
     personagem.name = this.personagem.name;
     personagem.classe = this.personagem.classe;
     personagem.raca = this.personagem.raca;
     personagem.elemento =this.personagem.elemento;

      console.log(this.personagem);
      this.items.push(personagem);
      console.log(this.items);
      console.log(this.itemsf);
   }

    transform( ){
      if (this.items && this.items.length){
          return this.itemsf = this.items.filter(item =>{
              if (this.name.toLowerCase && item.name.toLowerCase().indexOf(this.name.toLowerCase()) === -1){
                console.log("1");
                  return false;
              }
              if (this.raca && item.raca.toLowerCase().indexOf(this.raca.toLowerCase()) === -1){
                console.log("2");
                  return false;
              }
              if (this.classe && item.classe.toLowerCase().indexOf(this.classe.toLowerCase()) === -1){
                console.log("3");
                  return false;
              }
              console.log(this.items);
              return true;
              
         })
      }
   }

   
  }

