import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosDisplayComponent } from './motos-display.component';

describe('MotosDisplayComponent', () => {
  let component: MotosDisplayComponent;
  let fixture: ComponentFixture<MotosDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
