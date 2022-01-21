import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItServiceBoardComponent } from './it-service-board.component';

describe('ItServiceBoardComponent', () => {
  let component: ItServiceBoardComponent;
  let fixture: ComponentFixture<ItServiceBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItServiceBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItServiceBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
