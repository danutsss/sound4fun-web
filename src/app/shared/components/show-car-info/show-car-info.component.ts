import { Component, OnInit } from '@angular/core';
import carsData from '../select-car/cars.json';

@Component({
  selector: 'app-show-car-info',
  templateUrl: './show-car-info.component.html',
  styleUrls: ['./show-car-info.component.scss'],
})
export class ShowCarInfoComponent implements OnInit {
  Cars: any = carsData;
  brand!: string;
  model!: string;
  information!: any;
  constructor() {}

  ngOnInit(): void {
    for (let car of this.Cars) {
      car.models.filter((model: any) => {
        if (this.model === model.name) {
          this.information = model;
          console.log(this.information);
        }
      });
    }
  }
}
