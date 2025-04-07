# 🎲 RPG Manager

Projeto desenvolvido para auxiliar no gerenciamento de campanhas de **RPG de mesa**, permitindo organizar personagens, enredos, regras e outros elementos importantes de forma prática e intuitiva.

🔗 [Acesse a versão de staging](https://rpg-manager-chi.vercel.app)

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|:------:|-----------|
| [Next.js](https://nextjs.org) | 14.1.4 | Framework React para aplicações fullstack com renderização híbrida (SSR, SSG) |
| [React](https://react.dev) | 18 | Biblioteca para construção de interfaces com componentes reutilizáveis |
| [TypeScript](https://www.typescriptlang.org) | 5 | Superset do JavaScript com tipagem estática e recursos avançados |
| [Tailwind CSS](https://tailwindcss.com) | 3.3.0 | Framework de classes utilitárias para estilização rápida e responsiva |
| [Headless UI](https://headlessui.com) | - | Componentes acessíveis e sem estilos acoplados, integrados com Tailwind |
| [Vercel](https://vercel.com) | - | Plataforma de hospedagem e deploy contínuo para aplicações Next.js |

---

## 🧱 Estrutura do Projeto

O projeto segue uma arquitetura modular com base nas boas práticas do ecossistema Next.js:

```bash
rpg-manager/
├── components/         # Componentes reutilizáveis que compõem a interface das páginas
├── data/               # Arquivos de dados estáticos, como arquivos JSON
├── libs/               # Funções auxiliares, hooks e integrações com bibliotecas externas
├── pages/              # Páginas e rotas baseadas na estrutura de URLs
│   ├── _app.tsx        # Configuração global da aplicação (ex: estilos globais, contextos)
│   ├── [...slug].tsx   # Rota dinâmica para páginas com caminhos variáveis
│   ├── 404.tsx         # Página personalizada para erro 404 (rota não encontrada)
│   └── index.tsx       # Página inicial da aplicação
├── public/             # Arquivos públicos acessíveis via URL (imagens, fontes, ícones)
├── styles/             # Estilos globais, configurações do Tailwind e customizações
└── types/              # Definições de tipos e interfaces utilizadas com TypeScript
```

## ✨ Funcionalidades

* 📖 Cadastro e visualização de personagens

* 📜 Organização de enredos, histórias e sessões

* 🗃️ Armazenamento local de dados via JSON (temporário)

* 🧩 Interface dinâmica e responsiva com Tailwind CSS

* 🔄 Roteamento dinâmico com Next.js

* 📦 Estrutura modular com componentes reutilizáveis

* 🔐 Preparado para futura adição de autenticação e banco de dados

## 🧪 Como Rodar o Projeto Localmente

1. Clone o repositório e acesse a pasta do projeto:

    ``` bash
    git clone https://github.com/yujinishioka/rpg-manager.git
    cd rpg-manager
    ```

2. Instale as dependências (recomendado: Yarn):

    ``` bash
    npm install
    # ou
    yarn
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4. Acesse o projeto em seu navegador através de:

    [http://localhost:3000](http://localhost:3000)

## 📄 Licença

Este projeto está licenciado sob os termos da licença MIT. Sinta-se livre para utilizar, modificar e distribuir conforme necessário.