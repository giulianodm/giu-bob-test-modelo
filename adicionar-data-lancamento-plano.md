# Plano: Adicionar Data de Lançamento aos Produtos

## Visão Geral

Adicionar o campo `dataLancamento` (string ISO 8601, ex: `"2024-03-15"`) à interface `Produto` e popular os dados seed existentes com valores representativos.

**Escopo:** apenas este módulo `modelo-dados`. Por ser uma alteração de schema, o backend e o frontend precisarão ser atualizados em seguida.

**Arquivos envolvidos:**
- [`src/types.ts`](src/types.ts) — definição da interface `Produto`
- [`src/data.ts`](src/data.ts) — dados seed dos 45 produtos

---

## Sub-Tarefas

### Sub-Tarefa 1 — Atualizar a interface `Produto` em `types.ts`

- **Status:** `[x] done`
- **Intent:** Adicionar `dataLancamento: string` à interface `Produto`, estabelecendo o contrato de tipo para todos os consumidores deste schema.
- **Expected Outcomes:**
  - O campo `dataLancamento` é obrigatório na interface `Produto`.
  - O TypeScript emitirá erro em qualquer objeto `Produto` que não inclua o campo (inclusive os dados seed), forçando consistência.
- **Todo List:**
  1. Abrir [`src/types.ts`](src/types.ts).
  2. Adicionar `dataLancamento: string;` após o campo `preco` na interface `Produto`.
- **Relevant Context:**
  - Interface alvo: [`Produto`](src/types.ts:6)
  - Convenção de nomes: camelCase em português (`preco`, `linhaId`, `nome`)

---

### Sub-Tarefa 2 — Popular o campo nos dados seed em `data.ts`

- **Status:** `[x] done`
- **Intent:** Adicionar um valor `dataLancamento` para cada um dos 45 produtos no array `produtos`, usando datas plausíveis em formato ISO 8601 (`"YYYY-MM-DD"`).
- **Expected Outcomes:**
  - Todos os 45 registros no array `produtos` possuem o campo `dataLancamento` preenchido.
  - O projeto compila sem erros TypeScript.
- **Todo List:**
  1. Abrir [`src/data.ts`](src/data.ts).
  2. Adicionar `dataLancamento: "YYYY-MM-DD"` em cada objeto do array `produtos` (45 entradas), usando datas distribuídas de forma representativa entre 2020 e 2024.
- **Relevant Context:**
  - Array alvo: [`produtos`](src/data.ts:17) — 45 itens organizados por linha
  - Formato: string ISO 8601, ex: `"2023-06-01"`

---

## Changelog / Schema Diff

```diff
// src/types.ts — interface Produto
  id: string;
  nome: string;
  linhaId: string;
  preco: number;
+ dataLancamento: string;
```

---

## ⚠️ Alerta de Impacto Cross-Módulo

Esta alteração de schema quebra os contratos downstream. Após a conclusão das sub-tarefas acima, **é obrigatório propagar o novo campo** para:

| Módulo | Impacto |
|--------|---------|
| `backend` | O tipo/DTO de `Produto` deve incluir `dataLancamento` e expô-lo nos endpoints |
| `frontend` | Os componentes que exibem produtos devem consumir e exibir `dataLancamento` |

Verificar se os repositórios `backend` e `frontend` já estão disponíveis localmente antes de iniciar a propagação.
