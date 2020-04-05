import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBookingsComponent } from './your-bookings.component';

describe('YourBookingsComponent', () => {
  let component: YourBookingsComponent;
  let fixture: ComponentFixture<YourBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
