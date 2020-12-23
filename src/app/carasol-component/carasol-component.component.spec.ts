import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarasolComponentComponent } from './carasol-component.component';

describe('CarasolComponentComponent', () => {
  let component: CarasolComponentComponent;
  let fixture: ComponentFixture<CarasolComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarasolComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarasolComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
