# Estrutura do Frontend - Tribuz

## 📁 Organização de Pastas

Este projeto segue uma estrutura simples e organizada, separando responsabilidades de forma clara.

### Estrutura Geral

```
src/
├── pages/                    # Páginas da aplicação
│   └── Cadastro/            # Página de cadastro
│       ├── css/             # Estilos (Styled Components)
│       ├── js/              # Lógica (Hooks, Funções)
│       ├── html/            # JSX (Estrutura)
│       └── index.js         # Export do componente
│
├── styles/                   # Estilos globais
│   └── GlobalStyles.js      # Estilos globais com styled-components
│
├── App.jsx                   # Componente principal
└── main.jsx                  # Entry point da aplicação
```

## 🎯 Padrão de Organização por Página

Cada página segue o mesmo padrão de organização com **3 pastas principais**:

### 1. **css/** - Estilos (Styled Components)
- Contém todos os styled components da página
- Arquivo: `[NomePagina].styles.js`
- Exemplo: `Cadastro.styles.js`

**Conteúdo:**
- Todos os componentes estilizados usando `styled-components`
- Exporta componentes como `PageContainer`, `CardContainer`, `Input`, `Button`, etc.

### 2. **js/** - Lógica
- Contém toda a lógica da página
- Arquivo: `[NomePagina].js`
- Exemplo: `Cadastro.js`

**Conteúdo:**
- Hooks customizados (ex: `useCadastro`)
- Funções utilitárias (ex: `formatCPF`)
- Handlers de eventos
- Estados e lógica de negócio

### 3. **html/** - JSX (Estrutura)
- Contém o JSX puro da página
- Arquivo: `[NomePagina].jsx`
- Exemplo: `Cadastro.jsx`

**Conteúdo:**
- Importa styled components de `../css/`
- Importa lógica de `../js/`
- Contém apenas a estrutura JSX
- Renderiza os componentes estilizados

### 4. **index.js** - Export
- Exporta o componente principal
- Facilita imports: `import Cadastro from './pages/Cadastro'`

## 📝 Exemplo Prático - Página Cadastro

```
pages/Cadastro/
├── css/
│   └── Cadastro.styles.js    # PageContainer, CardContainer, Input, Button, etc.
├── js/
│   └── Cadastro.js           # useCadastro(), formatCPF(), handlers
├── html/
│   └── Cadastro.jsx          # JSX que importa css e js
└── index.js                   # export { default } from './html/Cadastro'
```

### Fluxo de Importação

```jsx
// html/Cadastro.jsx
import { PageContainer, Input, Button } from '../css/Cadastro.styles'
import { useCadastro } from '../js/Cadastro'

function Cadastro() {
  const { formData, handleSubmit } = useCadastro()
  
  return (
    <PageContainer>
      <Input ... />
      <Button ... />
    </PageContainer>
  )
}
```

## 🎨 Estilos Globais

Os estilos globais ficam em `styles/GlobalStyles.js` e são aplicados no `main.jsx`:

```jsx
// main.jsx
import { GlobalStyles } from './styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
)
```

## ✅ Vantagens desta Estrutura

1. **Separação Clara**: CSS, JS e HTML em pastas distintas
2. **Fácil Manutenção**: Cada responsabilidade em seu lugar
3. **Escalável**: Fácil adicionar novas páginas seguindo o mesmo padrão
4. **Organizado**: Estrutura simples e intuitiva
5. **Reutilizável**: Componentes estilizados podem ser exportados se necessário

## 📋 Como Criar uma Nova Página

1. Criar pasta em `pages/[NomePagina]/`
2. Criar `css/[NomePagina].styles.js` com styled components
3. Criar `js/[NomePagina].js` com lógica e hooks
4. Criar `html/[NomePagina].jsx` com JSX
5. Criar `index.js` exportando o componente
6. Importar em `App.jsx` ou configurar rotas

## 🔧 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript
- **Vite** - Build tool
- **Styled Components** - CSS-in-JS
- **Material Symbols** - Ícones

## 📌 Convenções

- Nomes de arquivos em PascalCase para componentes
- Nomes de pastas em camelCase
- Styled components exportados com nomes descritivos
- Hooks customizados começam com `use` (ex: `useCadastro`)

