import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  basketList!:Orders[]
  isLogged = AppComponent.isLogged
  constructor(private orderService: OrdersService) {
  }
  userId = AppComponent.usernameID
  ngOnInit(){
    this.orderService.userOrders(this.userId).subscribe((data)=>{
      console.log(data);
      this.basketList = data;
    })
  }
}
