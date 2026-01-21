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