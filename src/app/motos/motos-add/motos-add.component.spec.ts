import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosAddComponent } from './motos-add.component';

describe('MotosAddComponent', () => {
  let component: MotosAddComponent;
  let fixture: ComponentFixture<MotosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
