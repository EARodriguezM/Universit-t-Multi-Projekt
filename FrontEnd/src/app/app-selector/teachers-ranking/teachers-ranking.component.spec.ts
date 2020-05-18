import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersRankingComponent } from './teachers-ranking.component';

describe('TeachersRankingComponent', () => {
  let component: TeachersRankingComponent;
  let fixture: ComponentFixture<TeachersRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
