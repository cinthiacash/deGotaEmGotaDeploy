import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subtema } from 'src/app/model/Subtema';
import { AlertasService } from 'src/app/service/alertas.service';
import { SubtemasService } from 'src/app/service/subtemas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-subtemas-edit',
  templateUrl: './subtemas-edit.component.html',
  styleUrls: ['./subtemas-edit.component.css']
})
export class SubtemasEditComponent implements OnInit {

  subtema: Subtema = new Subtema()

  constructor(
    private subtemaService: SubtemasService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdSubtema(id)
  }

  findByIdSubtema(id: number){
    this.subtemaService.getByIdSubtema(id).subscribe((resp: Subtema)=>{
      this.subtema = resp
    })
  }

  atualizar(){
    this.subtemaService.putSubtema(this.subtema).subscribe((resp: Subtema) => {
      this.subtema = resp
      this.alertas.showAlertInfo('Subtema atualizado com sucesso!')
      this.router.navigate(['/feed'])
    })
  }

}
