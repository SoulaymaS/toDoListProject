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
tabUsers=[];
log= false;
  constructor(private http:HttpClient, 
    private logSer: LoginserviceService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  

  ToLogin(userInfo){
    
  this.logSer.getConnected(userInfo).subscribe({
    next: (rep) => {
        for (const key in rep) {
        
          if (rep[key]['email'] == userInfo.email && rep[key]['login'] == userInfo.login ) {
            console.log(rep[key],userInfo);
            localStorage.setItem('auth',rep['isConnected']);
            this.router.navigateByUrl('todo-list');
            this.log=true;
          }
        }
        if (!this.log) {
          alert('Error authentication!');
        }
    },
    error:(error)=> {
      console.log('Problem in authentication');
    },
  });
  }
}
