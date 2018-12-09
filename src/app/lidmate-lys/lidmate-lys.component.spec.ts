import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LidmateLysComponent } from './lidmate-lys.component';

describe('LidmateLysComponent', () => {
  let component: LidmateLysComponent;
  let fixture: ComponentFixture<LidmateLysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LidmateLysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LidmateLysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
