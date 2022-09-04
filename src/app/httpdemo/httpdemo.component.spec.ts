import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPDemoComponent } from './httpdemo.component';

describe('HTTPDemoComponent', () => {
  let component: HTTPDemoComponent;
  let fixture: ComponentFixture<HTTPDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTTPDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
