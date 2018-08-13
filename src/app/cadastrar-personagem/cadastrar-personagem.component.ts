import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '../_services';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { first } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-cadastrar-personagem',
  templateUrl: './cadastrar-personagem.component.html',
  styleUrls: ['./cadastrar-personagem.component.css']
})
export class CadastrarPersonagemComponent implements OnInit {

  personagem = {
    name:"",
    classe:"",
    raca:"",
    elemento:""

  };
  returnUrl: string;
  error = '';
  constructor(private userService: UserService,private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/principal';
  }
 
 

cadastrarPersonagem(){

this.authenticationService.cadastrarPersonagem(this.personagem.name,this.personagem.classe,this.personagem.raca,this.personagem.elemento)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.error = error;
              });
              
  }
   
    
}
