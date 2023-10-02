import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../models/Product";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  currentProducts!: Product[];

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
}
