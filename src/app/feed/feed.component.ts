import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Subtema } from '../model/Subtema';
import { SubtemasService } from '../service/subtemas.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  usuario = environment.usuario

  subtema: Subtema = new Subtema()
  listaSubtemas: Subtema[]

  constructor(
    private router: Router,
    private subtemasService: SubtemasService
  ) { }

  ngOnInit() {
    if (environment.token == ''){
      this.router.navigate(['/inicio'])
    }

    this.findAllSubtemas()
  }

  findAllSubtemas(){
    this.subtemasService.getAllSubtemas().subscribe((resp: Subtema[])=>{
      this.listaSubtemas = resp

    })
  }

  cadastrar(){
    this.subtemasService.postSubtema(this.subtema).subscribe({
      next: (resp:Subtema) =>{
      this.subtema = resp
      alert('Tema cadastrado com sucesso!')
      this.subtema = new Subtema()
      this.findAllSubtemas()


      },
      error: (erro) => {
        if(erro.status == 400){
          alert('Tema não pode ser cadastrado pois já existe um tema com está descrição');
        }
      },
    })

  }









}
