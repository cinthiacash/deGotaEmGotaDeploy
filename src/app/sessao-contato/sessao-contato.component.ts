import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessao-contato',
  templateUrl: './sessao-contato.component.html',
  styleUrls: ['./sessao-contato.component.css']
})
export class SessaoContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
