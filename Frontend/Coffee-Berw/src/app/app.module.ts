import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BasketComponent } from './basket/basket.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    AuthenticationComponent,
    BasketComponent,
    CategoryComponent,
    ProductDetailComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
