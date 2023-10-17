import {ProductService} from "../product.service";
import {Product} from "./Product";

export interface BasketWithProduct{
  user:string,
  products:Product
}
