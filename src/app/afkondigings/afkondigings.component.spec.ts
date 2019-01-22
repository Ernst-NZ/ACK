import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfkondigingsComponent } from './afkondigings.component';

describe('AfkondigingsComponent', () => {
  let component: AfkondigingsComponent;
  let fixture: ComponentFixture<AfkondigingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfkondigingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfkondigingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
