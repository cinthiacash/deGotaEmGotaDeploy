import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtemasDeleteComponent } from './subtemas-delete.component';

describe('SubtemasDeleteComponent', () => {
  let component: SubtemasDeleteComponent;
  let fixture: ComponentFixture<SubtemasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtemasDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtemasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
