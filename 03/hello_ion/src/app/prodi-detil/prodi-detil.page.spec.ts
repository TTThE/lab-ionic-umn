import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdiDetilPage } from './prodi-detil.page';

describe('ProdiDetilPage', () => {
  let component: ProdiDetilPage;
  let fixture: ComponentFixture<ProdiDetilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdiDetilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdiDetilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
