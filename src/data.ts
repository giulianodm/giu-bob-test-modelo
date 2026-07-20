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
  { id: 'sk-01', nome: 'Séruns',                       linhaId: 'skincare',          preco: 189.90, dataLancamento: '2021-03-10' },
  { id: 'sk-02', nome: 'Hidratantes faciais',           linhaId: 'skincare',          preco: 129.90, dataLancamento: '2020-06-15' },
  { id: 'sk-03', nome: 'Antissinais',                   linhaId: 'skincare',          preco: 249.90, dataLancamento: '2022-01-20' },
  { id: 'sk-04', nome: 'Água micelar',                  linhaId: 'skincare',          preco:  79.90, dataLancamento: '2020-09-05' },
  { id: 'sk-05', nome: 'Esfoliantes',                   linhaId: 'skincare',          preco:  69.90, dataLancamento: '2021-11-12' },
  { id: 'sk-06', nome: 'Máscaras',                      linhaId: 'skincare',          preco:  99.90, dataLancamento: '2023-02-28' },
  { id: 'sk-07', nome: 'Creme para área dos olhos',     linhaId: 'skincare',          preco: 159.90, dataLancamento: '2022-08-01' },

  // Tratamento capilar avançado
  { id: 'cap-01', nome: 'Shampoos',                     linhaId: 'capilar',           preco:  49.90, dataLancamento: '2020-03-01' },
  { id: 'cap-02', nome: 'Condicionadores',              linhaId: 'capilar',           preco:  54.90, dataLancamento: '2020-03-01' },
  { id: 'cap-03', nome: 'Máscaras',                     linhaId: 'capilar',           preco:  89.90, dataLancamento: '2021-07-14' },
  { id: 'cap-04', nome: 'Óleos finalizadores',          linhaId: 'capilar',           preco:  74.90, dataLancamento: '2022-04-22' },
  { id: 'cap-05', nome: 'Sprays de pentear',            linhaId: 'capilar',           preco:  44.90, dataLancamento: '2023-09-10' },
  { id: 'cap-06', nome: 'Kits de cronograma capilar',   linhaId: 'capilar',           preco: 219.90, dataLancamento: '2024-01-15' },

  // Proteção solar
  { id: 'sol-01', nome: 'Protetores solares faciais',   linhaId: 'solar',             preco: 109.90, dataLancamento: '2020-10-01' },
  { id: 'sol-02', nome: 'Protetores solares corporais', linhaId: 'solar',             preco:  89.90, dataLancamento: '2020-10-01' },
  { id: 'sol-03', nome: 'Loções pós-sol',               linhaId: 'solar',             preco:  64.90, dataLancamento: '2021-05-20' },
  { id: 'sol-04', nome: 'Protetor infantil',            linhaId: 'solar',             preco:  79.90, dataLancamento: '2022-11-03' },

  // Sustentabilidade
  { id: 'sus-01', nome: 'Hidratantes corporais',        linhaId: 'sustentabilidade',  preco:  59.90, dataLancamento: '2021-04-22' },
  { id: 'sus-02', nome: 'Óleos de banho',               linhaId: 'sustentabilidade',  preco:  84.90, dataLancamento: '2021-04-22' },
  { id: 'sus-03', nome: 'Sabonetes',                    linhaId: 'sustentabilidade',  preco:  24.90, dataLancamento: '2022-06-18' },
  { id: 'sus-04', nome: 'Polpas para mãos e pés',       linhaId: 'sustentabilidade',  preco:  39.90, dataLancamento: '2023-03-07' },

  // Nutrição prebiótica
  { id: 'pre-01', nome: 'Desodorantes',                 linhaId: 'prebiotica',        preco:  34.90, dataLancamento: '2022-02-14' },
  { id: 'pre-02', nome: 'Sabonetes',                    linhaId: 'prebiotica',        preco:  19.90, dataLancamento: '2022-02-14' },
  { id: 'pre-03', nome: 'Hidratantes corporais',        linhaId: 'prebiotica',        preco:  64.90, dataLancamento: '2023-05-30' },
  { id: 'pre-04', nome: 'Cremes para o corpo',          linhaId: 'prebiotica',        preco:  74.90, dataLancamento: '2023-08-08' },
  { id: 'pre-05', nome: 'Cuidados para os cabelos',     linhaId: 'prebiotica',        preco:  49.90, dataLancamento: '2024-02-20' },

  // Óleos corporais para o banho
  { id: 'ole-01', nome: 'Óleos de banho perfumados',    linhaId: 'oleos-corporais',   preco:  94.90, dataLancamento: '2020-11-11' },
  { id: 'ole-02', nome: 'Óleos de massagem',            linhaId: 'oleos-corporais',   preco: 119.90, dataLancamento: '2021-09-25' },

  // Higiene suave
  { id: 'hig-01', nome: 'Sabonetes líquidos',           linhaId: 'higiene',           preco:  14.90, dataLancamento: '2020-01-08' },
  { id: 'hig-02', nome: 'Sabonetes em barra',           linhaId: 'higiene',           preco:  10.90, dataLancamento: '2020-01-08' },
  { id: 'hig-03', nome: 'Desodorantes',                 linhaId: 'higiene',           preco:  29.90, dataLancamento: '2021-06-03' },
  { id: 'hig-04', nome: 'Álcool em gel',                linhaId: 'higiene',           preco:  18.90, dataLancamento: '2020-04-17' },

  // Premium de maquiagem
  { id: 'maq-01', nome: 'Bases',                        linhaId: 'maquiagem',         preco: 179.90, dataLancamento: '2021-10-05' },
  { id: 'maq-02', nome: 'Corretivos',                   linhaId: 'maquiagem',         preco: 134.90, dataLancamento: '2021-10-05' },
  { id: 'maq-03', nome: 'Blushes',                      linhaId: 'maquiagem',         preco: 109.90, dataLancamento: '2022-03-15' },
  { id: 'maq-04', nome: 'Batons',                       linhaId: 'maquiagem',         preco:  89.90, dataLancamento: '2022-07-22' },
  { id: 'maq-05', nome: 'Sombras',                      linhaId: 'maquiagem',         preco: 149.90, dataLancamento: '2023-01-10' },
  { id: 'maq-06', nome: 'Máscaras de cílios',           linhaId: 'maquiagem',         preco: 124.90, dataLancamento: '2023-10-18' },
  { id: 'maq-07', nome: 'Esmaltes',                     linhaId: 'maquiagem',         preco:  39.90, dataLancamento: '2024-03-01' },

  // Cuidados para a casa
  { id: 'cas-01', nome: 'Velas aromáticas',             linhaId: 'casa',              preco:  79.90, dataLancamento: '2021-12-01' },
  { id: 'cas-02', nome: 'Aromatizadores de ambiente',   linhaId: 'casa',              preco: 129.90, dataLancamento: '2022-09-14' },
  { id: 'cas-03', nome: 'Sprays',                       linhaId: 'casa',              preco:  44.90, dataLancamento: '2023-06-06' },

  // Mamãe e Bebê
  { id: 'beb-01', nome: 'Óleos de massagem',            linhaId: 'bebe',              preco:  69.90, dataLancamento: '2020-07-20' },
  { id: 'beb-02', nome: 'Colônias',                     linhaId: 'bebe',              preco:  84.90, dataLancamento: '2020-07-20' },
  { id: 'beb-03', nome: 'Shampoos',                     linhaId: 'bebe',              preco:  39.90, dataLancamento: '2021-02-11' },
  { id: 'beb-04', nome: 'Condicionadores',              linhaId: 'bebe',              preco:  44.90, dataLancamento: '2021-02-11' },
  { id: 'beb-05', nome: 'Sabonetes líquidos',           linhaId: 'bebe',              preco:  24.90, dataLancamento: '2022-05-09' },
  { id: 'beb-06', nome: 'Loções hidratantes',           linhaId: 'bebe',              preco:  54.90, dataLancamento: '2023-11-27' },

  // Infantil
  { id: 'inf-01', nome: 'Colônias',                     linhaId: 'infantil',          preco:  59.90, dataLancamento: '2020-08-13' },
  { id: 'inf-02', nome: 'Sabonetes em barra',           linhaId: 'infantil',          preco:  14.90, dataLancamento: '2020-08-13' },
  { id: 'inf-03', nome: 'Shampoos',                     linhaId: 'infantil',          preco:  34.90, dataLancamento: '2021-08-30' },
  { id: 'inf-04', nome: 'Condicionadores',              linhaId: 'infantil',          preco:  39.90, dataLancamento: '2022-12-05' },
  { id: 'inf-05', nome: 'Cremes para pentear',          linhaId: 'infantil',          preco:  49.90, dataLancamento: '2024-04-10' },
];
