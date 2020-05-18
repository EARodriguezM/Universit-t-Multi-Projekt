import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WChterComponent } from './w-chter.component';

describe('WChterComponent', () => {
  let component: WChterComponent;
  let fixture: ComponentFixture<WChterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WChterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WChterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
