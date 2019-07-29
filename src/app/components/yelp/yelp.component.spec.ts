/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YelpComponent } from './yelp.component';

describe('YelpComponent', () => {
  let component: YelpComponent;
  let fixture: ComponentFixture<YelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
