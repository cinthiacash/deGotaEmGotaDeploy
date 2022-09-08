import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  isCpf: boolean = true


  constructor() { }

  ngOnInit(){

  }

  onChangeCheckBox(){
  
  if(this.isCpf == false){
    this.isCpf = true
  }
  else{
    this.isCpf = false
  }
}

}
