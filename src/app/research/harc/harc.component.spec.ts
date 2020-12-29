import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarcComponent } from './harc.component';

describe('HarcComponent', () => {
  let component: HarcComponent;
  let fixture: ComponentFixture<HarcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
