import { Component } from '@angular/core';
import { HomeProductsComponent } from './components/home-products/home-products.component';

import { PopularCategoriesComponent } from './components/popular-categories/popular-categories.component';
import { OffersHomeComponent } from './components/offers-home/offers-home.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeProductsComponent,

    PopularCategoriesComponent,
    OffersHomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
