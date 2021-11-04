import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendehumoComponent } from './vendehumo.component';

describe('VendehumoComponent', () => {
  let component: VendehumoComponent;
  let fixture: ComponentFixture<VendehumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendehumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
