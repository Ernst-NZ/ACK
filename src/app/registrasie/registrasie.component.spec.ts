import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrasieComponent } from './registrasie.component';

describe('RegistrasieComponent', () => {
  let component: RegistrasieComponent;
  let fixture: ComponentFixture<RegistrasieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrasieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrasieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
