import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDetalheComponent } from './personagem-detalhe.component';

describe('PersonagemDetalheComponent', () => {
  let component: PersonagemDetalheComponent;
  let fixture: ComponentFixture<PersonagemDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemDetalheComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonagemDetalheComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
