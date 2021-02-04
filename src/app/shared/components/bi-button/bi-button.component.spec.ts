import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiButtonComponent } from './bi-button.component';

describe('BiButtonComponent', () => {
  let component: BiButtonComponent;
  let fixture: ComponentFixture<BiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
