import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  isCpf: boolean = true
  user: User = new User()


  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  onChangeCheckBox(){
  
  if(this.isCpf == false){
    this.isCpf = true
  }
  else{
    this.isCpf = false
  }
}

cadastrar(){

      this.authService.cadastrar(this.user).subscribe((resp: User)=>{
      this.user = resp
      this.router.navigate(['/login'])
       this.alertas.showAlertSuccess ("Usuário cadastrado com sucesso!")
   })
  
}





}
