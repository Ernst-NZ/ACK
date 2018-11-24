import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErediensteComponent } from './eredienste.component';

describe('ErediensteComponent', () => {
  let component: ErediensteComponent;
  let fixture: ComponentFixture<ErediensteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErediensteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErediensteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
