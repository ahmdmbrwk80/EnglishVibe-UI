import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  isloading: boolean = false;
  apierror: string = '';
  registerForm: FormGroup = new FormGroup({
    FirstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    LastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    UserName: new FormControl(),
    // Email: new FormControl(null, [Validators.required, Validators.email]),
    Email: new FormControl(),
    Password: new FormControl(),
    ConfirmPassword: new FormControl(),
    PhoneNumber: new FormControl(),
    StudyPlan: new FormControl(),
  });

  handleregister(registerForm: FormGroup) {
    this.isloading = true;
    if (registerForm.valid) {
      console.log(registerForm);

      this._AuthService.register(registerForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this.isloading = false;
            this._Router.navigate(['../login']);
          }
        },
        error: (err) => {
          this.isloading = false;
          // this.apierror = err.error.errors.msg;
          // for (let key of err) {
          //   for (let message of err[key]) {
          //     this.apierror += `${key}: ${message}\n`;
          //   }
          // }
          console.log(err.error);
        },
      });
    } else console.log('Not Valid');
  }
}

















// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/auth.service';



// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

//   constructor(private _AuthService:AuthService, private _Router:Router) {
    
    
//   }
//   isloading:boolean=false;
//   apierror:string='';
// registerForm:FormGroup=new FormGroup({
//   Firstname:new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(8)]),
// Lastname:new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(8)]),
// Email:new FormControl(null, [Validators.required, Validators.email]),
// password:new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
// Confirmpassword:new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
// phoneNumber:new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
// });

// handleregister(registerForm:FormGroup)
// {
//   this.isloading=true;
//   if(registerForm.valid)
//   {
//     console.log(registerForm)

//    this._AuthService.register(registerForm.value).subscribe({
//     next:(response)=>{
//       if(response.message ==='success')
//       {
//         this.isloading = false;
// this._Router.navigate(['../login'])
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
