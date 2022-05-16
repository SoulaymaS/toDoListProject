import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  link = 'https://todolistproject-e238b-default-rtdb.firebaseio.com/users.json';
  constructor(private http: HttpClient,
    private router : Router) { }

  getConnected(ident) {
    return this.http.get(`${this.link}`);
  }
  
  getRegistered(ident){
   return this.http.post(`${this.link}`,ident);
  }
  seDeconnecter() {
    localStorage.removeItem('auth');
  }

  isConnected() { 
  let token = localStorage.getItem('auth');
  if (token) return true;
  else return false;
}
}
