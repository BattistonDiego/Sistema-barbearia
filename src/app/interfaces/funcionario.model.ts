export interface Funcionario {
  id: number;
  nome: string;
  email?: string;
  telefone: string;
}

export interface dataTable {
  id: number;
  nome: string;
  email?: string;
  telefone: string;
}

export interface ColumnDef {
  key: keyof Funcionario | string; // 'id' | 'nome' | 'telefone'
  header: string;
}
