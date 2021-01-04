import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsPopupComponent } from './persons-popup.component';

describe('PersonsPopupComponent', () => {
  let component: PersonsPopupComponent;
  let fixture: ComponentFixture<PersonsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
