import { Linha, Produto } from './types';

export const linhas: Linha[] = [
  { id: 'skincare',        nome: 'Linha Skincare e antissinais' },
  { id: 'capilar',         nome: 'Linha Tratamento capilar avançado' },
  { id: 'solar',           nome: 'Linha proteção solar' },
  { id: 'sustentabilidade',nome: 'Linha sustentabilidade' },
  { id: 'prebiotica',      nome: 'Linha nutrição prebiótica' },
  { id: 'oleos-corporais', nome: 'Linha Óleos corporais para o banho' },
  { id: 'higiene',         nome: 'Linha higiene suave' },
  { id: 'maquiagem',       nome: 'Linha premium de maquiagem' },
  { id: 'casa',            nome: 'Linha cuidados para a casa' },
  { id: 'bebe',            nome: 'Linha Mamãe e Bebê' },
  { id: 'infantil',        nome: 'Linha infantil' },
];

export const produtos: Produto[] = [
  // Skincare e antissinais
  { id: 'sk-01', nome: 'Séruns',                       linhaId: 'skincare' },
  { id: 'sk-02', nome: 'Hidratantes faciais',           linhaId: 'skincare' },
  { id: 'sk-03', nome: 'Antissinais',                   linhaId: 'skincare' },
  { id: 'sk-04', nome: 'Água micelar',                  linhaId: 'skincare' },
  { id: 'sk-05', nome: 'Esfoliantes',                   linhaId: 'skincare' },
  { id: 'sk-06', nome: 'Máscaras',                      linhaId: 'skincare' },
  { id: 'sk-07', nome: 'Creme para área dos olhos',     linhaId: 'skincare' },

  // Tratamento capilar avançado
  { id: 'cap-01', nome: 'Shampoos',                     linhaId: 'capilar' },
  { id: 'cap-02', nome: 'Condicionadores',              linhaId: 'capilar' },
  { id: 'cap-03', nome: 'Máscaras',                     linhaId: 'capilar' },
  { id: 'cap-04', nome: 'Óleos finalizadores',          linhaId: 'capilar' },
  { id: 'cap-05', nome: 'Sprays de pentear',            linhaId: 'capilar' },
  { id: 'cap-06', nome: 'Kits de cronograma capilar',   linhaId: 'capilar' },

  // Proteção solar
  { id: 'sol-01', nome: 'Protetores solares faciais',   linhaId: 'solar' },
  { id: 'sol-02', nome: 'Protetores solares corporais', linhaId: 'solar' },
  { id: 'sol-03', nome: 'Loções pós-sol',               linhaId: 'solar' },
  { id: 'sol-04', nome: 'Protetor infantil',            linhaId: 'solar' },

  // Sustentabilidade
  { id: 'sus-01', nome: 'Hidratantes corporais',        linhaId: 'sustentabilidade' },
  { id: 'sus-02', nome: 'Óleos de banho',               linhaId: 'sustentabilidade' },
  { id: 'sus-03', nome: 'Sabonetes',                    linhaId: 'sustentabilidade' },
  { id: 'sus-04', nome: 'Polpas para mãos e pés',       linhaId: 'sustentabilidade' },

  // Nutrição prebiótica
  { id: 'pre-01', nome: 'Desodorantes',                 linhaId: 'prebiotica' },
  { id: 'pre-02', nome: 'Sabonetes',                    linhaId: 'prebiotica' },
  { id: 'pre-03', nome: 'Hidratantes corporais',        linhaId: 'prebiotica' },
  { id: 'pre-04', nome: 'Cremes para o corpo',          linhaId: 'prebiotica' },
  { id: 'pre-05', nome: 'Cuidados para os cabelos',     linhaId: 'prebiotica' },

  // Óleos corporais para o banho
  { id: 'ole-01', nome: 'Óleos de banho perfumados',    linhaId: 'oleos-corporais' },
  { id: 'ole-02', nome: 'Óleos de massagem',            linhaId: 'oleos-corporais' },

  // Higiene suave
  { id: 'hig-01', nome: 'Sabonetes líquidos',           linhaId: 'higiene' },
  { id: 'hig-02', nome: 'Sabonetes em barra',           linhaId: 'higiene' },
  { id: 'hig-03', nome: 'Desodorantes',                 linhaId: 'higiene' },
  { id: 'hig-04', nome: 'Álcool em gel',                linhaId: 'higiene' },

  // Premium de maquiagem
  { id: 'maq-01', nome: 'Bases',                        linhaId: 'maquiagem' },
  { id: 'maq-02', nome: 'Corretivos',                   linhaId: 'maquiagem' },
  { id: 'maq-03', nome: 'Blushes',                      linhaId: 'maquiagem' },
  { id: 'maq-04', nome: 'Batons',                       linhaId: 'maquiagem' },
  { id: 'maq-05', nome: 'Sombras',                      linhaId: 'maquiagem' },
  { id: 'maq-06', nome: 'Máscaras de cílios',           linhaId: 'maquiagem' },
  { id: 'maq-07', nome: 'Esmaltes',                     linhaId: 'maquiagem' },

  // Cuidados para a casa
  { id: 'cas-01', nome: 'Velas aromáticas',             linhaId: 'casa' },
  { id: 'cas-02', nome: 'Aromatizadores de ambiente',   linhaId: 'casa' },
  { id: 'cas-03', nome: 'Sprays',                       linhaId: 'casa' },

  // Mamãe e Bebê
  { id: 'beb-01', nome: 'Óleos de massagem',            linhaId: 'bebe' },
  { id: 'beb-02', nome: 'Colônias',                     linhaId: 'bebe' },
  { id: 'beb-03', nome: 'Shampoos',                     linhaId: 'bebe' },
  { id: 'beb-04', nome: 'Condicionadores',              linhaId: 'bebe' },
  { id: 'beb-05', nome: 'Sabonetes líquidos',           linhaId: 'bebe' },
  { id: 'beb-06', nome: 'Loções hidratantes',           linhaId: 'bebe' },

  // Infantil
  { id: 'inf-01', nome: 'Colônias',                     linhaId: 'infantil' },
  { id: 'inf-02', nome: 'Sabonetes em barra',           linhaId: 'infantil' },
  { id: 'inf-03', nome: 'Shampoos',                     linhaId: 'infantil' },
  { id: 'inf-04', nome: 'Condicionadores',              linhaId: 'infantil' },
  { id: 'inf-05', nome: 'Cremes para pentear',          linhaId: 'infantil' },
];
