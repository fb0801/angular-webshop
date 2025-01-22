import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';

const ROWS_HEIGHT: { [id:number]: number} = {1:400, 3:355, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined
  products: Array<Product> | undefined
  sort = 'desc'
  count = '12'
  productSubscription: Subscription | undefined

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts()
      
  }

getProducts() : void {
  this.storeService.getAllProducts(this.count, this.sort)
  .subscribe((_products) => {
    this.products = _products
  })
}

onColumnsCountChange(colsNum: number): void {
  this.cols= colsNum;
  this.rowHeight = ROWS_HEIGHT[this.cols]
  }

onShowCategory(newCategory: string): void{
  this.category = newCategory

}

onAddToCart(product: Product): void {
  this.cartService.addToCart({
    product: product.image,
    name: product.title,
    price: product.price,
    quantity: 1,
    id: product.id
  })
  
}

}
