import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ActiveGroupComponent } from './active-group/active-group.component';
import { InactiveGroupComponent } from './inactive-group/inactive-group.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { ActiveStudentsComponent } from './active-students/active-students.component';

const routes: Routes = [
{path:'',redirectTo:'admin',pathMatch:'full'},
{path:"admin", component:AdminComponent , children:[
  {path:'' , redirectTo:'admin',pathMatch:'full'},
  {path:'ins' , component:InstructorsComponent},
  {path:'active' , component:ActiveGroupComponent},
  {path:'Inactive' , component:InactiveGroupComponent},
  {path:'Waiting' , component:WaitingListComponent},
  {path:'actStudent' , component:ActiveStudentsComponent},
] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
