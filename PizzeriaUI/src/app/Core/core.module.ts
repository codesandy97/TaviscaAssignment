import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServiceService } from './Services/shared-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedServiceService]
})
export class CoreModule { }