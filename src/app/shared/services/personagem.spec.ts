import { TestBed } from '@angular/core/testing';

import { PersonagemService } from './personagem';

describe('Personagem', () => {
  let service: PersonagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
