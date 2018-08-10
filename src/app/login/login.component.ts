import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    login = {
        username:"",
        password:""
    }
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
 
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}

    ngOnInit() {
        
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/principal';
    }

    // convenience getter for easy access to form fields
    

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
       

        this.loading = true;
        this.authenticationService.login(this.login.username, this.login.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
