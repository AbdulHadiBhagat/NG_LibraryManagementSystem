import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BORROWEDBOOKSComponent } from './borrowedbooks.component';

describe('BORROWEDBOOKSComponent', () => {
  let component: BORROWEDBOOKSComponent;
  let fixture: ComponentFixture<BORROWEDBOOKSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BORROWEDBOOKSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BORROWEDBOOKSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
