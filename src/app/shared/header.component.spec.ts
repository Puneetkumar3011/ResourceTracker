/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { headerComponent } from './header.component';

describe('headerComponent', () => {
  let component: headerComponent;
  let fixture: ComponentFixture<headerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ headerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});