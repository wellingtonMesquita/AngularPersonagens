import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-aprender',
  templateUrl: './aprender.component.html',
  styleUrls: ['./aprender.component.css']
})
export class AprenderComponent implements OnInit {

  data = new Date(2016, 6, 21, 16, 53, 54);

	pagina: number = 0;
	qtdPorPagina: number = 5;

	alunos: any;
	alunosTotal = [
		{id: 1, nome: 'Fulano'},
		{id: 2, nome: 'Ciclano'},
		{id: 3, nome: 'Beltrano'},
		{id: 11, nome: 'Fulano'},
		{id: 12, nome: 'Ciclano'},
		{id: 13, nome: 'Beltrano'},
		{id: 21, nome: 'Fulano'},
		{id: 22, nome: 'Ciclano'},
		{id: 23, nome: 'Beltrano'},
		{id: 31, nome: 'Fulano'},
		{id: 32, nome: 'Ciclano'},
		{id: 33, nome: 'Beltrano'},
		{id: 41, nome: 'Fulano'},
		{id: 42, nome: 'Ciclano'},
		{id: 43, nome: 'Beltrano'},
		{id: 51, nome: 'Fulano'},
		{id: 52, nome: 'Ciclano'},
		{id: 53, nome: 'Beltrano'},
		{id: 61, nome: 'Fulano'},
		{id: 62, nome: 'Ciclano'},
		{id: 63, nome: 'Beltrano'},
		{id: 71, nome: 'Fulano'},
		{id: 72, nome: 'Ciclano'},
		{id: 73, nome: 'Beltrano'},
		{id: 81, nome: 'Fulano'},
		{id: 82, nome: 'Ciclano'},
		{id: 83, nome: 'Beltrano'},
		{id: 91, nome: 'Fulano'},
		{id: 92, nome: 'Ciclano'},
		{id: 93, nome: 'Beltrano'},
		{id: 94, nome: 'Beltrano'}
	];
	http: any;

	constructor() {
		this.popularAlunos();
  }
  ngOnInit(){}

	paginar($event: any) {
		this.pagina = $event - 1;
		this.popularAlunos();
	}

	popularAlunos() {
		this.alunos = [];
		for (let i = ( this.pagina * this.qtdPorPagina ); i < (this.pagina * this.qtdPorPagina + this.qtdPorPagina); i++) {
			if (i >= this.alunosTotal.length) {
				break;
			}
			this.alunos.push(this.alunosTotal[i]);
		}
	}

inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', foto);
      if(foto.type == "application/pdf"){
      this.http.post('http://localhost:8080/fotos', formData)
        .subscribe(resposta => console.log('Upload ok.'));
      }else{
        console.log("Não e um pdf");
      }
    }
  }
}