import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InligtingComponent } from './inligting.component';

describe('InligtingComponent', () => {
  let component: InligtingComponent;
  let fixture: ComponentFixture<InligtingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InligtingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InligtingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
