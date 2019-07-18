import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Test App';
  todaydate;httpdata;
  constructor(private myservice: MyserviceService, private http: Http) { }
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/users"). map((res:Response) => res.json()).subscribe((data) => {
        this.displaydata(data);
        }
      )
   }
   displaydata(data) {this.httpdata = data;}
  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  isavailable = true;

  myClickFunction(event) {
    this.isavailable = false;
  }

  changemonths(event) {
    alert("Changed month from the Dropdown");
  }
}
