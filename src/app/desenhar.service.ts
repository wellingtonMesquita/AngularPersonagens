import { Injectable } from '@angular/core';
import { desenho } from './arquivo/desenhos';

@Injectable({
  providedIn: 'root'
})
export class DesenharService {

  constructor() { }

dados:desenho;

desenhos = [];
limpar(cx,width,height){
 cx.clearRect(0, 0, width, height);
 this.desenhos.forEach(element => {
  cx.beginPath();
  cx.arc(element.x, element.y, 10, 0, Math.PI*2, true);
  cx.fill(); 
});
}

desenhar(cx,y,x){
  cx.beginPath();
  cx.arc(x, y, 10, 0, Math.PI*2, true);
  cx.fill();
  
}
salvar(cx,y,x){
  this.dados = new desenho();
  this.dados.x = x;
  this.dados.y = y;
  this.desenhos.push(this.dados);
}

}