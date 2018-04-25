import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasivoComponent } from './pasivo.component';
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';

describe('PasivoComponent', () => {
  let component: PasivoComponent;
  let fixture: ComponentFixture<PasivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasivoComponent ],
      imports: [
        FormsModule
      ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
