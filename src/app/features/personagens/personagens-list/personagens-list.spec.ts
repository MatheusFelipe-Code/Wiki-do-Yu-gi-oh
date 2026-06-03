import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensListComponent } from './personagens-list.component';

describe('PersonagensListComponent', () => {
  let component: PersonagensListComponent;
  let fixture: ComponentFixture<PersonagensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagensListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonagensListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
