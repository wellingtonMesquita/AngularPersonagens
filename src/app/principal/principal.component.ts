import { Component, OnInit } from '@angular/core';
import { first } from '../../../node_modules/rxjs/operators';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  users: User[] = [];
  url = "assets/img/p.jpg"
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
      this.users = users;
  });
  }
 
 


    
}
