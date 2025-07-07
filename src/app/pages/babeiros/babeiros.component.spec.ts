import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabeirosComponent } from './babeiros.component';

describe('BabeirosComponent', () => {
  let component: BabeirosComponent;
  let fixture: ComponentFixture<BabeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabeirosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
