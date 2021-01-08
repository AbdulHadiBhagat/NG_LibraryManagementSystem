import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGridComponent } from './onhold-grid.component';

describe('LoanGridComponent', () => {
  let component: LoanGridComponent;
  let fixture: ComponentFixture<LoanGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
