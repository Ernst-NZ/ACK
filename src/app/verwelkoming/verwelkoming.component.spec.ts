import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwelkomingComponent } from './verwelkoming.component';

describe('VerwelkomingComponent', () => {
  let component: VerwelkomingComponent;
  let fixture: ComponentFixture<VerwelkomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerwelkomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerwelkomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
