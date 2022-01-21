import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSavingsDiscoveredComponent } from './add-savings-discovered.component';

describe('AddSavingsDiscoveredComponent', () => {
  let component: AddSavingsDiscoveredComponent;
  let fixture: ComponentFixture<AddSavingsDiscoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSavingsDiscoveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSavingsDiscoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
