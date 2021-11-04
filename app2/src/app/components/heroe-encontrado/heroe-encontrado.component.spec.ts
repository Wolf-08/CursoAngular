import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeEncontradoComponent } from './heroe-encontrado.component';

describe('HeroeEncontradoComponent', () => {
  let component: HeroeEncontradoComponent;
  let fixture: ComponentFixture<HeroeEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
