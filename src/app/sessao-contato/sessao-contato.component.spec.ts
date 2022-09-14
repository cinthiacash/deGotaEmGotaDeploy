import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoContatoComponent } from './sessao-contato.component';

describe('SessaoContatoComponent', () => {
  let component: SessaoContatoComponent;
  let fixture: ComponentFixture<SessaoContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessaoContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessaoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
