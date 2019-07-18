import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-new-cmpcomponent',
  templateUrl: './new-cmpcomponent.component.html',
  styleUrls: ['./new-cmpcomponent.component.css']
})
export class NewCmpcomponentComponent implements OnInit {
  newcomponent = "Entered in new component created";
  todaydate;
   constructor(private myservice: MyserviceService) {}

   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
   }

}