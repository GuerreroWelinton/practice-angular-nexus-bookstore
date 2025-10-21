import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatherIcon } from './feather-icon';

describe('FeatherIcon', () => {
  let component: FeatherIcon;
  let fixture: ComponentFixture<FeatherIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatherIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatherIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
