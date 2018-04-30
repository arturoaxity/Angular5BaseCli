import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormArray, AbstractControl } from '@angular/forms';
import { FormulariouserComponent } from './formulariouser.component';
import { FormsModule } from '@angular/forms';
import { MATERIAL_COMPONENTS } from '../app.module';
import { RouterModule, Router } from '@angular/router';
import { routes } from '../app.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { RestComponente } from '../rest-component/rest-component';
import { GitHubCardComponent } from '../git-hub-card/git-hub-card.component';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from '../search-user/search-user.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { PasivoComponent } from '../pasivo/pasivo.component';
import { FormLoginComponent } from '../formlogin/formlogin.component';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('FormulariouserComponent', () => {
  let component: FormulariouserComponent;
  let fixture: ComponentFixture<FormulariouserComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariouserComponent,
        MainComponent ,
         AboutComponent,
        ContactComponent,
        GitHubCardComponent,
        RestComponente,
        LoginComponent,
        SearchComponent,
        PasivoComponent,
        ReactivoComponent,
        FormLoginComponent],
      imports: [
        FormsModule,
         ReactiveFormsModule,
         MATERIAL_COMPONENTS,
         BrowserAnimationsModule,
         RouterModule.forRoot(routes)
      ],
      providers: [{provide : APP_BASE_HREF, useValue : '/'}]
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

  it('validacion de formulaio Valida', () => {
    const result: boolean = component.formUser.status === 'VALID';
    expect(component.saveData()).toEqual(result);
  });

  it('validacion de formulaio Invalida', () => {
    const result: boolean = component.formUser.status === 'INVALID';
    expect(component.saveData()).toEqual(false);
  });
});
