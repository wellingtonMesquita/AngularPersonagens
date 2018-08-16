import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`http://localhost:5000/api/buscar`);
    }
    getFiltro(filtro1,filtro2) {
        return this.http.get<User[]>("http://localhost:5000/api/buscar/" + filtro1 + "/"+ filtro2);
    }
    getFiltro2(filtro1) {
        return this.http.get<User[]>("http://localhost:5000/api/buscar/" + filtro1);
    }
}
