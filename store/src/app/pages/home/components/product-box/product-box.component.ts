import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html' 
})
export class ProductBoxComponent implements OnInit{
@Input() fullwidthMode = false;

  constructor() { }

  ngOnInit(): void {
      
  }
}
