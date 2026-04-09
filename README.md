# Felipe Augusto - Site Pessoal Freelancer

Site profissional de desenvolvedor web freelancer, construído com Next.js 15, TypeScript e Tailwind CSS. Focado em conversão de clientes para pequenos e médios negócios.

🌐 **[felipeaugustodev.com.br](https://felipeaugustodev.com.br)**

---

## Lighthouse

| Performance | Accessibility | Best Practices | SEO |
|:-----------:|:-------------:|:--------------:|:---:|
| 94 | 91 | 100 | 100 |

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Fontes:** Barlow Condensed + Geist (via `next/font/google`)
- **Ícones:** Lucide React
- **Testes:** Vitest + Testing Library
- **CI/CD:** GitHub Actions + Husky
- **Deploy:** Vercel

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz — fontes, metadata, Header, Footer
│   ├── page.tsx            # Home — composição das seções
│   ├── projetos/
│   │   └── page.tsx        # Galeria de projetos
│   ├── contato/
│   │   └── page.tsx        # Formulário + WhatsApp
│   ├── sitemap.ts          # Sitemap dinâmico
│   ├── robots.ts           # Regras para crawlers
│   └── styles/
│       └── globals.css     # Tokens de design (Tailwind v4 @theme)
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Nav desktop — Server Component
│   │   ├── MobileNav.tsx   # Menu mobile — Client Component
│   │   └── Footer.tsx      # Footer com links sociais
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Especialidades.tsx
│   │   ├── ComoFunciona.tsx
│   │   ├── Servicos.tsx
│   │   ├── Sobre.tsx
│   │   ├── FAQ.tsx
│   │   └── CTAFinal.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── FaqItem.tsx
│       └── HeroAnimated.tsx
├── data/
│   ├── about.ts
│   ├── faq.ts
│   ├── projects.ts
│   └── services.ts
├── lib/
│   └── constants.ts        # CONTACT, NAV_LINKS, HERO_CONTENT
└── types/
    └── index.ts            # Project, Service, FaqItem, AboutContent
```

---

## Rodando Localmente

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Testes
npm run test

# Testes com UI
npm run test:ui
```

---

## Testes

Cobertura com Vitest + Testing Library nos componentes críticos:

- `Header.tsx` — renderização, links de navegação, link de orçamento
- `MobileNav.tsx` — abertura/fechamento do menu, overlay, links
- `Servicos.tsx` — planos, features, links de WhatsApp por plano

```bash
npm run test
```

---

## SEO

- Metadata completo via Next.js `Metadata` API
- Open Graph e Twitter Card configurados
- `sitemap.xml` gerado dinamicamente
- `robots.txt` via `robots.ts`
- Schema.org via JSON-LD (em desenvolvimento)
- Google Search Console verificado e sitemap enviado

---

## Deploy

O deploy é feito automaticamente na Vercel a cada push na branch `main`.

O pipeline de CI (GitHub Actions) executa lint e testes antes do merge. Commits são validados pelo Husky com mensagens no padrão Conventional Commits.

---

## Contato

**Felipe Augusto da Silva**  
📧 augusto.felipedev@gmail.com  
💼 [linkedin.com/in/felipesilva90](https://linkedin.com/in/felipesilva90)  
🐙 [github.com/felipedev90](https://github.com/felipedev90)