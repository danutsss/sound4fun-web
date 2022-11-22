import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  markerPos: any;
  center: google.maps.LatLngLiteral = {
    lat: 44.14005689752779,
    lng: 28.610037174878265,
  };
  constructor() {}

  ngOnInit(): void {
    this.markerPos = new google.maps.LatLng(
      44.14005689752779,
      28.610037174878265
    );
  }
}
