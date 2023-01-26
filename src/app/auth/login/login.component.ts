import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    'userName':'',
    'password':''
  };
  constructor(private userService: UserService, private router: Router) {  }

  ngOnInit(): void {
    
  }
  
  onSubmit():void{
    if (this.verifyUserContent()) {
      /* this.userService.authUser(this.user).subscribe(response =>{   
        this.authLogin(response);
      }); */
      //solo simula el inicio
      this.authLogin(true);
    }
  }
/**
   * Verifica que los campos de login tengan contenido.
   */
  verifyUserContent(){
    return this.user.userName.length !== 0 && this.user.password.length !== 0;
  }
/**
 * Autoriza que el usuario existe, envia a la pagina principal, y guarda el usuario
 * en el sessionStorage.
 * @param isUser booleano que viene del servicio en back que nos autoriza si es usuario.  
 */
  authLogin(isUser: boolean){
    if (isUser) {
        sessionStorage.setItem('userName', this.user.userName);
        this.router.navigate(['main-page']);
      }else{
        console.log('No es usuario');
      }
  }
  

}
