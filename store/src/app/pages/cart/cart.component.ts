import { Component, OnInit } from '@angular/core';
//import { Cart } from 'src/app/models/cart.model';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import {loadStripe} from  "@stripe/stripe-js"
//import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html' 
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [{
    product: "https://via.placeholder.com/150",
    name: "snickers",
    price: 150,
    quantity: 1,
    id: 1,
  }]}

  dataSource: Array<CartItem> = []
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(private cartService: CartService, private http: HttpClient)  { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items
    })
    
  }

getTotal(items: Array<CartItem>): number {
  return this.cartService.getTotal(items)
}

onClearCart(): void {
  this.cartService.clearCart()
}

onRemoveFromCart(item: CartItem): void{
  this.cartService.removeFromCart(item)
}

onAddQuantity(item: CartItem): void {
  this.cartService.addToCart(item)
}

onRemoveQuantity(item: CartItem): void {
  this.cartService.removeQuantity(item)
}

onCheckout(): void {
  this.http.post('http://localhost:4242/checkout', {
    items: this.cart.items
  }).subscribe(async(res: any) => {
    let stripe = await loadStripe('')
    stripe?.redirectToCheckout({
      sessionId: res.id
    })
  })
}
}
