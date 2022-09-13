import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtemasComponent } from './subtemas.component';

describe('SubtemasComponent', () => {
  let component: SubtemasComponent;
  let fixture: ComponentFixture<SubtemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
