# VitrinePro - Plataforma de Vitrines Profissionais

Uma plataforma moderna para profissionais criarem e exibirem suas vitrines online, conectando talento com oportunidades.

## 🚀 Funcionalidades

- **Vitrines Profissionais**: Crie perfis atrativos para mostrar seu trabalho
- **Sistema de Autenticação**: Login e cadastro com Google e LinkedIn
- **Design Responsivo**: Totalmente otimizado para desktop, tablet e mobile
- **Interface Moderna**: UI/UX elegante com gradientes e animações suaves

## 🛠️ Tecnologias

- **Astro**: Framework web moderno para conteúdo-driven websites
- **Vue.js**: Framework progressivo para interfaces interativas
- **TypeScript**: JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS utilitário (estilos customizados)

## 🧞 Comandos

| Comando                   | Ação                                           |
| :------------------------ | :--------------------------------------------- |
| `npm install`             | Instala dependências                           |
| `npm run dev`             | Inicia servidor de desenvolvimento             |
| `npm run build`           | Build para produção (pasta `./docs/`)          |
| `npm run preview`         | Visualiza build localmente                     |
| `npm run deploy`          | Build e instruções para deploy                 |

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages:

### Configuração Inicial

1. **No GitHub**: Vá para seu repositório → Settings → Pages
2. **Source**: Selecione "Deploy from a branch"
3. **Branch**: Selecione `main` e pasta `/docs`
4. **Salve as configurações**

### Deploy Automático

O deploy acontece automaticamente quando você faz push para a branch `main`. O GitHub Actions irá:

- Instalar dependências
- Fazer build do projeto
- Gerar arquivos na pasta `docs/`

O GitHub Pages serve automaticamente da pasta `docs/` quando configurado.

### Deploy Manual

```bash
# Build do projeto localmente
npm run build

# Commit e push das mudanças (incluindo pasta docs/)
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

**Importante**: Para el método docs folder, necesitas hacer build localmente y commitear la carpeta `docs/` generada.

### Solução de Problemas (404 Error)

Se você receber um erro 404, verifique:

1. **Branch correta**: Certifique-se que está fazendo push para `main` ou `master`
2. **Pasta docs**: No GitHub Pages settings, selecione a pasta `/docs`
3. **Base path**: Já configurado para `VitrinePro-frontend`:
   ```js
   base: '/VitrinePro-frontend/',
   ```
   Se mudar o nome do repositório, atualize esta configuração.
4. **Workflow**: Verifique se o GitHub Actions executou com sucesso
5. **Build**: Certifique-se que `npm run build` gera arquivos na pasta `docs/`

## 📁 Estrutura do Projeto

```
/
├── .github/workflows/
│   └── deploy.yml          # Configuração GitHub Actions
├── docs/                   # Build de produção (GitHub Pages)
├── public/                 # Assets estáticos
├── src/
│   ├── components/         # Componentes Vue e Astro
│   ├── layouts/           # Layouts da aplicação
│   ├── pages/             # Páginas da aplicação
│   └── assets/            # Assets processados
├── astro.config.mjs       # Configuração Astro
└── package.json
```

## 🎨 Páginas

- **Home** (`/`): Página inicial com apresentação
- **Login** (`/login`): Autenticação de usuários
- **Cadastro** (`/cadastro`): Registro de novos usuários
- **Recuperar Senha** (`/recuperar-senha`): Recuperação de senha
- **Perfil** (`/profile`): Perfil do usuário

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints otimizados:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request