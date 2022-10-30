import { Component, OnInit } from '@angular/core';

// Font Awesome icons.
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  faPhoneSquare = faPhoneSquare;
  faEnvelope = faEnvelope;
  faMap = faMap;

  constructor() {}

  ngOnInit(): void {}
}
