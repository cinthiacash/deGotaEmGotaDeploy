import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule} from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { SubtemasComponent } from './subtemas/subtemas.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { PostagemComponent } from './postagem/postagem.component';
import { FeedComponent } from './feed/feed.component';
import { SubtemasEditComponent } from './edit/subtemas-edit/subtemas-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { SubtemasDeleteComponent } from './delete/subtemas-delete/subtemas-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { AlertasComponent } from './alertas/alertas.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastrarComponent,
    HomeComponent,
    InicioComponent,
    SubtemasComponent,
    MenuUsuarioComponent,
    PostagemComponent,
    FeedComponent,
    SubtemasEditComponent,
    PostagemEditComponent,
    SubtemasDeleteComponent,
    PostagemDeleteComponent,
    UserEditComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule  
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
