import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { first } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-ficha-personagm',
  templateUrl: './ficha-personagm.component.html',
  styleUrls: ['./ficha-personagm.component.css']
})
export class FichaPersonagmComponent implements OnInit {
  users: {};
  iten: any ;
  url = 'assets/img/p.jpg';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.iten = localStorage.getItem('personagen');
    this.userService.getFiltro2(this.iten).pipe(first()).subscribe(users => {
      this.users = users;
  });
  }

}
