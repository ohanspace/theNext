import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPagesComponent } from './featured-pages.component';

describe('FeaturedPagesComponent', () => {
  let component: FeaturedPagesComponent;
  let fixture: ComponentFixture<FeaturedPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
