
import { Component } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'angular16';


  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  data:any;
  constructor( ){
 
  }
}


