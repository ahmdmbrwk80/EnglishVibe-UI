import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-inactive-group',
  templateUrl: './inactive-group.component.html',
  styleUrls: ['./inactive-group.component.css']
})
export class InactiveGroupComponent {

  constructor(private _AuthService: AuthService, private _Router: Router ) {}

  role:string='';
  isloading: boolean = false;
  apierror: string = '';
  
  

  ngOnInit() {
    // Fetch the user's role when the component initializes
    this._AuthService.inactiveGroup().subscribe((role) => {
      // Use the role to navigate the user
      if (role === 'admin') {
        this._Router.navigate(['../../setting/admin']); // Navigate to the admin route
      } else if (role === 'student') {
        this._Router.navigate(['../home']); // Navigate to the student route
      }
    });
  }



  }



