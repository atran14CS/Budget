import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToMain } from './button-to-main';

describe('ButtonToMain', () => {
  let component: ButtonToMain;
  let fixture: ComponentFixture<ButtonToMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
