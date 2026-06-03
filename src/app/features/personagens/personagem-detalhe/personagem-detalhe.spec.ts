import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDetalhe } from './personagem-detalhe';

describe('PersonagemDetalhe', () => {
  let component: PersonagemDetalhe;
  let fixture: ComponentFixture<PersonagemDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemDetalhe],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonagemDetalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
