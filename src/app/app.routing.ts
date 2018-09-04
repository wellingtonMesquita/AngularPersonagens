import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { AuthGuard } from './guards';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastrarPersonagemComponent } from './cadastrar-personagem/cadastrar-personagem.component';
import { AprenderComponent } from './aprender/aprender.component';
import { FichaPersonagmComponent } from './ficha-personagm/ficha-personagm.component';
import { ArquivoComponent } from './arquivo/arquivo.component';
//Defini as rotas do Sistema. 
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: CadastroUsuarioComponent },
                                                        //O cantive ele meio que cria uma restriçao de acesso de pagina
    { path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard] },
    { path: 'cadastrarPersonagem', component: CadastrarPersonagemComponent, canActivate: [AuthGuard] },
    { path: 'aprender', component: AprenderComponent},
    { path: 'fichapersonagem', component: FichaPersonagmComponent, canActivate: [AuthGuard]},
    { path: 'arquivo', component: ArquivoComponent},

    //pagina principal ou pagina root
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);