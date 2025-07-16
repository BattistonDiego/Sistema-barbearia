import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabeirosComponent } from './babeiros.component';
import { FormsModule } from '@angular/forms';

describe('BabeirosComponent', () => {
  let component: BabeirosComponent;
  let fixture: ComponentFixture<BabeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabeirosComponent],
      imports: [FormsModule], // importa FormsModule porque o componente usa ngModel
    });
    // .compileComponents();

    fixture = TestBed.createComponent(BabeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // renderiza o componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi instanciado com sucesso
  });

  it('deve adicionar um item à lista de frutas', () => {
    const tamanhoAntes = component.frutas.length;

    component.adicionarItem('Limão');

    expect(component.frutas.length).toBe(tamanhoAntes + 1); // verifica se aumentou
    expect(component.frutas.includes('Limão')).toBeTrue(); // verifica se o item está na lista
  });

  it('deve limpar o campo novoItem após adicionar', () => {
    component.novoItem = 'jabuticaba';

    component.adicionarItem(component.novoItem);

    expect(component.novoItem).toBe(''); // verifica se limpou o campo
  });
});
