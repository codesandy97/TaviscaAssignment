import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToppingPageComponent } from './topping-page/topping-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PizzeriaRouting } from './pizzeria.route';
import { SharedServiceService } from '../Core/Services/shared-service.service';
import { CoreModule } from '../Core/core.module';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ToppingPageComponent,
    ProductPageComponent,
    OrderDetailsComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    PizzeriaRouting
  ]
})
export class PizzeriaModule { }
