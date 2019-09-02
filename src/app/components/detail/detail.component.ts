import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service'


import Product from 'src/app/models/product';
import FilterModel from 'src/app/models/filterModel';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  constructor(public productService: ProductService) { }

  productList: Array<Product>
  filters: Array<FilterModel>
  navbar: Array<any>
  pageCount: number





  ngOnInit() {
    this.productList = this.productService.getProduct()
    this.pageCount = Math.round(this.productList.length / 20)
    this.filters = this.productService.filter()
    this.navbar = this.productService.nav()
  }

}
