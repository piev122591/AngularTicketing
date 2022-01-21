import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBoardItemComponent } from './service-board-item.component';

describe('ServiceBoardItemComponent', () => {
  let component: ServiceBoardItemComponent;
  let fixture: ComponentFixture<ServiceBoardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBoardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
