import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  cols = 3;
  category: string | undefined

  constructor(){}
    ngOnInIt(): void {

    }

onColumnsCountChange(colsNum: number): void {
  this.cols= colsNum;
  }

onShowCategory(newCategory: string): void{
  this.category = newCategory

}

}
