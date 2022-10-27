import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientaleComponent } from './ambientale.component';

describe('AmbientaleComponent', () => {
  let component: AmbientaleComponent;
  let fixture: ComponentFixture<AmbientaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbientaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
