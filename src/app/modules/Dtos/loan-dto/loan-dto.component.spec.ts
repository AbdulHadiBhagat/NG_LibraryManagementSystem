import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDtoComponent } from './loan-dto.component';

describe('LoanDtoComponent', () => {
  let component: LoanDtoComponent;
  let fixture: ComponentFixture<LoanDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
