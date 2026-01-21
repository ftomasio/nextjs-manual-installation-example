# 🚀 Next.js Manual Installation Example

Um exemplo prático de como configurar um projeto Next.js manualmente, passo a passo, sem usar `create-next-app`.

## 📋 Sobre o Projeto

Este projeto demonstra a instalação e configuração manual do Next.js 16 com React 19, TypeScript e as melhores práticas de desenvolvimento. Ideal para entender os fundamentos e ter controle total sobre a configuração inicial.

## ✨ Funcionalidades

- ⚡ **Next.js 16** - Framework React com App Router
- 🔷 **React 19** - Biblioteca de interface de usuário
- 📘 **TypeScript** - Tipagem estática para JavaScript
- 🎯 **App Router** - Sistema de roteamento moderno do Next.js
- 🛠️ **Scripts de desenvolvimento** - Build, dev, start e lint

## 🛠️ Tecnologias Utilizadas

### **Dependências Principais**
- **Next.js** `^16.1.4` - Framework React
- **React** `^19.2.3` - Biblioteca UI
- **React DOM** `^19.2.3` - Renderização React

### **Dependências de Desenvolvimento**
- **TypeScript** `5.9.3` - Linguagem tipada
- **@types/node** `25.0.9` - Tipos do Node.js
- **@types/react** `19.2.9` - Tipos do React

## 📁 Estrutura do Projeto

```
nextjs-manual-installation-example/
├── 📂 app/                   # App Router (Next.js 13+)
│   ├── 📄 layout.tsx         # Layout raiz da aplicação
│   └── 📄 page.tsx           # Página inicial
├── 📂 public/                # Arquivos estáticos
│   └── 🖼️ profile.jpg        # Imagem de perfil
├── ⚙️ .gitignore             # Arquivos ignorados pelo Git
├── ⚙️ next-env.d.ts          # Tipos do Next.js
├── ⚙️ package.json           # Configurações e dependências
├── ⚙️ pnpm-lock.yaml         # Lock de dependências
├── ⚙️ tsconfig.json          # Configurações TypeScript
└── 📖 README.md              # Este arquivo
```

## 🚀 Como Executar

### **Pré-requisitos**
- Node.js 18+ instalado
- npm, yarn ou pnpm

### **Instalação**

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd nextjs-manual-installation-example
   ```

2. **Instale as dependências**
   ```bash
   # Com pnpm (recomendado)
   pnpm install
   
   # Com npm
   npm install
   
   # Com yarn
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   # Com pnpm
   pnpm dev
   
   # Com npm
   npm run dev
   
   # Com yarn  
   yarn dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📝 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **dev** | `pnpm dev` | Inicia o servidor de desenvolvimento |
| **build** | `pnpm build` | Gera build de produção |
| **start** | `pnpm start` | Inicia servidor de produção |
| **lint** | `pnpm lint` | Executa linting do código |
| **lint:fix** | `pnpm lint:fix` | Corrige problemas de lint automaticamente |

## 🔧 Configuração Manual

### **1. Inicialização**
```bash
# Criar package.json
npm init -y

# Instalar dependências principais
pnpm add next react react-dom

# Instalar dependências de desenvolvimento  
pnpm add -D typescript @types/react @types/node
```

### **2. Configuração TypeScript**
Criar `tsconfig.json`:
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### **3. Estrutura App Router**
Criar estrutura básica:
- `app/layout.tsx` - Layout raiz
- `app/page.tsx` - Página inicial

## 🎯 Próximos Passos

- [ ] 🎨 Adicionar CSS/Tailwind CSS
- [ ] 🧪 Configurar testes (Jest + Testing Library)
- [ ] 📏 Configurar ESLint e Prettier
- [ ] 🔍 Adicionar componentes reutilizáveis
- [ ] 🌐 Implementar roteamento avançado
- [ ] 📱 Configurar responsividade

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m '🎉 feat: adicionar nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📚 Recursos Úteis

- [📖 Documentação do Next.js](https://nextjs.org/docs)
- [⚛️ Documentação do React](https://react.dev/)
- [🔷 TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [🎨 Conventional Commits](https://www.conventionalcommits.org/)

---

<div align="center">
  Desenvolvido com ❤️ usando Next.js 16 + React 19 + TypeScript
</div>
