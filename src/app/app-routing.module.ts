import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { HomeComponent } from './Components/home/home.component';
import { InstructorComponent } from './Components/instructor/instructor.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"instructor", component:InstructorComponent},
  {path:"aboutus", component:AboutusComponent},
  {path:"contact", component:ContactComponent},
  {path:"setting", loadChildren:()=>import('./setting/setting.module').then((m)=>m.SettingModule)},
  
  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
