import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoelementComponent } from './demoelement.component';

describe('DemoelementComponent', () => {
  let component: DemoelementComponent;
  let fixture: ComponentFixture<DemoelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
