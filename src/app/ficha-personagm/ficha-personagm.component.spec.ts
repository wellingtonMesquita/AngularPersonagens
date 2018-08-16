import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPersonagmComponent } from './ficha-personagm.component';

describe('FichaPersonagmComponent', () => {
  let component: FichaPersonagmComponent;
  let fixture: ComponentFixture<FichaPersonagmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaPersonagmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPersonagmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
