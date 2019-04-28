import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindtransportComponent } from './findtransport.component';

describe('FindtransportComponent', () => {
  let component: FindtransportComponent;
  let fixture: ComponentFixture<FindtransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindtransportComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
