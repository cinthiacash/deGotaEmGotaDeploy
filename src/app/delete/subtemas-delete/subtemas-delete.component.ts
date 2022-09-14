import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subtema } from 'src/app/model/Subtema';
import { SubtemasService } from 'src/app/service/subtemas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-subtemas-delete',
  templateUrl: './subtemas-delete.component.html',
  styleUrls: ['./subtemas-delete.component.css']
})
export class SubtemasDeleteComponent implements OnInit {

  subtema: Subtema = new Subtema()
  idSubtema: number

  constructor(
    private subtemaService: SubtemasService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.idSubtema = this.route.snapshot.params['id']
    this.findByIdSubtema(this.idSubtema)
  }

  findByIdSubtema(id: number){
    this.subtemaService.getByIdSubtema(this.idSubtema).subscribe((resp: Subtema)=>{
      this.subtema = resp
    })
  }

  apagar(){
    this.subtemaService.deleteSubtema(this.idSubtema).subscribe(()=>{
      alert('Tema apagado com sucesso!')
      this.router.navigate(['/feed'])
    })
  }

}
