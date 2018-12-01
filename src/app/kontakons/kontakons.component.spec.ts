import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontakonsComponent } from './kontakons.component';

describe('KontakonsComponent', () => {
  let component: KontakonsComponent;
  let fixture: ComponentFixture<KontakonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontakonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontakonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
