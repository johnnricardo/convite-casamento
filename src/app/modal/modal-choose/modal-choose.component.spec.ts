import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChooseComponent } from './modal-choose.component';

describe('ModalChooseComponent', () => {
  let component: ModalChooseComponent;
  let fixture: ComponentFixture<ModalChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalChooseComponent]
    });
    fixture = TestBed.createComponent(ModalChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
