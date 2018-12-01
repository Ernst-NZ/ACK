import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseditComponent } from './persedit.component';

describe('PerseditComponent', () => {
  let component: PerseditComponent;
  let fixture: ComponentFixture<PerseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
