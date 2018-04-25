import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../search-user/search-user.component';
import { GitHubCardComponent } from '../git-hub-card/git-hub-card.component';
import { MATERIAL_COMPONENTS } from '../app.module';
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormLoginComponent } from './formlogin.component';
import { routes } from '../app.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { PasivoComponent } from '../pasivo/pasivo.component';
import { APP_BASE_HREF } from '@angular/common';

fdescribe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormLoginComponent, MainComponent,
        AboutComponent, ContactComponent, LoginComponent, SearchComponent, GitHubCardComponent, PasivoComponent,
        ReactivoComponent]
      ,
      imports: [
        MATERIAL_COMPONENTS,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
      ],
      providers: [APP_PROVIDERS , {provide: APP_BASE_HREF, useValue: '/'}]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should  service', () => {
    component.nombre = 'arturo';
    component.contracena = 'bravo';
    const navigate = spyOn(component.router, 'navigate');
    component.validarUser();
    expect(navigate).toHaveBeenCalledWith(['']);
  });
});
