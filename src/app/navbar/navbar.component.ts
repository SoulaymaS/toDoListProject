import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginSer: LoginserviceService) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginSer.seDeconnecter();
  }
}
