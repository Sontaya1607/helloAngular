import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'helloAngular';

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    let data = {username: "Golf", feedback: "I love it"};
    this.http.post<any>('http://localhost:3000/api', data).subscribe(result=>{
      alert(JSON.stringify(result));
    })
  }
}
