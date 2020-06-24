import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShippingCostComponent } from './components/shipping-cost/shipping-cost.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductTableComponent } from './pages/product-table/product-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './pages/product-table/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ShippingCostComponent,
    AboutComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductTableComponent,
    NavbarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
