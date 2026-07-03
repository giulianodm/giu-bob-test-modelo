# Plano: Adicionar campo `preco` ao Produto

## Visão Geral

Adicionar o campo `preco: number` à entidade `Produto` para que as vendedoras
possam consultar o preço de cada produto. A mudança envolve três repositórios:

1. **modelo-dados** — schema e seed data
2. **backend** — expor o campo nas respostas da API
3. **frontend** — exibir o preço na interface

---

## ⚠️ Aviso de Impacto Cruzado

Esta alteração quebra os contratos do **backend** e do **frontend**.
Todos os três repositórios devem ser atualizados de forma coordenada.

---

## Sub-Tarefas

---

### Sub-Tarefa 1 — `modelo-dados`: Adicionar `preco` ao schema e ao seed data

- **Status**: [x] done
- **Repositório**: `/modelo-dados`

**Intent**
Adicionar `preco: number` ao interface `Produto` e preencher preços fictícios
(entre R$ 10 e R$ 500) para os 45 produtos do arquivo de dados em memória.

**Expected Outcomes**
- `src/types.ts`: interface `Produto` inclui `preco: number`
- `src/data.ts`: todos os 45 produtos possuem valor numérico no campo `preco`
- O TypeScript compila sem erros

**Todo List**
1. Em `src/types.ts`, adicionar `preco: number` à interface `Produto`
2. Em `src/data.ts`, adicionar `preco` a cada um dos 45 produtos com valores entre 10 e 500
3. Verificar que o build/typecheck passa sem erros

**Relevant Context**
- [`src/types.ts`](src/types.ts) — interface `Produto` (linha 6)
- [`src/data.ts`](src/data.ts) — array `produtos` com 45 entradas (linha 17)

---

### Sub-Tarefa 2 — `backend`: Propagar `preco` na API

- **Status**: [x] done
- **Repositório**: `/backend`

**Intent**
Garantir que o campo `preco` seja incluído nas respostas JSON da API que
retornam produtos. Dependendo da arquitetura, pode ser necessário atualizar
DTOs, tipos locais, mappers ou serializers que hoje modelam o `Produto`.

**Expected Outcomes**
- O endpoint que lista produtos retorna `preco` em cada item
- Nenhum DTO, type ou mapper filtra/omite o campo `preco`
- O TypeScript compila sem erros no repositório backend

**Todo List**
1. Abrir o workspace do **backend** e identificar:
   - Como o `modelo-dados` é importado (se for como pacote local ou via path)
   - Se existe um DTO/type local `Produto` que precisa ser atualizado
   - Se existe um mapper que precisaria passar o campo adiante
2. Atualizar quaisquer tipos/DTOs locais para incluir `preco: number`
3. Verificar que nenhum serializer omite o campo
4. Confirmar que o typecheck passa sem erros

**Relevant Context**
- Workspace: `/Users/.../backend`
- O schema de origem está em `modelo-dados/src/types.ts`

**⚠️ Nota para implementação**
O Bob precisa ter o workspace do **backend** aberto para executar esta sub-tarefa.
Abra a pasta `/backend` como workspace ativo antes de iniciar.

---

### Sub-Tarefa 3 — `frontend`: Exibir `preco` na interface

- **Status**: [x] done
- **Repositório**: `/frontend`

**Intent**
Exibir o preço do produto na(s) tela(s) onde a vendedora consulta os produtos,
de forma legível (ex.: `R$ 89,90`).

**Expected Outcomes**
- A(s) tela(s) de listagem/detalhe de produtos exibem o campo `preco`
- O valor é formatado em moeda brasileira (R$)
- Nenhum tipo/interface local `Produto` no frontend está desatualizado
- O build do frontend passa sem erros

**Todo List**
1. Abrir o workspace do **frontend** e identificar:
   - O componente que renderiza a lista/detalhe de produtos
   - Se existe um type/interface local `Produto` que precisa incluir `preco`
2. Atualizar tipos locais para incluir `preco: number`
3. Adicionar a exibição do preço no componente, formatado como `R$ X,XX`
4. Verificar que o build do frontend passa sem erros

**Relevant Context**
- Workspace: `/Users/.../frontend`
- O schema de origem está em `modelo-dados/src/types.ts`

**⚠️ Nota para implementação**
O Bob precisa ter o workspace do **frontend** aberto para executar esta sub-tarefa.
Abra a pasta `/frontend` como workspace ativo antes de iniciar.

---

## Changelog / Schema Diff

| Campo  | Antes | Depois |
|--------|-------|--------|
| `Produto.preco` | ❌ ausente | ✅ `number` (valor em R$) |

---

## Ordem de Execução Recomendada

```
Sub-Tarefa 1 (modelo-dados) → Sub-Tarefa 2 (backend) → Sub-Tarefa 3 (frontend)
```

Executar nesta ordem garante que o schema fonte de verdade está correto antes
de propagar para os consumidores.
