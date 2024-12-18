import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: 'filters.component.html'
})
export class FiltersComponent {

categories = ['shoes', 'sports']

constructor() {}
ngOnInit(): void {

}

}
