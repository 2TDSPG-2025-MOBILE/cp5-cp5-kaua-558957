<h1 align="center">🔮 Calculadora Científica</h1>

<p align="center">
  <b>Um aplicativo mobile moderno com design tecnológico e tema escuro, desenvolvido em React Native + Expo Router.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0D1117?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Expo-1B1B1D?style=for-the-badge&logo=expo&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-0F0F10?style=for-the-badge&logo=typescript&logoColor=3178C6"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-141414?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8"/>
</p>

---

## 🚀 Sobre o Projeto

O **Calculadora Científica** é um app mobile criado com **React Native** e **Expo Router**, projetado para oferecer uma experiência fluida e tecnológica.  
Com uma interface **escura, moderna e minimalista**, o app realiza cálculos básicos e exibe uma aba “Explorar” para recursos futuros.

> 💡 Projeto desenvolvido para a **CP5 - FIAP 2025**.

---

## 🧭 Estrutura do Projeto

```
app/
 ├── (tabs)/
 │    ├── _layout.tsx        → Define as abas inferiores (Home, Calculadora, Explorar)
 │    ├── index.tsx          → Tela inicial do aplicativo
 │    ├── calculator.tsx     → Tela principal da calculadora científica
 │    └── explore.tsx        → Tela de recursos e futuras funcionalidades
 ├── _layout.tsx             → Layout global (Stack principal)
 └── modal.tsx               → Modal para futuras extensões
```

---

## ⚙️ Instalação e Execução

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/2TDSPG-2025-MOBILE/cp5-cp5-kaua-558957.git
cd cp5-cp5-kaua-558957
```

### 2️⃣ Instalar as dependências
```bash
npm install
```

### 3️⃣ Rodar o projeto
```bash
npx expo start
```

Abra o app no **Expo Go** (Android/iOS) ou execute em um **emulador**.

---

## 🎨 Design e Estilo

O projeto adota uma estética **tech minimalista**, com o foco em contraste, legibilidade e fluidez.

| Função | Cor |
|--------|-----|
| **Primária** | `#6b256f` (Roxo tecnológico) |
| **Secundária** | `#194b32` (Verde escuro) |
| **Terciária** | `#c45d1d` (Laranja metálico) |
| **Fundo** | `#0f0f10` → `#1b1b1d` |

---

## 🧩 Funcionalidades

### 🏠 **Tela Inicial**
- Apresentação do aplicativo.
- Botão para acessar diretamente a Calculadora.

### 🧮 **Calculadora Científica**
- Interface moderna com botões reativos.
- Cálculos básicos: `+, -, *, /, .`
- Botão **C** para limpar expressões.
- Exibição de resultado com design tecnológico.

### 🌌 **Explorar**
- Recursos futuros planejados:
  - Modo científico completo (log, sen, cos, raiz, etc.)
  - Tema dinâmico com animações.
  - Sincronização de histórico via API.

---

## 🧠 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| ⚛️ **React Native** | Framework principal para apps mobile. |
| 🧭 **Expo Router** | Navegação moderna baseada em arquivos. |
| 🎨 **NativeWind + TailwindCSS** | Estilização rápida e responsiva. |
| 🌈 **expo-linear-gradient** | Gradientes suaves e elegantes. |
| 🧱 **TypeScript** | Tipagem estática e segurança no código. |
| 🧩 **@expo/vector-icons** | Ícones modernos e compatíveis. |

---

## 🧰 Instalações Extras

Caso falte alguma dependência, execute:

```bash
npx expo install expo-linear-gradient @expo/vector-icons
npm install nativewind tailwindcss
npx tailwindcss init
```

Configure o **Tailwind** em `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

---

## 🖼️ Demonstração (Preview)

<p align="center">
  <img src="https://github.com/kauazipf/assets/raw/main/calculadora-preview.png" width="280px" />
</p>

> Interface escura com abas modernas e tipografia tecnológica.

---

## 🧑‍💻 Autor

- **Kauã Zipf - RM558957**  

- **Caetano Penafiel - RM557984** 

- **Victor Egidio - RM556653** 

- **Diego Bassalo - RM558710** 

- **Jennifer Kaori  - RM554661** 

- **Felipe Levy - RM556426** 

📚 Curso: Desenvolvimento Mobile — FIAP  
📅 Projeto: CP5 - 2025  
🌐 [GitHub](https://github.com/kauazipf)

---

## 🧱 Melhorias Futuras

- 🔢 Implementar funções científicas completas.  
- ☁️ Sincronizar histórico via API.  
- 💾 Salvar preferências de tema localmente.  
- ⚡ Adicionar animações com Framer Motion.  
- 🧠 Criar modo educacional interativo.

---

## 📜 Licença

Este projeto é de uso **educacional** e faz parte da **CP5 - FIAP 2025**.  
Distribuído sob a **Licença MIT** — livre para estudo e modificação.

---

<p align="center">
  <b>✨ “Tecnologia e lógica em harmonia — uma calculadora além dos números.”</b>
</p>
