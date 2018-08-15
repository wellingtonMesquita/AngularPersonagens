import { Component, OnInit } from '@angular/core';
import { first } from '../../../node_modules/rxjs/operators';
import { User } from '../models';
import { UserService, AuthenticationService } from '../services';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  users;
  url = "assets/img/p.jpg"
  iten = "default";
  iten2;
  elementos = [];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
      this.users = users;
  });
  }

  trazerPersonagen(){
    if(this.iten!="default"){
      this.elementos.length = 0;
      this.userService.getAll().pipe(first()).subscribe(users => { 
        this.users = users;
          this.users.forEach(element => {
            this.elementos.push(element[this.iten]);
          });
      });  
  }else{
    this.userService.getAll().pipe(first()).subscribe(users => { 
      this.users = users;
    });  
    this.elementos.length = 0;
  }
}
trazerPersonagenB(){
  this.userService.getFiltro(this.iten,this.iten2).pipe(first()).subscribe(users => { 
    this.users = users;
});
}


    
}
