import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarInfoComponent } from './show-car-info.component';

describe('ShowCarInfoComponent', () => {
  let component: ShowCarInfoComponent;
  let fixture: ComponentFixture<ShowCarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCarInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
