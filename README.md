# 📘 Guía de TypeScript para Desarrollo Web

Esta guía está dividida en dos grandes bloques: **Frontend** y **Backend**, con los conceptos más importantes para trabajar de forma profesional usando **TypeScript**.

---

## 🎯 TypeScript para Frontend

### 1. Tipado básico y estructuras

- Tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined`
- Tipos flexibles: `any`, `unknown`, `void`
- Estructuras de datos:
  - Tuplas
  - Enums

---

### 2. Types e Interfaces

- Propiedades opcionales con `?`
- Propiedades `readonly`
- Extensión con `extends`
- **Utility Types**:
  - `Pick<>`
  - `Omit<>`
  - `Partial<>`
  - `Readonly<>`

---

### 3. Funciones tipadas

- Funciones declaradas y funciones flecha
- Tipado de:
  - Parámetros
  - Retornos (`void`, `never`, `boolean`, etc.)

---

### 4. React + TypeScript

- Tipado de `props` en componentes
- Tipado de hooks:
  - `useState`
  - `useRef`
  - `useEffect`
- Eventos del DOM:
  - `React.ChangeEvent`
  - `React.MouseEvent`
  - etc.
- Tipado de componentes:
  - Con o sin `React.FC`

---

### 5. Genéricos simples

- Uso de `T` en funciones y componentes reutilizables

---

### 6. Narrowing y Type Guards

- Técnicas para refinar tipos:
  - `typeof`
  - `instanceof`
  - `in`

---

### 7. Configuración y entorno

- Crear proyectos con **Vite**
- Instalar TypeScript con hot-reload
- Configurar `tsconfig.json` para React
- Organización de carpetas y tipos compartidos

---

## 🛠️ TypeScript para Backend

### 1. Tipado base (repaso rápido)

- Tipos primitivos, estructuras y objetos básicos

---

### 2. Objetos, Types e Interfaces

- Aplicación a:
  - Modelos
  - Requests
  - Respuestas

---

### 3. Funciones tipadas

- Uso de `async/await` con `Promise<T>`

---

### 4. Tipar Express

- Tipado de:
  - `Request`
  - `Response`
  - `NextFunction`
- Extensión del objeto `Request` para tipar:
  - `req.body`
  - `req.params`
  - `req.query`

---

### 5. Genéricos simples

- Aplicación en:
  - Helpers
  - Servicios reutilizables
  - Validaciones

---

### 6. Tipos de utilidad

- Aplicados a DTOs, updates, etc.:
  - `Pick<>`
  - `Omit<>`
  - `Partial<>`
  - `Required<>`

---

### 7. Manejo de errores

- Manejo con `try/catch` usando `unknown`
- Errores personalizados tipados

---

### 8. Organización de tipos

- Archivos separados para:
  - Modelos
  - DTOs
- Tipado centralizado por dominio

---

### 9. tsconfig y setup de entorno

- Uso de:
  - `node-ts`
  - `ts-node`
- Configuraciones comunes:
  - `outDir` / `dist`
  - `CommonJS` vs `ESModules`

---