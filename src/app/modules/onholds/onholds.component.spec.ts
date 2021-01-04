import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnholdsComponent } from './onholds.component';

describe('OnholdsComponent', () => {
  let component: OnholdsComponent;
  let fixture: ComponentFixture<OnholdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnholdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnholdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
