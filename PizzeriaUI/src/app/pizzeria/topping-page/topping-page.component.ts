import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PizzaSize } from 'src/app/Core/Properties/enum';
import { SharedServiceService } from '../../Core/Services/shared-service.service';

@Component({
  selector: 'app-topping-page',
  templateUrl: './topping-page.component.html',
  styleUrls: ['./topping-page.component.scss']
})
export class ToppingPageComponent implements OnInit {
  
  @Input() public Toppings: any;
  @Input() public expense: any;
  @Input() public item: any;
  @Input() public addOns: any;
  @Input() public order: any;
  @Input() public sideItems: any;
  @Output() priceChanged: EventEmitter<any> = new EventEmitter();
  public addedToppings: any = [];
  public addedAddons: any = [];
  public pizzaPrice: any;
  public pizzaQuantity: any;
  public addOnPrice: any;
  public addedSides: any = [];
  constructor(private sharedServ: SharedServiceService) {
    //this.Toppings = [];
   }

  ngOnInit(): void {
    this.pizzaPrice = +this.item.smallPrice;
    this.item.size = PizzaSize.Small;
    this.order.selectedpizzas.push(this.item);
  }

  public sidesClicked(event: any, item: any) {
    if(event.target.checked) {
      this.addedSides.push(item);
      this.calculateExpense();
    } else {
      const indx = this.addedSides.findIndex((x:any) => {x.name == item.name});
      this.addedSides.splice(indx,1);
      this.expense = this.expense - item.totalPrice;
      this.priceChanged.emit(this.expense);0
    }
    
  }

  public toppingClicked(event: any, item: any) {
    if(event.target.checked) {
      this.addedToppings.push(item);
      this.calculateExpense();
    } else {
      const indx = this.addedToppings.findIndex((x:any) => {x.toppingName == item.toppingName});
      this.addedToppings.splice(indx,1);
      this.expense = this.expense - item.toppingPrice;
      this.priceChanged.emit(this.expense);
    }
  }

  public addOnClicked(event: any, item: any) {
    this.addOnPrice = +item.price;
    this.item.addOn = item;
    this.calculateExpense();
    //this.priceChanged.emit(this.expense);
  }


  public pizzaSelected(event: any, price:any, size: any, product:any) {
    this.pizzaPrice = +price;
    this.expense = price;
    if(size === 'medium') {
      this.item.size = PizzaSize.Medium;
    } else if(size === 'large') {
      this.item.size = PizzaSize.Large;
    } else {
       this.item.size = PizzaSize.Small;
    }
    this.item = product;
    this.calculateExpense();
  //  this.priceChanged.emit(this.expense);
  }

  public changeQuantity(event: any) {
    if(event.target.value) {
      this.pizzaQuantity = +event.target.value;
    }
    this.item.quantity = this.pizzaQuantity;
    this.calculateExpense();
 }

  public calculateExpense() {
    if(this.pizzaQuantity > 0) {
      this.item.quantity = this.pizzaQuantity;
      this.expense = (this.pizzaPrice * this.pizzaQuantity);
    } else {
      this.item.quantity = 1;
      this.expense = this.pizzaPrice;
    }
    this.expense = this.expense +  (this.addOnPrice ? this.addOnPrice : 0);
    this.addedToppings.forEach((e:any) => {
      if(e.toppingPrice) {
        this.expense = this.expense + e.toppingPrice;
      }
    });
    this.addedSides.forEach((e:any) => {
      if(e.totalPrice) {
        this.expense = this.expense + e.totalPrice;
      }
    })
    this.order.selectedpizzas.pop();
    this.item.toppings = this.addedToppings;
    this.order.selectedpizzas.push(this.item);
    this.order.totalExpense = this.expense;
    this.order.sideItems = this.addedSides;
    this.priceChanged.emit(this.expense);
  }

}
