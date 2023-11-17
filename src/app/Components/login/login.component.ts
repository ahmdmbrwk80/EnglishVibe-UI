import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  role: string = '';
  isloading: boolean = false;
  apierror: string = '';
  loginForm: FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required]),
  });

  handlelogin(loginForm: FormGroup) {
    this.isloading = true;
    if (loginForm.valid) {
      console.log(loginForm);

      this._AuthService.login(loginForm.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message === 'success') {
            localStorage.setItem('userToken', response.token);
            this._AuthService.decodeuserdata();
            this.isloading = false;

            console.log('success');

            if (response.role.includes('admin')) {
              this._Router.navigate(['../../setting/admin']);
            } else {
              this._Router.navigate(['../home']);
            }
          }
        },
        error: (err) => {
          this.isloading = false;
          this.apierror = err.error.errors;
          console.log(this.apierror);
        },
      });
    }
    this.isloading = false;
  }
}

// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   constructor(private _AuthService:AuthService, private _Router:Router) {

//   }
//   isloading:boolean=false;
//   apierror:string='';
// loginForm:FormGroup=new FormGroup({
//   Email:new FormControl(null, [Validators.required, Validators.email]),
// password:new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
// });

// handlelogin(loginForm:FormGroup)
// {
//   this.isloading=true;
//   if(loginForm.valid)
//   {
//     console.log(loginForm)

//    this._AuthService.login(loginForm.value).subscribe({
//     next:(response)=>{
//       if(response.message ==='success')
//       {
//         this.isloading = false;
//     this._Router.navigate(['../home'])
//       }
//     } ,
//     error:(err)=>
//     {
//       this.isloading=false;
//       this.apierror=err.error.errors.msg;

//     }

//    })
//   }
// }
// }
