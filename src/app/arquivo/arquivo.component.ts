import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DesenharService } from '../desenhar.service';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})
export class ArquivoComponent implements OnInit {
  constructor(private http: HttpClient,private desenho:DesenharService) {}
  ngOnInit() {
    
  }


  
  top = 10;
  a = 20;
  b = 20;
  c = 20;
  d = 20;
  dx = 5;//a tava de variação (velocidade) horizontal do objeto
  dy = 5;//a tava de variação (velocidade) vertical do objeto
  x = 400;//posição horizontal do objeto (com valor inicial)
  y = 400;//posição vertical do objeto (com valor inicial)
  WIDTH = 500;//largura da área retangular
  HEIGHT = 200;//altura da área retangular
  ativar = false;
  @ViewChild('canvas') canvas: ElementRef;
  @Input() public width = 400;
  @Input() public height = 400;

  private cx: CanvasRenderingContext2D;  
  
  public ngAfterViewInit() {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    
    
    // we'll implement this method to start capturing mouse events
  
  }
  ativarf():void{
    if(this.ativar == false){
    this.ativar = true;
    }else{
      this.ativar = false;
    }
  }
  desenhar(event):void{
    this.desenho.limpar(this.cx,this.width,this.height);
    this.desenho.desenhar(this.cx,this.x,this.y);
    if(this.ativar == true){ 
      this.y  = event.clientX + 5;
      this.x = event.clientY  - 140;
    }
    console.log(this.x);
    console.log(event);
  }

  salvar(event):void{
    this.desenho.salvar(this.cx,this.x,this.y);
  }
//observaçoes se o mouse sair da tela apagar o desenho de algum jeito.
//pois esta bugando e pode acarretar em problemas.
   


}







  
