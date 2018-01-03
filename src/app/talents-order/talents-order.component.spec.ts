import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsOrderComponent } from './talents-order.component';

describe('TalentsOrderComponent', () => {
  let component: TalentsOrderComponent;
  let fixture: ComponentFixture<TalentsOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentsOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
