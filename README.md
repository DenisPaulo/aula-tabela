# Fluxo de Caixa — Gastos Mensais

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

App de **fluxo de caixa** com resumo do mês, movimentações filtráveis e holerite. Dados anonimizados: **sem nomes completos de pessoas e sem nome de empresa**.

## Resultado

Resumo (saldos, entradas, saídas, RDB) + lista de movimentações com filtro por tipo/categoria + holerite — a partir do Fluxo_Caixa de agosto/2026.

**Demo online:** [denispaulo.github.io/aula-tabela](https://denispaulo.github.io/aula-tabela/)

## Abas

1. **Resumo** — saldo inicial/final, totais e breakdown
2. **Movimentações** — Entrada / Saída / Aplicação RDB (filtro + CSV)
3. **Holerite** — bruto, descontos e líquido
4. **Moda / Casa** — demos de tabela estilizada

## Como abrir

- Duplo clique **não** carrega o JSON (`fetch`). Use a **Pages** ou:

```bash
python -m http.server 5500
```

(Windows: instale Python ou abra só pela Pages.)

## Privacidade

O JSON em `data/` remove nomes completos e o nome da empresa. Categorias e valores do mês permanecem.

## Estrutura

```
aula-tabela/
├── index.html
├── data/fluxo-agosto-2026.json
├── src/css/styles.css
├── src/js/app.js
└── LICENSE
```

## Licença

MIT · [Denis Paulo](https://github.com/DenisPaulo)
