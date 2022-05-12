import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, 
    private logSer: LoginserviceService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  

  ToLogin(userInfo){
  this.logSer.getConnected(userInfo).subscribe({
    next: (rep) => {
      console.log(rep);
      for (const key in rep) {
        if (rep[key]['email'] == userInfo.email && rep[key]['login'] == userInfo.login ) {
          this.router.navigateByUrl('todo-list');
          
        }
        else
          alert("Erreur d'authentification");
      }
      //localStorage.setItem('our-token',rep['token']);
      //this.router.navigateByUrl('todo-list');
    },
    error:(error)=> {
      console.log('Problem in authentication');
    },
  });
  }
}
