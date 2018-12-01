import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerkraadComponent } from './kerkraad.component';

describe('KerkraadComponent', () => {
  let component: KerkraadComponent;
  let fixture: ComponentFixture<KerkraadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerkraadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerkraadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
