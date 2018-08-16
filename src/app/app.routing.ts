import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { AuthGuard } from './guards';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastrarPersonagemComponent } from './cadastrar-personagem/cadastrar-personagem.component';
import { AprenderComponent } from './aprender/aprender.component';
import { FichaPersonagmComponent } from './ficha-personagm/ficha-personagm.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: CadastroUsuarioComponent },
    { path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard] },
    { path: 'cadastrarPersonagem', component: CadastrarPersonagemComponent, canActivate: [AuthGuard] },
    { path: 'aprender', component: AprenderComponent},
    { path: 'fichapersonagem', component: FichaPersonagmComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);