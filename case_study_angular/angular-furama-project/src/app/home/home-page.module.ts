import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomePageComponent} from './home-page/home-page.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class HomePageModule { }
