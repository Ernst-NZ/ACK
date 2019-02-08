import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienslysComponent } from './dienslys.component';

describe('DienslysComponent', () => {
  let component: DienslysComponent;
  let fixture: ComponentFixture<DienslysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienslysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienslysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
