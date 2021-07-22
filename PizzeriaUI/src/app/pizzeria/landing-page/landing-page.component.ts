import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BASE_CONSTANTS } from 'src/app/Core/Constants/baseConstants';
import { APP_CONSTANTS, URL_CONSTANT } from 'src/app/Core/Constants/constants';
import { SharedServiceService } from 'src/app/Core/Services/shared-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public products: any = [];
  public toppings: any = [];
  public addOns: any = [];
  public expense: number = 0;
  public orders: any = [];
  public orderCount: number = 0
  constructor(private sharedServ: SharedServiceService, 
    public fb: FormBuilder, 
    public router:Router) { 
  }

 
  ngOnInit(): void {
    this.getPizza();
    this.getOrders();
  }

  public getPizza() {
    const apiDetails = {
      url : BASE_CONSTANTS.Base_URL + APP_CONSTANTS.pizzaApiDetails,
      options: {}
    }
    this.sharedServ.Get(apiDetails).subscribe((res) => {
      this.products = res;
    }, (err)=>{
      alert("Error");
    });
  }

  public getOrders() {
    const apiDetails = {
      url : BASE_CONSTANTS.Base_URL + APP_CONSTANTS.orderApiDetails,
      options: {}
    }
    this.sharedServ.Get(apiDetails).subscribe((res) => {
      this.orders = res;
      this.orderCount = this.orders.length;
    });
  }

  public refreshOrderCount() {
    this.getOrders();
  }

  public showOrders(event: any) {
    this.router.navigateByUrl(URL_CONSTANT.order);
  }


}
