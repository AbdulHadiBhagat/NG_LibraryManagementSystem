import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonHistoryCardComponent } from './person-history-card.component';

describe('PersonHistoryCardComponent', () => {
  let component: PersonHistoryCardComponent;
  let fixture: ComponentFixture<PersonHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonHistoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
