import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ActiveGroupComponent } from './active-group/active-group.component';
import { ActiveStudentsComponent } from './active-students/active-students.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { InactiveGroupComponent } from './inactive-group/inactive-group.component';


@NgModule({
  declarations: [
    AdminComponent,
    ActiveGroupComponent,
    ActiveStudentsComponent,
    WaitingListComponent,
    InactiveGroupComponent
  
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
