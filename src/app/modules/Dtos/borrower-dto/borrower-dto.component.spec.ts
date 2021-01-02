import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerDtoComponent } from './borrower-dto.component';

describe('BorrowerDtoComponent', () => {
  let component: BorrowerDtoComponent;
  let fixture: ComponentFixture<BorrowerDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
