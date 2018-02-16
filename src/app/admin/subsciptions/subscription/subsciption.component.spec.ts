import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsciptionComponent } from './subsciption.component';

describe('SubsciptionsComponent', () => {
  let component: SubsciptionComponent;
  let fixture: ComponentFixture<SubsciptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsciptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
