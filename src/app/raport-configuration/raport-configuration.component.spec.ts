import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportConfigurationComponent } from './raport-configuration.component';

describe('RaportConfigurationComponent', () => {
  let component: RaportConfigurationComponent;
  let fixture: ComponentFixture<RaportConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaportConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
