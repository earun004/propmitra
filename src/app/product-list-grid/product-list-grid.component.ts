import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-product-list-grid',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.css']
})
export class ProductListGridComponent implements OnInit {
	
	value: number = 10;
  highValue: number = 75;
  options: Options = {
    floor: 0,
    ceil: 100,
	translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return 'Min: ' + value + 'L';
        case LabelType.High:
          return 'Max: ' + value + 'L';
        default:
          return value + 'L';
      }
    }
	//translate: (value: number): string => {
      //return value + 'L';
    //}
  };

  constructor() { }

  ngOnInit() {
  }

}
