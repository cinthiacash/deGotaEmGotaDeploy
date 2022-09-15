import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessao-contato',
  templateUrl: './sessao-contato.component.html',
  styleUrls: ['./sessao-contato.component.css']
})
export class SessaoContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  enviar(){
    alert('Mensagem enviada com sucesso!')
  }

}
