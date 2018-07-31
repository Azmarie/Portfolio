import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabieComponent } from './babie.component';

describe('BabieComponent', () => {
  let component: BabieComponent;
  let fixture: ComponentFixture<BabieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
