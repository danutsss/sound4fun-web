import { Component, OnInit } from '@angular/core';

// Font Awesome icons.
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
})
export class TopSectionComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhoneSquare = faPhoneSquare;

  constructor() {}

  ngOnInit(): void {}
}
