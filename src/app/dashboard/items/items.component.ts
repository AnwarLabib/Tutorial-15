import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "./product.model";
import { ProductsService } from './products.service';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './items.component.html'
})

export class ItemsComponent implements OnInit  {

  products: Product[] = [
    new Product('Ahaha Piano', 14000, 'Shadi Barghash'),
    new Product('Music Player', 500, 'Shadi Barghash')
  ];

  constructor(private prodService : ProductsService) {}

  ngOnInit() {
    this.retreiveAllProducts();
  }

  retreiveAllProducts() : void {
    this.prodService.getAllProducts().then((prods : Product[]) => this.products = prods)
  }

}