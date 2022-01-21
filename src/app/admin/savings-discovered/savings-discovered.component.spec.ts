import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsDiscoveredComponent } from './savings-discovered.component';

describe('SavingsDiscoveredComponent', () => {
  let component: SavingsDiscoveredComponent;
  let fixture: ComponentFixture<SavingsDiscoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsDiscoveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsDiscoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
