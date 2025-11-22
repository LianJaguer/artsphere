# ARTSPHERE - Guia de Deployment

Bem-vindo ao ARTSPHERE! Este é seu guia completo para levar a aplicação do ambiente local até o Firebase Hosting.

## Estrutura do Projeto

O projeto ARTSPHERE segue a estrutura de um projeto React com Vite:

```
artsphere/
├── src/
│   ├── components/
│   │   ├── Explorar.jsx       # Galeria de artes
│   │   ├── MinhasObras.jsx    # Portfolio do artista
│   │   ├── Studio.jsx         # Gerador de imagens com IA
│   │   └── Persona.jsx        # Chatbot com roleplay
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Entry point
│   └── index.css              # Estilos globais
├── public/
├── package.json               # Dependências
├── vite.config.js             # Config Vite
├── firebase.json              # Config Firebase
├── .firebaserc                # Firebase project config
├── .gitignore                 # Git ignore
└── README.md                  # Documentação
```

## Pré-requisitos

1. **Node.js** (v16+): Download em https://nodejs.org/
2. **Git**: Download em https://git-scm.com/
3. **Firebase CLI**: `npm install -g firebase-tools`
4. **Conta Google**: Necessária para Firebase

## Passos para Deployment

### 1. Clone o Repositório

```bash
git clone https://github.com/LianJaguer/artsphere.git
cd artsphere
```

### 2. Instale as Dependências

```bash
npm install
```

Este comando irá instalar:
- React 18.2.0
- Vite 5.0.0
- Firebase SDK
- Tailwind CSS
- Axios

### 3. Configure o Firebase

#### 3a. Instale Firebase CLI (se ainda não tiver)

```bash
npm install -g firebase-tools
```

#### 3b. Faça Login no Firebase

```bash
firebase login
```

Isso abrirá uma janela do navegador para autenticação.

#### 3c. Inicialize o Firebase (OPCIONAL - já pré-configurado)

O projeto já está pré-configurado com:
- Project ID: `artsphere-cbb01`
- Hosting: Habilitado
- Firestore: Database pronto

### 4. Build da Aplicação

```bash
npm run build
```

Isso irá:
- Compilar React components
- Minificar código
- Gerar pasta `dist/` com arquivos otimizados

### 5. Deploy no Firebase Hosting

```bash
firebase deploy
```

Este comando irá:
- Fazer upload dos arquivos da pasta `dist/`
- Publicar na URL: `https://artsphere-cbb01.web.app`
- Disponibilizar também em: `https://artsphere-cbb01.firebaseapp.com`

### 6. Acesse a Aplicação

Após o deploy, acesse:
```
https://artsphere-cbb01.web.app
```

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com suas credenciais Firebase:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=artsphere-cbb01
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_GEMINI_API_KEY=
```

Obtenha essas valores no Firebase Console:
https://console.firebase.google.com/project/artsphere-cbb01/settings/general

## Funcionalidades Implementadas

### 📷 Explorar (Gallery)
- Exibe feeds de artes
- Filtros por categoria
- Busca por artista

### 🎨 Minhas Obras (Portfolio)
- Upload de artwork
- Galeria pessoal
- Gerenciamento de portfolio

### 🤖 Studio (IA Image Generator)
- Gerador de imagens com Gemini AI
- 4 modos de prompt:
  - Criativo: Prompts mais artisticos
  - Cauteloso: Prompts moderados
  - Direto: Prompts exatos
  - Roleplay: Com personagem
- Upload de imagens (Img2Img)
- Timeout: 45 segundos por requisição

### 💬 Persona (AI Chat)
- Chatbot com roleplay
- Conversação em português
- Context memória (últimas 10 mensagens)
- Respostas personalizadas

## Configuração do Firebase Firestore

O Firestore está configurado em **TEST MODE**. Para produção:

1. Acesse: https://console.firebase.google.com/project/artsphere-cbb01/firestore
2. Clique em "Regras"
3. Altere para:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

4. Clique em "Publicar"

## Troubleshooting

### Erro: "firebase command not found"
**Solução**: `npm install -g firebase-tools`

### Erro: "PERMISSION_DENIED" no Firestore
**Solução**: Verifique as regras de segurança (veja seção Firestore acima)

### Erro: "API key invalid" Gemini
**Solução**: Verifique a variável de ambiente `VITE_GEMINI_API_KEY`

### Build fails com "module not found"
**Solução**: `rm -rf node_modules && npm install`

## Desenvolvimento Local

Para desenvolvimento local com hot reload:

```bash
npm run dev
```

Acesse em: `http://localhost:5173`

## Deploy Automático (Opcional)

Para configurar deploy automático no GitHub:

1. Acesse Firebase Console → Hosting
2. Clique em "Conectar repositório"
3. Selecione seu repositório GitHub
4. Configure o branch (main)
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Clique em "Deploy"

## Tecnologias Utilizadas

- **Frontend**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3.3
- **Backend**: Cloud Firestore
- **Storage**: Cloud Storage (para imagens)
- **AI**: Google Gemini 2.5 Flash
- **HTTP**: Axios 1.6
- **Hosting**: Firebase Hosting

## Suporte

Para problemas ou dúvidas:
1. Verifique o console do navegador (F12)
2. Verifique os logs do Firebase: `firebase functions:log`
3. Consulte a documentação: https://firebase.google.com/docs

## Links Úteis

- Firebase Console: https://console.firebase.google.com/
- Firestore Docs: https://firebase.google.com/docs/firestore
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Tailwind Docs: https://tailwindcss.com
- Gemini API: https://ai.google.dev

---

**Deploy Status**: ✅ Pronto para produção

**Última Atualização**: 22 de Novembro, 2025
