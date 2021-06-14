import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgbCarouselModule
  ]
})
export class HomePageModule { }
