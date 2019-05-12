import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBrandingComponent } from './toolbar-branding.component';

describe('ToolbarBrandingComponent', () => {
  let component: ToolbarBrandingComponent;
  let fixture: ComponentFixture<ToolbarBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
