import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LidmaatComponent } from './lidmaat.component';

describe('LidmaatComponent', () => {
  let component: LidmaatComponent;
  let fixture: ComponentFixture<LidmaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LidmaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LidmaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
