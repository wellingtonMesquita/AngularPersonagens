import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


//Servico de autenticaçao 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    handleError: any;
    //metodo construtor
    constructor(private http: HttpClient) { }
    //Aqui vai mandar a requisiçao para o banco e esperar o retorno do token de autenticaçao 
    login(usernameOrEmail: string, password: string) {
        return this.http.post<any>(`http://localhost:5000/api/auth/signin`, { usernameOrEmail, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                    // o retorno vem agora com o pipe

                    localStorage.clear();
                    //Aqui envio o tokem para o cache para ser usado depois
                    localStorage.setItem('token', user.accessToken);


                //Retorno o Usuario
                return user;
            }));
    }

    //Corpo da requisiçao cadastrar, no qual recebe os parametros do componente.
    cadastrar(name: string, username: string , email: string, password: string) {
        return this.http.post<any>(`http://localhost:5000/api/auth/signup`, { username, password, name, email })
        .pipe(catchError(this.handleError));

    }

    cadastrarPersonagem(name: string, classe: string , raca: string, elemento: string) {
        return this.http.post<any>(`http://localhost:5000/api/cadastrar`, { name, classe, raca, elemento })
        .pipe(catchError(this.handleError));

    }


    logout() {
       //Aqui ele ta removendo o token do cache para logoutW
        localStorage.removeItem('token');
    }
}
