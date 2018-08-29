import { Component, OnInit } from '@angular/core';
import { first } from '../../../node_modules/rxjs/operators';
import { User } from '../models';
import { UserService, AuthenticationService } from '../services';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  users;
  url = 'assets/img/p.jpg';
  iten = 'fogo';
  iten2 = 'Humano';
  elementos = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
  });
  }






trazerPersonagenB() {
  this.userService.getFiltro(this.iten, this.iten2).pipe(first()).subscribe(users => {
    this.users = users;
});
}

trazerPersonagenC(personagem: any): void {

localStorage.setItem('personagen', personagem.toString());

}


}
