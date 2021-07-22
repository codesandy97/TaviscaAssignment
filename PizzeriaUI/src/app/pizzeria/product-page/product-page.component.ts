import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceService } from '../../Core/Services/shared-service.service';
import { UUID } from 'angular2-uuid';
import { BASE_CONSTANTS } from 'src/app/Core/Constants/baseConstants';
import { APP_CONSTANTS } from 'src/app/Core/Constants/constants';
import { PizzaSize } from 'src/app/Core/Properties/enum';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public item = {
    smallPrice: '',
    mediumPrice: '',
    largePrice: ''
  };
  public order = {
    OrderID : '',
    selectedpizzas : [],
    sideItems: [],
    totalExpense: 0
  }
  @Input() public Products: any;
  @Output() refreshOrder: EventEmitter<any> = new EventEmitter();
  public Toppings: any = [];
  public addOns: any = [];
  public expense: number = 0;
  public placedOrder: any;
  public sideItems: any = [];
  constructor(private sharedServ: SharedServiceService,
    private modalService: NgbModal) { 
  }

  ngOnInit(): void {
    this.getToppings();
    this.getAddOns();
     this.getSides();
  }

  public open(item: any, content: any) {
    this.item = item;
    this.expense = item.totalPrice;
    this.order.totalExpense = this.expense;
    this.modalService.open(content, { size: 'lg' });
  }

  public getToppings() {
    const apiDetails = {
      url : BASE_CONSTANTS.Base_URL + APP_CONSTANTS.toppingApiDetails,
      options: {}
    }
    this.sharedServ.Get(apiDetails).subscribe((res) => {
      this.Toppings = res;
    });
  }

  public getAddOns() {
    const apiDetails = {
      url : BASE_CONSTANTS.Base_URL + APP_CONSTANTS.addOnApiDetails,
      options: {}
    }
    this.sharedServ.Get(apiDetails).subscribe((res) => {
      this.addOns = res;
    });
  }

  public getSides() {
    const apiDetails = {
      url : BASE_CONSTANTS.Base_URL + APP_CONSTANTS.sideItemApiDetails ,
      options: {}
    }
    this.sharedServ.Get(apiDetails).subscribe((res) => {
      this.sideItems = res;
    });
  }

  public toppingClicked(event: any, price:any) {
    if(event.target.checked) {
      this.expense = this.expense + price;
    } else {
      this.expense = this.expense - price;
    }
  }

  public pizzaSelected(event: any, price:any) {
    this.expense = price;
  }

  public updatePrice(value: any) {
    this.expense = value;
  }

  public placeOrder() {
    this.order.OrderID = UUID.UUID();
    this.modalService.dismissAll("Order Placed Sucessfully");
    this.mapPayload();
    const apiDetails = {
      url : BASE_CONSTANTS.Base_URL + APP_CONSTANTS.postOrder,
      payload: this.order
    }
    this.sharedServ.Post(apiDetails).subscribe((res)=> {
      if(res) {
        this.placedOrder = res;
        this.refreshOrder.emit();
        alert("Order placed successfully");
      }
    });
  }

  public mapPayload() {
    this.order.selectedpizzas.forEach((e:any)=> {
      if(e.size === PizzaSize.Small) {
        e.mediumPrice = 0;
        e.largePrice = 0;
      } else if (e.size === PizzaSize.Medium) {
        e.smallPrice = 0;
        e.largePrice = 0;
      } else {
        e.smallPrice = 0;
        e.mediumPrice = 0;
      }
      return e;
    });
  }

}
