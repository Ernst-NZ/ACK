import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiggingComponent } from './ligging.component';

describe('LiggingComponent', () => {
  let component: LiggingComponent;
  let fixture: ComponentFixture<LiggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
