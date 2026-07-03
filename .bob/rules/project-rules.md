# Regras de Escopo e Tecnologia - Modelo de Dados

Você está operando no módulo de Camada de Dados. 

## Tecnologias Permitidas
- Node.js (Ambiente de Execução)
- TypeScript/JavaScript (Linguagem)
- Nao há database, guarde os dados em memoria. Seu objetivo é representar um repositorio de dados, mas somente em memoria

## Restrições Estritas
- PROIBIDO criar rotas HTTP, endpoints, controllers ou lógica de servidores Express/Fastify nesta pasta.
- PROIBIDO criar qualquer arquivo de interface gráfica, HTML, CSS ou componentes React.
- Todas as alterações aqui devem se limitar estritamente a Schemas referentes ao modelo, e a estrutura dos dados em memoria utilizada para representar um banco de dados

# Contexto da Solução - Modelo de Dados
Este repositório define o core das entidades e schemas.

## Impacto a Jusante (Downstream Impact)
- Qualquer alteração ou adição de propriedades nas entidades deste repositório quebra os contratos de:
  - `backend` (API Rest)
  - `frontend` (Visualização)

## Regra de Impacto Cruzado para o Bob:
Ao alterar qualquer schema, você OBRIGATORIAMENTE deve gerar um log de alteração (Changelog/Schema Diff) e alertar o desenvolvedor: "Atenção: Esta alteração exige atualização no Backend e no Frontend. Certifique-se de propagar este novo schema para os respectivos repositórios."
Se voce nesse momento nao conhecer `backend` ou `frontend` faça as verificações e passos abaixo:
1. "Essa alteraçao já existe e esta coordenada no contrato do `backend` e no `frontend`?"
2. Se não existir, instrua o usuário a fornecer a URL Git ou o caminho local desses repositórios para que eu possa planejar a alteração neles primeiro.