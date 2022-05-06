import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCasePageComponentComponent } from './show-case-page-component.component';

describe('ShowCasePageComponentComponent', () => {
  let component: ShowCasePageComponentComponent;
  let fixture: ComponentFixture<ShowCasePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCasePageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCasePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
