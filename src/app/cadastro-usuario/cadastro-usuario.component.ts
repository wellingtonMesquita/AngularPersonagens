import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastro = {
    name: '',
    username: '',
    email: '',
    password: '',
  };
  returnUrl: string;
  error = '';





    constructor(private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService) {
     }

    ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';

  }

  cadastrar() {

  this.authenticationService.cadastrar(this.cadastro.name, this.cadastro.username, this.cadastro.email, this.cadastro.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                });
                console.log(this.error);
    }
  }

