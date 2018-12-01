import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoopComponent } from './doop.component';

describe('DoopComponent', () => {
  let component: DoopComponent;
  let fixture: ComponentFixture<DoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
