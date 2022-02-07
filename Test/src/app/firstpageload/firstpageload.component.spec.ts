import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpageloadComponent } from './firstpageload.component';

describe('FirstpageloadComponent', () => {
  let component: FirstpageloadComponent;
  let fixture: ComponentFixture<FirstpageloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstpageloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpageloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
