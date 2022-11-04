import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalregisterComponent } from './modalregister.component';

describe('ModalregisterComponent', () => {
  let component: ModalregisterComponent;
  let fixture: ComponentFixture<ModalregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
