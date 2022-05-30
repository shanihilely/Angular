import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;
  constructor(private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {product: Product}) => {
      this.product = data.product;
      });
  }

}
