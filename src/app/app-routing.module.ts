import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SubtemasDeleteComponent } from './delete/subtemas-delete/subtemas-delete.component';
import { SubtemasEditComponent } from './edit/subtemas-edit/subtemas-edit.component';
import { FeedComponent } from './feed/feed.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio',pathMatch: 'full'},

  {path: 'menu', component: MenuComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'menu-usuario', component: MenuUsuarioComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'subtemas-edit/:id', component: SubtemasEditComponent},
  {path: 'subtemas-delete/:id', component: SubtemasDeleteComponent}
  
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
