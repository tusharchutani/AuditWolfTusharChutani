import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUsersDashboardComponent } from './other-users-dashboard.component';

describe('OtherUsersDashboardComponent', () => {
  let component: OtherUsersDashboardComponent;
  let fixture: ComponentFixture<OtherUsersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUsersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUsersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
