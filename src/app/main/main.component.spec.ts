import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../search-user/search-user.component';
import { MainComponent } from './main.component';
import { GitHubCardComponent } from '../git-hub-card/git-hub-card.component';
import { MATERIAL_COMPONENTS } from '../app.module';
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { HttpClientModule } from '@angular/common/http';
import { GitHubService } from '../services/git-hub.service';
import { GitHubServiceMock } from '../../mock-service/git-hub.service.mock';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, SearchComponent, GitHubCardComponent]
      ,
      imports: [
        MATERIAL_COMPONENTS,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: GitHubService,
        useClass: GitHubServiceMock}]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add tree elements', () => {
   expect(component.gitHubDataList.length).toEqual(0);
    component.onSearhName('arturoAxity');
    component.onSearhName('arturoAxity');
    component.onSearhName('arturoAxity');
    expect(component.gitHubDataList.length).toEqual(3);
  });
});
