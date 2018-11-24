import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeloofComponent } from './geloof.component';

describe('GeloofComponent', () => {
  let component: GeloofComponent;
  let fixture: ComponentFixture<GeloofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeloofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeloofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
