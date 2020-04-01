import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfFormComponent } from './turf-form.component';

describe('TurfFormComponent', () => {
  let component: TurfFormComponent;
  let fixture: ComponentFixture<TurfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
