import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    handleError: any;
    constructor(private http: HttpClient) { }

    login(usernameOrEmail: string, password: string) {
        return this.http.post<any>(`http://localhost:5000/api/auth/signin`, { usernameOrEmail, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                
                    localStorage.clear();
                    localStorage.setItem('token', user.accessToken);
                
                

                return user;
            }));
    }

    cadastrar(name:string,username: string ,email:string, password: string){
        return this.http.post<any>(`http://localhost:5000/api/auth/signup`, { username, password,name,email })
        .pipe(catchError(this.handleError))

    }

    cadastrarPersonagem(name:string,classe: string ,raca:string, elemento: string){
        return this.http.post<any>(`http://localhost:5000/api/cadastrar`, { name, classe,raca,elemento })
        .pipe(catchError(this.handleError))

    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }
}