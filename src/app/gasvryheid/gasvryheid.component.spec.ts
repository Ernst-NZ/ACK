import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasvryheidComponent } from './gasvryheid.component';

describe('GasvryheidComponent', () => {
  let component: GasvryheidComponent;
  let fixture: ComponentFixture<GasvryheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasvryheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasvryheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
