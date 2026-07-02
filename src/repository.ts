import { Linha, Produto } from './types';
import { linhas, produtos } from './data';

export function getAllLinhas(): Linha[] {
  return linhas;
}

export function getProdutosByLinhaId(linhaId: string): Produto[] {
  return produtos.filter((p) => p.linhaId === linhaId);
}
