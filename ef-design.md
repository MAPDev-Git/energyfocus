# ⚡ Design System — Energy & Focus (More Than Aromas)

Documento de especificação do Design System individual para a nova Landing Page do suplemento **Energy & Focus**.

---

## 🎨 1. Paleta de Cores e Tokens Semânticos

A paleta de cores é baseada em uma combinação sofisticada de **Azul Marinho Quase Preto (`#050C16`)**, **Azul Marinho Refinado (`#0D1522`)**, seções em **Marfim / Off-White (`#FEFCED`)**, rodapé em **Preto Puro (`#000000`)** e acentos em **Burnished Gold & Bright Gold (`#C9A84C` / `#E0C060`)**.

### 🌟 Cores da Marca (Brand Swatches & Hex Tokens)

| Token | Valor Hex / RGBA | Descrição & Uso Principal |
| :--- | :--- | :--- |
| `background_dark` | `#050C16` | Azul Marinho Quase Preto (Fundo Base Escuro do Canvas) |
| `surface_dark` | `#0D1522` | Azul Marinho Escuro Refinado (Cards, Header, Elevações) |
| `background_light` | `#FEFCED` | Marfim / Off-White Principal (Seções Claras e Contrastantes) |
| `footer_black` | `#000000` | Preto Puro (Fundo do Rodapé Principal) |
| `gold` | `#C9A84C` | Ouro Velho / Burnished Gold (CTA Principal, Acentos) |
| `gold_bright` | `#E0C060` | Ouro Vivo / Bright Gold (Títulos, Headlines e Acentos) |
| `gold_deep` | `#8D7556` | Ouro Escuro / Muted Gold (Labels, Subtítulos e Captions) |
| `gold_soft` | `rgba(201, 168, 76, 0.12)` | Gold Wash (Fundos de Badges, Hover de Cards) |
| `gold_glow` | `rgba(201, 168, 76, 0.25)` | Gold Glow (Efeitos de Sombra Decorativa e Neon Suave) |
| `neutral.foreground` | `#EDEBE6` | Parchment / Off-White (Texto Principal no Fundo Escuro) |
| `neutral.text_light` | `#050C16` | Azul Escuro (Texto Principal no Fundo Claro `#FEFCED`) |
| `neutral.text_gray` | `#5A6578` | Cinza Azulado (Texto Secundário / Muted no Fundo Claro) |

---

## ✒️ 2. Tipografia

- **Família Principal:** `'Outfit', sans-serif` (Pesos: 400, 500, 600, 700, 800, 900)
- **Família Mono / Métricas:** `'JetBrains Mono', monospace`

```css
:root {
  --bg-dark: #050C16;
  --surface-dark: #0D1522;
  --bg-light: #FEFCED;
  --footer-black: #000000;
  --gold: #C9A84C;
  --gold-bright: #E0C060;
  --gold-deep: #8D7556;
  --gold-soft: rgba(201, 168, 76, 0.12);
  --gold-glow: rgba(201, 168, 76, 0.25);
  --text-dark-bg: #EDEBE6;
  --text-light-bg: #050C16;
  --text-gray-bg: #5A6578;
}
```

---

## 📐 3. Espaçamento, Raios e Sombras

- **Raios de Borda (`border-radius`):** `8px` (sm), `12px` (md), `20px` (lg), `28px` (xl), `9999px` (full).
- **Sombras:**
  - `shadow-card`: `0 12px 40px rgba(0, 0, 0, 0.5)`
  - `shadow-gold-glow`: `0 0 35px rgba(201, 168, 76, 0.25)`
  - `glass-blur`: `backdrop-filter: blur(16px); background: rgba(13, 21, 34, 0.8);`

---

## 🧩 4. Componentes e Variações de Fundo

1. **Header e Seções Escuras:**
   - Fundo em `background_dark` (`#050C16`), superfície dos cards em `surface_dark` (`#0D1522`) com texto em `neutral.foreground` (`#EDEBE6`) e destaques em `gold_bright` (`#E0C060`).
2. **Seções de Contraste / Destaque (Seções Claras):**
   - Fundo em `background_light` (`#FEFCED`), texto principal em `neutral.text_light` (`#050C16`) e texto secundário em `neutral.text_gray` (`#5A6578`).
3. **Rodapé (Footer):**
   - Fundo em `footer_black` (`#000000`) absoluto com detalhes dourados.
