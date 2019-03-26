import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplarErrorsComponent } from './displar-errors.component';

describe('DisplarErrorsComponent', () => {
  let component: DisplarErrorsComponent;
  let fixture: ComponentFixture<DisplarErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplarErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplarErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
