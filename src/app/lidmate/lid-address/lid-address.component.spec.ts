import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LidAddressComponent } from './lid-address.component';

describe('LidAddressComponent', () => {
  let component: LidAddressComponent;
  let fixture: ComponentFixture<LidAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LidAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LidAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
