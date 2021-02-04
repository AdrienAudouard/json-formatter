import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonViewerChildComponent } from './json-viewer-child.component';

describe('JsonViewerChildComponent', () => {
  let component: JsonViewerChildComponent;
  let fixture: ComponentFixture<JsonViewerChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonViewerChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonViewerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
