import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductService } from '../services/product.service';
import { startWith, map } from 'rxjs/operators';


import 'rxjs/add/operator/merge';

@Component({
  selector: 'app-product-list',
  template: `
     <div>
      <input type="text"
             placeholder="Search products"
             name="searchBox"
             [(ngModel)]="searchTerm"
             (keyup)="search()"/>
    </div>
    <app-product-item [product]="product"
                      (quantityChange)="onQuantityChange($event)"
                      *ngFor="let product of products$ | async"></app-product-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;
  public searchTerm: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadProductsList: Subject<void> = new Subject();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.searchSubject
        // .startWith(this.searchTerm)
        // .debounceTime(300)
        // .distinctUntilChanged()
        // .merge(this.reloadProductsList)
        .pipe((query) => this.productService.getProduct(this.searchTerm));
    
  }


  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onQuantityChange(change: ProductQuantityChange) {
    this.productService.changeQuantity(change.product.id, change.changeInQuantity)
        .subscribe((res) => this.reloadProductsList
        .next());
  }

  onCreate() {
    this.reloadProductsList.next();
  }
}