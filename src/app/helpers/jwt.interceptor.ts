import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


// Interceptador algo muito interessante, ele intercepta uma requisiçao,e modifica ele.
//Nesse caso, ele ta colocando o token no header de todas as requisiçoes tanto get quanto post
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let token = localStorage.getItem('token');
        if (token) {
            
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${token}`
                }
            });
        }
        
        return next.handle(request);
    }
}