import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosComponent } from './servicos.component';
import { HttpClientModule } from '@angular/common/http';

describe('ServicosComponent', () => {
  let component: ServicosComponent;
  let fixture: ComponentFixture<ServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicosComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
