# Tabelas Estilizadas — HTML & CSS

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Exercício do módulo **HTML e CSS Básico**: tabelas HTML com visual profissional, CSS puro e layout responsivo.

## Resultado

Duas tabelas temáticas (**Moda** e **Casa**) com cabeçalhos coloridos, hover nas linhas e tipografia legível — sem framework.

![Preview — Tabelas Estilizadas](docs/preview.jpg)

**Demo online:** [denispaulo.github.io/aula-tabela](https://denispaulo.github.io/aula-tabela/)

## Conteúdo

| Tabela | Colunas | Header |
|--------|---------|--------|
| Moda | Produto, Tamanho, Valor | Roxo `#BB86FC` |
| Casa | Produto, Valor | Verde-água `#00C4B4` |

## Como rodar

```bash
git clone https://github.com/DenisPaulo/aula-tabela.git
cd aula-tabela
# abra index.html no navegador — ou:
npx --yes serve .
```

## Estrutura

```
aula-tabela/
├── index.html      # markup semântico (table, thead, tbody)
├── styles.css      # tema escuro, cards e responsivo
├── docs/preview.jpg
└── LICENSE
```

## Aprendizados

- Semântica de tabela: `table`, `thead`, `tbody`, `th`, `td`, `scope`
- Separação HTML / CSS
- `border-collapse`, hover e layout responsivo
- Acessibilidade básica (`lang`, `scope`, headings)

## Licença

Distribuído sob a licença [MIT](LICENSE).

---

Feito por [Denis Paulo](https://github.com/DenisPaulo) · aula de tabelas (HTML & CSS Básico)
