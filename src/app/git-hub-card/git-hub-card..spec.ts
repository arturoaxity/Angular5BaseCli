import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitHubModel } from '../model/git-hub-model';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL_COMPONENTS } from '../app.module';
import { APP_PROVIDERS } from '../app.providers';
import { GitHubCardComponent } from './git-hub-card.component';
import { Component } from '@angular/core';


describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;
  let gitHubData: GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GitHubCardComponent ],
      imports: [HttpClientModule,
        MATERIAL_COMPONENTS,
        BrowserAnimationsModule],

        providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gitHubData = new GitHubModel();
    gitHubData.avatar_url = '',
    gitHubData.followers = 4,
    gitHubData.following = 8 ,
    gitHubData.login = 'arturoAxity',
    gitHubData.name = 'arturo bravo';

    fixture = TestBed.createComponent(GitHubCardComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul validate model', () => {
    component.gitHubData = gitHubData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('shoul validate in the view', () => {
    component.gitHubData = gitHubData;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.data-container #name').textContent).toContain(`Nombre:${gitHubData.name}`);
  });
});


