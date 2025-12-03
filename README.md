# TribuzFrontend

Frontend do projeto Tribos desenvolvido em React com Vite e styled-components.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite 5** - Build tool rápida e moderna
- **Styled Components** - CSS-in-JS para estilização
- **Axios** - Cliente HTTP para comunicação com API
- **Material Icons** - Ícones do Google Material Design

## 📦 Instalação

```bash
npm install
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento (porta 5173)
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter

## 🎨 Funcionalidades

### Páginas

- **Login** - Autenticação de usuários
- **Cadastro** - Registro de novos usuários
- **Esqueceu Senha** - Recuperação de senha por CPF
- **Dashboard** - Área principal do usuário

### Dashboard

- **Home** - Página inicial com lista de amigos
- **Tribos** - Gerenciamento de comunidades
  - Listar tribos
  - Buscar tribos
  - Criar nova tribo
  - Ver detalhes da tribo
  - Chat da tribo
- **Chat** - Conversas individuais e de tribos

### Recursos

- ✅ Persistência de sessão (localStorage)
- ✅ Formatação automática de CPF
- ✅ Validação de formulários
- ✅ Mensagens de erro e sucesso
- ✅ Loading states
- ✅ Modais interativos
- ✅ Design responsivo com tema escuro

## 🔌 Integração com API

O frontend se comunica com o backend através de `src/services/api.js`:

```javascript
import { criarUsuario, login, redefinirSenha, buscarTodasTribos, criarTribo } from './services/api'
```

**Base URL:** `http://localhost:8080`

## 📁 Estrutura do Projeto

```
tribuzFrontend/
├── src/
│   ├── App.jsx                    # Componente principal e roteamento
│   ├── main.jsx                   # Entry point
│   ├── services/
│   │   └── api.js                 # Serviços de API
│   ├── pages/
│   │   ├── Login/                 # Página de login
│   │   ├── Cadastro/              # Página de cadastro
│   │   ├── EsqueceuSenha/         # Recuperação de senha
│   │   └── Dashboard/             # Dashboard principal
│   │       ├── Home/              # Página inicial
│   │       ├── html/              # Componentes JSX
│   │       ├── css/               # Styled Components
│   │       └── js/                # Lógica e hooks
│   └── assets/                    # Assets estáticos
├── public/                        # Arquivos públicos
└── package.json                   # Dependências
```

## 🎨 Styled Components

O projeto utiliza styled-components para estilização. Exemplo de uso:

```jsx
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  background-color: #313338;
  color: #F2F3F5;
`
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (opcional):

```env
VITE_API_BASE_URL=http://localhost:8080
```

## 🐛 Troubleshooting

### Porta já em uso

O Vite automaticamente tentará a próxima porta disponível se 5173 estiver ocupada.

### Erro de dependências

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problemas com Vite

Se houver erros de compatibilidade, verifique a versão do Vite em `package.json` (deve ser `^5.4.11`).

## 📝 Notas

- O projeto usa React 19 com hooks modernos
- Sessão do usuário é mantida no `localStorage`
- CPF é formatado automaticamente no frontend
- Datas são convertidas de `DD/MM/YYYY` para `yyyy-MM-dd` antes de enviar ao backend
