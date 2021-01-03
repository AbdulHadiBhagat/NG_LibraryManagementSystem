import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoldDtoComponent } from './on-hold-dto.component';

describe('OnHoldDtoComponent', () => {
  let component: OnHoldDtoComponent;
  let fixture: ComponentFixture<OnHoldDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnHoldDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnHoldDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
