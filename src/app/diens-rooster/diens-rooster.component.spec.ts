import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiensRoosterComponent } from './diens-rooster.component';

describe('DiensRoosterComponent', () => {
  let component: DiensRoosterComponent;
  let fixture: ComponentFixture<DiensRoosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiensRoosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiensRoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
