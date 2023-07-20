import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProductService } from 'src/app/services/product/product.service';
import FilterModel from 'src/app/models/filterModel';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {



  constructor(public productService: ProductService) {

  }
  productList: Array<Product>
  filters: Array<FilterModel>
  navbar: Array<any>
  pageCount: number
  p: string | number = 1;
  count: string | number = 20;

  ngOnInit() {
    this.productList = this.productService.getProduct()
    this.pageCount = Math.round(this.productList.length / 20)
    this.filters = this.productService.filter()
    this.navbar = this.productService.nav()
  }


}