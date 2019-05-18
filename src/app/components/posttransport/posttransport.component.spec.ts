import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttransportComponent } from './posttransport.component';

describe('PosttransportComponent', () => {
  let component: PosttransportComponent;
  let fixture: ComponentFixture<PosttransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PosttransportComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
