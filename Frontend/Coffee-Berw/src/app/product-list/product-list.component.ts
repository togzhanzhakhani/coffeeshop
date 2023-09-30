import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../models/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  productsFound!: Product[];
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data)=>{
      console.log("init products", data);
    })
  }

  onProductsFound(products: Product[]){
    this.productsFound = products;
    console.log("products in product component", this.productsFound);
  }
}
