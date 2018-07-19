import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomInputComponent } from './random-input.component';

describe('RandomInputComponent', () => {
  let component: RandomInputComponent;
  let fixture: ComponentFixture<RandomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
