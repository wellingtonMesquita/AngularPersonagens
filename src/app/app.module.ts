import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// used to create fake backend


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { FooterComponent} from './footer/footer.component';
import { NavbarComponent} from './navbar/navbar.component';
import { CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastrarPersonagemComponent } from './cadastrar-personagem/cadastrar-personagem.component';
import { AprenderComponent } from './aprender/aprender.component';
import { FichaPersonagmComponent } from './ficha-personagm/ficha-personagm.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        FooterComponent,
        NavbarComponent,
        CadastroUsuarioComponent,
        PrincipalComponent,
        CadastrarPersonagemComponent ,
        AprenderComponent,
        FichaPersonagmComponent   ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
