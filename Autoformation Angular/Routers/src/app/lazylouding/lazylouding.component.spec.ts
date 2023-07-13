import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloudingComponent } from './lazylouding.component';

describe('LazyloudingComponent', () => {
  let component: LazyloudingComponent;
  let fixture: ComponentFixture<LazyloudingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyloudingComponent]
    });
    fixture = TestBed.createComponent(LazyloudingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
