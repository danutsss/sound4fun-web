import { Component, OnInit } from '@angular/core';

// Font Awesome icons.
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faPhoneSquare = faPhoneSquare;
  faEnvelope = faEnvelope;
  faMap = faMap;
  constructor() {}

  ngOnInit(): void {}
}
