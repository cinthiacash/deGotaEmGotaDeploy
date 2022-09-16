import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Subtema } from '../model/Subtema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { SubtemasService } from '../service/subtemas.service';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  usuario = environment.usuario
  id = environment.id

  user: User = new User()
  idUser = environment.id

  subtema: Subtema = new Subtema()
  listaSubtemas: Subtema[]
  idSubtema: number
  nomeSubtema: string

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  key = 'data'
  reverse = true

  formulario: FormGroup

  constructor(
    private router: Router,
    private authService: AuthService,
    private subtemasService: SubtemasService,
    private postagemService: PostagemService,
    private alertas: AlertasService


  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == ''){
      this.router.navigate(['/inicio'])
    }

    this.findAllSubtemas()
    this.findAllPostagens()
    
  }

  findAllSubtemas(){
    this.subtemasService.getAllSubtemas().subscribe((resp: Subtema[])=>{
      this.listaSubtemas = resp

    })
  }

  findByIdSubtema(){
    this.subtemasService.getByIdSubtema(this.idSubtema).subscribe((resp: Subtema) =>{
      this.subtema = resp 
    })

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


  cadastrar(){
    this.subtemasService.postSubtema(this.subtema).subscribe({
      next: (resp:Subtema) =>{
      this.subtema = resp
      this.alertas.showAlertSuccess('Subtema cadastrado com sucesso!')
      this.subtema = new Subtema()
      this.findAllSubtemas()

      },
      error: (erro) => {
        if(erro.status == 400){
          this.alertas.showAlertDanger('O subtema não pode ser cadastrado pois já existe!');
        }
      },
    })

  }

  publicar(){
    this.subtema.id = this.idSubtema
    this.postagem.subtemas = this.subtema

    this.user.id = this.idUser
    this.postagem.usuarios = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.alertas.showAlertSuccess('Projeto publicado com sucesso!')
      this.postagem = new Postagem()
      this.findAllPostagens()

    })

  }


}
