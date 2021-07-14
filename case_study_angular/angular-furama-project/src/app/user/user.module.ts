import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
    declarations: [
      CreateUserComponent,
      EditUserComponent,
      ListUserComponent,
      ChangePasswordComponent],
  exports: [
    CreateUserComponent,
    EditUserComponent,
    ListUserComponent,
    ChangePasswordComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule
    ]
})
export class UserModule { }
