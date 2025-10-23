# Librería Nexus — Angular 20

Aplicación web de una librería online construida con Angular 20 (standalone components), enfocada en mostrar un catálogo de libros, gestionar un carrito de compras y ofrecer una experiencia responsiva con Bootstrap.

> Proyecto generado con Angular CLI 20.3.6. Nombre del paquete: `practice-angular-nexus-bookstore`.

## 🚀 Características principales

- Catálogo de libros con tarjetas: portada, título, autor, precio, descuento y descripción.
- Cálculo automático de precios con descuento y totales del carrito.
- Carrito de compras persistente en `localStorage` (cantidad, subtotal, descuentos y total).
- Detalle de libro mediante modal (gestión centralizada del estado de apertura/cierre).
- Filtros de búsqueda (UI lista para: título, autor, año, género).
- Hero con carrusel de destacados y sección de FAQs.
- Tema claro/oscuro usando atributo `data-bs-theme` (persistido en `localStorage`).
- UI responsive con Bootstrap. Imágenes de portadas normalizadas manteniendo relación de aspecto.
- Angular sin Zone.js (Zoneless Change Detection).

## 🧩 Mapa de funcionalidades → código

- Catálogo y tarjetas:
  - `src/app/components/book-grid/` y `src/app/components/book-card/`
  - Mock de datos y formateo de precios: `src/app/constants/books-mock.ts`, `src/app/services/books-api-mock.ts`
- Carrito de compras (persistencia):
  - Servicio: `src/app/services/shopping-cart.ts`
  - Interfaz: `src/app/interfaces/shopping-cart-interface.ts`
- Modal de detalle:
  - Servicio de estado: `src/app/services/modal-manager.ts`
  - Componente modal: `src/app/components/modal/`
- Tema claro/oscuro:
  - `src/app/services/theme-manager.ts`
- Filtros (UI):
  - `src/app/components/book-filters/`
- Otras secciones:
  - Header/Footer/Hero/Sidebar/Faqs en `src/app/components/`

## 📦 Estructura del proyecto

```text
src/
  app/
    components/
      book-card/            # Tarjeta individual de libro
      book-grid/            # Grid responsivo del catálogo
      book-filters/         # Controles de filtrado (UI)
      cart/                 # Panel de carrito
      modal/                # Modal de detalle
      header/, footer/, hero/, faqs/, sidebar/
    constants/
      books-mock.ts         # Top de libros (mock) con descripciones
    interfaces/             # Tipos (Book, ShoppingCartItem, etc.)
    services/
      books-api-mock.ts     # Calcula discountedPrice y expone la lista
      shopping-cart.ts      # Señales, totales y persistencia en localStorage
      modal-manager.ts      # Estado del modal
      theme-manager.ts      # Toggle light/dark + persistencia
    config/
      app.config.ts, app.routes.ts
  assets/
    styles/bootstrap.min.css, js/bootstrap.bundle.min.js
```

## 🛠️ Tecnologías

- Angular 20 (standalone components, señales `signal`, `computed`, `effect`)
- Angular sin Zone.js mediante `provideZonelessChangeDetection()`
- TypeScript 5.9
- Bootstrap 5 (estilos y componentes responsive)

## 🧠 Modo sin Zone.js (zoneless) y Signals

- Zoneless: Configurado en `src/app/config/app.config.ts` con `provideZonelessChangeDetection()` para eliminar la dependencia de Zone.js y lograr un modelo de cambio de detección más explícito y predecible.
- Signals: El estado reactivo se gestiona con señales (`signal`, `computed`, `effect`). Ejemplos:
  - `ShoppingCart`: totales, descuentos y persistencia a `localStorage` con `computed` y `effect`.
  - `BooksApiMock`: cálculo de `discountedPrice` con `computed`.
  - `ModalManager` y `ThemeManager`: estado del modal y tema actual con `signal`/`effect`.

## ▶️ Cómo iniciar el proyecto

Requisitos recomendados: Node.js 20+ y npm 10+.

1. Instala dependencias:

```bash
npm install
```

1. Inicia el servidor de desarrollo:

```bash
npm start
```

1. Abre `http://localhost:4200/` en tu navegador.

Hot reload activo. Los cambios en `src/` recargan la app automáticamente.

## 🧱 Construir para producción

```bash
npm run build
```

Los artefactos quedan en `dist/` con optimizaciones de producción.

## 📝 Cómo agregar o editar libros

1. Abre `src/app/constants/books-mock.ts`.
2. Cada entrada sigue la interfaz `Book` en `src/app/interfaces/book-interface.ts`:
   - Campos: `id`, `title`, `author`, `price`, `category`, `imageUrl`, `year`, `description` y opcional `discountPercentage`.
3. Guarda. La UI mostrará el nuevo libro automáticamente.

Sugerencias:

- Usa imágenes con buena resolución; la tarjeta ajusta a una altura común manteniendo aspecto.
- Si una URL de imagen falla, reemplázala por otra válida (ej.: portadas de editoriales o catálogos confiables).

## ♿ Accesibilidad y UX

- Atributos `alt` descriptivos en portadas.
- Controles con `title`/`aria-*` en botones y carrusel.
- Contraste configurable por tema claro/oscuro.
- Layout responsive con Bootstrap grid y utilities.

## 📌 Notas adicionales

- Este proyecto no consume API real; los datos provienen de un mock local.
- Algunas piezas de UI (favoritos, filtros funcionales) están preparadas para ser implementadas en siguientes iteraciones.
- El router (`app.routes.ts`) está preparado pero sin rutas definidas en este momento.

## 👤 Autor

- Autor: [Welinton Guerrero](https://github.com/GuerreroWelinton)
