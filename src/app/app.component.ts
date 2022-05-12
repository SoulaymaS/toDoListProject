import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoProject';
  constructor(private http: HttpClient) { }
  // ngOnInit(): void {
  //   this.http.post('https://todolistproject-e238b-default-rtdb.firebaseio.com/users.json', {
  //     "email": "soulayma@gmail.com", "login": "azerty"
  //   }).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
}
