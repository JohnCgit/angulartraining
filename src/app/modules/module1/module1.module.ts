import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UsedMaterialModule } from 'src/app/used-material.module';



@NgModule({
  declarations: [
    Module1Component,
    UserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsedMaterialModule
  ],
  exports:[
    Module1Component
  ]
})
export class Module1Module { }
