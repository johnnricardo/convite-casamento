import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPresenteComponent } from './confirmar-presente.component';

describe('ConfirmarPresenteComponent', () => {
  let component: ConfirmarPresenteComponent;
  let fixture: ComponentFixture<ConfirmarPresenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarPresenteComponent]
    });
    fixture = TestBed.createComponent(ConfirmarPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
