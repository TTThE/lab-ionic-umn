import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmDetailPage } from './ukm-detail.page';

describe('UkmDetailPage', () => {
  let component: UkmDetailPage;
  let fixture: ComponentFixture<UkmDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkmDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkmDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
