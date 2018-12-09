import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LidmateComponent } from './lidmate.component';

describe('LidmateComponent', () => {
  let component: LidmateComponent;
  let fixture: ComponentFixture<LidmateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LidmateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LidmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
