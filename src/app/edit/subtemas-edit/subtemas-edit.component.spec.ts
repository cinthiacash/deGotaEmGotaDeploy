import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtemasEditComponent } from './subtemas-edit.component';

describe('SubtemasEditComponent', () => {
  let component: SubtemasEditComponent;
  let fixture: ComponentFixture<SubtemasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtemasEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtemasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
