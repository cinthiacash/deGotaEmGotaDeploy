import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Subtema } from '../model/Subtema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { SubtemasService } from '../service/subtemas.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  usuario = environment.usuario

  user: User = new User()
  idUser = environment.id

  subtema: Subtema = new Subtema()
  listaSubtemas: Subtema[]
  idSubtema: number
  nomeSubtema: string
 

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPostagem: string

  key = 'data'
  reverse = true
  

  constructor(
    private router: Router,
    private authService: AuthService,
    private postagemService: PostagemService

  ) { }

  ngOnInit() {
    if (environment.token == ''){
      this.router.navigate(['/inicio'])
    }

    this.findAllPostagens()
    
  }

  findAllPostagens(){
  
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
    
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp
    })
   }



   







}
