import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariouserComponent } from './formulariouser.component';

fdescribe('FormulariouserComponent', () => {
  let component: FormulariouserComponent;
  let fixture: ComponentFixture<FormulariouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariouserComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('prueba unitaria', () => {
    expect(component.ValidarUserNameLargoMax('arturo')).toEqual(true);

  });
});
