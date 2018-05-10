import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingComponent } from './displaying.component';

describe('DisplayingComponent', () => {
  let component: DisplayingComponent;
  let fixture: ComponentFixture<DisplayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
