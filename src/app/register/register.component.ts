import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  tabUsers=[];
  constructor(private logSer: LoginserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  ToRegister(U) {
    this.logSer.getRegistered({
      email: U.email,
      login: U.login
    }).subscribe({
      next: (rep) => {
      
        this.router.navigateByUrl('login');

      },
      error: (error) => {
        console.log('Problem registering');
      },
    });
  }
}

