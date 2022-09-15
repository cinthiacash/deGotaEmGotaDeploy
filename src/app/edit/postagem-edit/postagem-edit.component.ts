import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Subtema } from 'src/app/model/Subtema';
import { PostagemService } from 'src/app/service/postagem.service';
import { SubtemasService } from 'src/app/service/subtemas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()
  subtema: Subtema = new Subtema()
  listaTemas: Subtema[]
  idSubtema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private subtemaService: SubtemasService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllSubtemas()
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) =>{
      this.postagem = resp
    })
  }

  findByIdSubtema(){
    this.subtemaService.getByIdSubtema(this.idSubtema).subscribe((resp: Subtema) =>{
      this.subtema
    })
  }

  findAllSubtemas(){
    this.subtemaService.getAllSubtemas().subscribe((resp: Subtema[]) =>{
      this.listaTemas = resp
    })
  }

  atualizar(){
    this.subtema.id = this.idSubtema
    this.postagem.subtemas = this.subtema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert ('Postagem atualizada com sucesso!')
      this.router.navigate(['/feed'])
    })
  }

}
