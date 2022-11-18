import { Component, OnInit } from '@angular/core';
import carsData from './cars.json';

import { MatDialog } from '@angular/material/dialog';

import { ShowCarInfoComponent } from '../show-car-info/show-car-info.component';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.scss'],
})
export class SelectCarComponent implements OnInit {
  Cars: any = carsData;
  selectedManufacturer: string = 'noneBrand';
  manufacturerModels: any;
  selectedModel: string = 'noneModel';

  public isCollapsed: boolean = true;
  public isDialogOpened: boolean = false;
  public dialogRef: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  setManufacturer(event: any) {
    this.selectedManufacturer = event.target.value;

    this.manufacturerModels = this.Cars.filter(
      (car: any) => car.brand === this.selectedManufacturer
    )[0].models;
  }

  showInfo(brand: string, model: string) {
    if (this.isDialogOpened) return;
    if (
      this.selectedManufacturer === 'noneBrand' ||
      this.selectedModel === 'noneModel'
    )
      return alert('selecteaza un brand si model de autovehicul.');
    this.isDialogOpened = true;

    this.dialogRef = this.dialog.open(ShowCarInfoComponent, {
      width: '900px',
      height: '350',
    });

    this.dialogRef.componentInstance.brand = brand;
    this.dialogRef.componentInstance.model = model;

    this.dialogRef.afterClosed().subscribe((result: any) => {
      this.isDialogOpened = false;
      this.selectedManufacturer = 'noneBrand';
      this.selectedModel = 'noneModel';
    });
  }
}
