import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournaFormComponent } from './tourna-form.component';

describe('TournaFormComponent', () => {
  let component: TournaFormComponent;
  let fixture: ComponentFixture<TournaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
