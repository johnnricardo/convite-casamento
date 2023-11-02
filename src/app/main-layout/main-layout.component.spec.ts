import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayout } from './main-layout.component';

describe('HomeComponent', () => {
  let component: MainLayout;
  let fixture: ComponentFixture<MainLayout>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLayout]
    });
    fixture = TestBed.createComponent(MainLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
