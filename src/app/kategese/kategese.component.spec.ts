import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategeseComponent } from './kategese.component';

describe('KategeseComponent', () => {
  let component: KategeseComponent;
  let fixture: ComponentFixture<KategeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
