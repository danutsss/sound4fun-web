import { Component, OnInit } from '@angular/core';

// Font Awesome icons.
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isList: boolean = false;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor() {}

  ngOnInit(): void {}

  menuHandler(flag: boolean) {
    return flag ? (this.isList = true) : (this.isList = false);
  }
}
