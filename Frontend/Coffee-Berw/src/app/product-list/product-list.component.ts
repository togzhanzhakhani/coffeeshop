import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../models/Product";
import {AppComponent} from "../app.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class ProductListComponent implements OnInit{
  currentProducts!: Product[];
  isItemOnHover:boolean = false;
  isLogged = AppComponent.isLogged;

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data)=>{
      console.log("init products", data);
      this.currentProducts = data;
    })
  }

  onProductsFound(products: Product[]){
    this.currentProducts = products;
    console.log("products in product component", this.currentProducts);
  }

  toggleSpecialItem(exp:boolean){
    this.isItemOnHover = exp;
  }
}
