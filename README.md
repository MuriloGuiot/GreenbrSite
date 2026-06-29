# GreenBR — Site institucional (React + TypeScript + Vite)

Site institucional do **GreenBR**, reconstruído a partir do backup do WordPress
antigo e modernizado para o novo domínio **greenbr.net.br**. Página única
(landing page), responsiva, com foco em conservação, carbono e impacto social no
Cerrado brasileiro.

---

## 1. O que é cada tecnologia (visão rápida)

| Peça | Para que serve |
|------|----------------|
| **Node.js** | O motor que executa as ferramentas de build no seu computador. |
| **npm** | Gerenciador de pacotes — baixa as bibliotecas (React etc.). Vem com o Node. |
| **Vite** | Servidor de desenvolvimento (recarrega na hora) e empacotador para produção. |
| **React** | Biblioteca que monta a interface em "componentes" reutilizáveis. |
| **TypeScript** | JavaScript com tipos. Pega erros antes de rodar e dá autocompletar. |
| **Tailwind CSS** | Estilização por classes utilitárias direto no JSX (ex.: `text-forest`). |

> Você **não** precisa entender tudo de cara. Comece rodando o site (passo 3) e
> depois leia a seção 5 para entender o código.

---

## 2. Pré-requisitos (instalar uma única vez)

Instale o **Node.js versão 18 ou superior** (recomendado 20+):
https://nodejs.org (baixe a versão "LTS").

Confirme no terminal:

```bash
node -v   # deve mostrar v18.x ou superior
npm -v
```

---

## 3. Rodar o site no seu computador (3 comandos)

Dentro da pasta do projeto:

```bash
# 1) Baixa todas as bibliotecas para a pasta node_modules/ (só na primeira vez)
npm install

# 2) Sobe o servidor de desenvolvimento
npm run dev
```

O terminal vai mostrar um endereço como `http://localhost:5173`.
Abra no navegador. **Qualquer alteração no código atualiza a página sozinha.**

Para parar o servidor: `Ctrl + C` no terminal.

---

## 4. Compilar para produção (gerar os arquivos finais)

```bash
npm run build
```

O que esse comando faz, em ordem:
1. `tsc --noEmit` → o **TypeScript verifica os tipos** de todo o projeto. Se
   houver erro de tipo, ele para aqui e te avisa o arquivo e a linha.
2. `vite build` → **empacota e otimiza** tudo (minifica JS/CSS, processa o
   Tailwind, copia as imagens) para a pasta **`dist/`**.

A pasta **`dist/`** é o site pronto: são apenas arquivos estáticos
(HTML, CSS, JS, imagens). É exatamente isso que será publicado.

Para conferir o resultado final localmente, simulando produção:

```bash
npm run preview
```

> Dica: `npm run lint` roda só a checagem de tipos (o `tsc`), sem empacotar.

---

## 5. Como o projeto está organizado

```
greenbr-site/
├── index.html              ← página base + SEO + carregamento das fontes
├── package.json            ← scripts (dev/build) e lista de dependências
├── vite.config.ts          ← configuração do Vite
├── tailwind.config.js      ← PALETA DA MARCA e fontes (cores: forest, sage…)
├── tsconfig*.json          ← regras do TypeScript
├── postcss.config.js       ← liga o Tailwind ao build
│
├── public/                 ← arquivos servidos "como estão"
│   └── images/             ← todas as fotos e logos já otimizados p/ web
│
└── src/                    ← TODO o código-fonte
    ├── main.tsx            ← ponto de entrada: injeta o React na página
    ├── App.tsx             ← monta as seções na ordem da página
    ├── index.css           ← estilos globais + diretivas do Tailwind
    ├── vite-env.d.ts       ← tipos do Vite (permite importar .css, imagens…)
    │
    ├── data/
    │   └── content.ts      ← ★ TODO O TEXTO DO SITE FICA AQUI ★
    │
    └── components/         ← uma "peça" da página por arquivo
        ├── Header.tsx      ← menu fixo no topo (muda no scroll + menu mobile)
        ├── Hero.tsx        ← seção de abertura (título + imagem da floresta)
        ├── About.tsx       ← quem é o GreenBR + números
        ├── Coalition.tsx   ← faixa com a citação da Brazilian Coalition
        ├── Redd.tsx        ← projeto REDD+ (linha do tempo, mapa, espécie…)
        ├── Impact.tsx      ← impacto ambiental e social + parceria IFMA
        ├── Partners.tsx    ← logos: Verra, Orbify, UnB
        ├── Faq.tsx         ← perguntas e respostas (acordeão)
        ├── Contact.tsx     ← endereço, e-mail, telefones + formulário
        ├── Footer.tsx      ← CTA final + rodapé
        └── Reveal.tsx      ← utilitário: anima elementos ao rolar a página
```

### A ideia central (entenda isto e você entende o resto)

- **Componente** = uma função que devolve "HTML" (JSX). Cada arquivo em
  `components/` é um pedaço da página.
- **`App.tsx`** apenas empilha esses pedaços. Quer reordenar seções? Troque a
  ordem das linhas lá.
- **`content.ts`** separa o *texto* do *layout*. Para mudar um título, telefone
  ou pergunta do FAQ, **edite só o `content.ts`** — não precisa mexer no visual.
- **Tailwind**: as classes nos elementos (`className="..."`) são o estilo. Ex.:
  `bg-forest` = fundo verde da marca; `text-white` = texto branco; `md:` = a
  partir de telas médias. As cores da marca estão definidas no
  `tailwind.config.js`.

### Onde mexer para tarefas comuns

| Quero… | Edite… |
|--------|--------|
| Trocar um texto / telefone / pergunta | `src/data/content.ts` |
| Trocar uma cor da marca | `tailwind.config.js` (bloco `colors`) |
| Trocar uma imagem | substitua o arquivo em `public/images/` (mesmo nome) |
| Reordenar/remover uma seção | `src/App.tsx` |
| Ajustar o menu | `src/components/Header.tsx` + lista `nav` no `content.ts` |
| Conectar o formulário a um serviço real | `src/components/Contact.tsx` |

---

## 6. O formulário de contato

Hoje o formulário **abre o e-mail do visitante já preenchido** (via `mailto:`),
sem precisar de servidor. É simples e funciona em qualquer hospedagem estática.

Quando quiser **receber as mensagens automaticamente** (sem depender do cliente
de e-mail do visitante), troque a função `handleSubmit` em `Contact.tsx` por um
envio para um serviço de formulário, por exemplo **Formspree** ou **Web3Forms**
(ambos têm plano gratuito e funcionam com site estático). Há um comentário no
próprio arquivo indicando o ponto exato.

---

## 7. Imagens usadas e por quê (memória institucional → site novo)

| Arquivo | Onde aparece | Por quê |
|---------|--------------|---------|
| `forest-mist.jpg` | Hero | Foto vertical e nítida, cria atmosfera e escala. |
| `forest-aerial.jpg` | About / textura do Hero | Floresta densa reforça credibilidade ambiental. |
| `forest-hero.jpg` | Faixas escuras (Coalition/CTA) | Usada com overlay, onde a nitidez não é crítica. |
| `ndvi-mirador.jpg` | REDD+ (mapa do território) | Análise NDVI real das Fazendas Mirador (2020). |
| `tiger-cat.jpg` | REDD+ (espécie-bandeira) | *Leopardus tigrinus* ("pintadinho") que o projeto protege. |
| `ifma-partnership.jpg` | Impacto | Parceria GreenBR × IFMA em campo. |
| `community-mirador.jpg` | Impacto | Contexto territorial das comunidades de Mirador. |
| `partner-verra/orbify/unb.png` | Parceiros | Faixa de logos sóbria (tons de cinza → cor no hover). |
| `logo-greenbr.png` / `-white.png` | Cabeçalho / rodapé | Versões para fundo claro e escuro. |

As capas de relatório da ONU e a foto de montanhas do backup **não foram usadas**:
não são ativos do GreenBR e poderiam sugerir afirmações sem respaldo na fonte.

---

## 8. Suposições factuais a validar antes de publicar

Confira estes itens com a empresa — vieram do backup e podem conter erros:

1. **Telefone fixo**: o backup trazia `+55 61 30444-1616` (dígitos demais).
   Ajustei para `+55 61 3044-1616` como provável correto — **confirmar**.
2. **E-mail** `contato@greenbr.net.br` e **domínio** `greenbr.net.br` já ativos?
3. **Endereço** SBS Q. 2 - Lote XV, Brasília - DF — ainda é o oficial?
4. **Meta de 150 famílias** e detalhes da parceria IFMA — texto estava truncado
   no backup; revisar a redação final.
5. **Status do REDD+** ("under registration") — atualizar se já houver evolução.
6. Uso dos **logos** Verra/Orbify/UnB — confirmar permissão/forma de exibição.
7. Pertencimento atual à **Brazilian Coalition** — confirmar vigência.

---

## 9. Próximo passo: publicação

Quando você disser que está tudo certo, seguimos para a publicação. O fluxo
típico para um site estático como este:

1. `npm run build` gera a pasta `dist/`.
2. Sobe-se a `dist/` em uma hospedagem estática (Vercel, Netlify, Cloudflare
   Pages, ou a própria Hostinger que já aparecia no backup).
3. Aponta-se o domínio `greenbr.net.br` para a hospedagem.

Me avise e eu te guio nessa etapa.
