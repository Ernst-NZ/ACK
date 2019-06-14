import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WykeComponent } from './wyke.component';

describe('WykeComponent', () => {
  let component: WykeComponent;
  let fixture: ComponentFixture<WykeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WykeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WykeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
