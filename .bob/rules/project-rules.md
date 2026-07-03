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
Ao alterar qualquer schema, você OBRIGATORIAMENTE deve gerar um log de alteração (Changelog/Schema Diff) e alertar o desenvolvedor: "Atenção: Esta alteração exige atualização no Backend e no Frontend. Irei tentar propagar este novo schema para os respectivos repositórios."
Se voce nesse momento nao conhecer `backend` ou `frontend` faça as verificações e passos abaixo:
1. "Essa alteraçao já existe e esta coordenada no contrato do `backend` e no `frontend`?"
2. Se não existir, busque ambos esses modulos no git disponiveis e os coloque dentro do mesmo diretorio ao qual o esse projeto esta no disco local, eles devem estar no mesmo nivel do projeto atual. Os repositorios para voce baixar os outros modulos sao:
  - `backend` - git repo: https://github.com/giulianodm/giu-bob-test-backend.git
  - `frontend` - git repo: https://github.com/giulianodm/giu-bob-test-frontend.git
