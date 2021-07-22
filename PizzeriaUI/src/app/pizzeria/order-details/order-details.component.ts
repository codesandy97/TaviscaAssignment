import { Component, OnInit } from '@angular/core';
import { BASE_CONSTANTS } from 'src/app/Core/Constants/baseConstants';
import { APP_CONSTANTS } from 'src/app/Core/Constants/constants';
import { PizzaSize } from 'src/app/Core/Properties/enum';
import { SharedServiceService } from 'src/app/Core/Services/shared-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  public orders: any = [];
  public showOrderDetail: boolean = false;
  public selectedOrder: any = undefined;
  public selectedPizza: any = undefined;
  public selectedSideItems: any;
  constructor(public sharedServ: SharedServiceService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    const apiDetails = {
      url : BASE_CONSTANTS.Base_URL + APP_CONSTANTS.orderApiDetails,
      options: {}
    }
    this.sharedServ.Get(apiDetails).subscribe((res) => {
      this.orders = res;
    });
  }

  public OrderClicked(order: any) {
    this.selectedOrder = order;
    this.selectedPizza = order.selectedpizzas[0];
    this.selectedSideItems = order.sideItems;
  }

  public SetSizeLabel(selectedPizza: any) {
    if (selectedPizza.size === PizzaSize.Small) {
      return 'Small 7 inch';
    } else if (selectedPizza.size === PizzaSize.Medium) {
      return 'Medium 10 inch';
    } else {
      return 'Large 11 inch';
    }
  }

}
