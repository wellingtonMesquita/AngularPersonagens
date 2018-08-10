import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { PrincipalComponent } from './principal/principal.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent// canActivate: [AuthGuard] 
    },
    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: CadastroUsuarioComponent },
    { path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);