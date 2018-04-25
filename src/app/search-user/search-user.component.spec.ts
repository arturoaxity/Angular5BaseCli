import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { Component } from '@angular/core';
import { SearchComponent } from './search-user.component';
import { FormsModule } from '@angular/forms';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent ],
      imports: [HttpClientModule,
        MATERIAL_COMPONENTS,
        BrowserAnimationsModule,
        FormsModule],

        providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
     fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('on search click', () => {
    component.userName = 'arturoAxity';
    component.onSearhName.subscribe(x => {
      expect(x).toEqual('arturoAxity');
    });
    component.onSearchClick();
});



  it('on search view', () => {
    component.userName = 'arturoAxity';
    component.onSearhName.subscribe(x => {
      expect(x).toEqual('arturoAxity');
    });
  });


  it('on search view', () => {
    component.userName = 'arturoAxity';
    component.onSearhName.subscribe(x => {
      expect(x).toEqual('arturoAxity');
    });
    const compile = fixture.nativeElement;
    compile.querySelector('button').click();
  });

});


