import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeugComponent } from './jeug.component';

describe('JeugComponent', () => {
  let component: JeugComponent;
  let fixture: ComponentFixture<JeugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
