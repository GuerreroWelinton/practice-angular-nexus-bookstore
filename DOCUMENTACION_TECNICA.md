# Documentación Técnica - Librería Nexus Angular 20

## Información del Proyecto

- **Nombre:** practice-angular-nexus-bookstore
- **Framework:** Angular 20 (standalone components)
- **Arquitectura:** Sin Zone.js (provideZonelessChangeDetection)
- **Estado:** Reactive programming con Signals

## Componentes Creados

### 1. BookCard Component

**Archivo:** `src/app/components/book-card/`
**Propósito:** Tarjeta individual para mostrar información de un libro

#### Data Binding Empleado:

- **Property Binding:**
  - `[src]="book().imageUrl"` - Enlaza la URL de la imagen
  - `[alt]="book().title + ' por ' + book().author + ' - Portada del libro'"` - Texto alternativo dinámico
  - `[title]="book().title"` - Tooltip con el título completo
  - `[style.height.px]="300"` - Height dinámico en píxeles

- **Event Binding:**
  - `(click)="viewDetails.emit(book())"` - Emite evento para ver detalles
  - `(click)="addToCart.emit(book())"` - Emite evento para agregar al carrito
  - `(click)="addToFavorites.emit(book())"` - Emite evento para favoritos

- **Interpolation:**
  - `{{ book().title }}` - Muestra el título del libro
  - `{{ book().author }}` - Muestra el autor
  - `{{ book().description }}` - Muestra la descripción
  - `{{ book().discountPercentage }}` - Muestra porcentaje de descuento
  - `{{ book().price | currency }}` - Precio con pipe currency
  - `{{ book().discountedPrice | currency }}` - Precio con descuento

#### Directivas Utilizadas:

- **Directiva Estructural:**
  - `@if (book().discountPercentage && book().discountedPrice)` - Control flow para mostrar descuento
  - `@if (!book().discountPercentage || !book().discountedPrice)` - Control flow para precio normal

- **Directivas de Atributo:**
  - Bootstrap classes: `class="card h-100"`, `class="btn btn-primary"`
  - Responsive classes: `class="d-none d-sm-block"`, `class="d-block d-sm-none"`

### 2. BookGrid Component

**Archivo:** `src/app/components/book-grid/`
**Propósito:** Grid responsivo que contiene múltiples BookCard

#### Data Binding Empleado:

- **Property Binding:**
  - `[book]="book"` - Pasa el objeto book al componente hijo

- **Event Binding:**
  - `(addToCart)="addToCart($event)"` - Escucha evento del componente hijo
  - `(addToFavorites)="addToFavorites($event)"` - Escucha evento de favoritos
  - `(viewDetails)="displayBookDetails($event)"` - Escucha evento de detalles

#### Directivas Utilizadas:

- **Directiva Estructural:**
  - `@for (book of books(); track $index)` - Nueva sintaxis de control flow para iterar libros

- **Directivas de Atributo:**
  - Bootstrap grid: `class="row g-3"`, `class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"`

- **Content Projection:**
  - `<ng-content select="[title]"></ng-content>` - Proyección de contenido para título
  - `<ng-content select="[filters]"></ng-content>` - Proyección para filtros

### 3. Cart Component

**Archivo:** `src/app/components/cart/`
**Propósito:** Carrito de compras con gestión de items y totales

#### Data Binding Empleado:

- **Property Binding:**
  - `[item]="item"` - Pasa item del carrito al componente hijo

- **Event Binding:**
  - `(displayBookDetails)="displayBookDetails($event)"` - Maneja evento de mostrar detalles
  - `(increaseQuantity)="increaseQuantity($event)"` - Incrementa cantidad
  - `(decreaseQuantity)="decreaseQuantity($event)"` - Decrementa cantidad
  - `(removeFromCart)="removeFromCart($event)"` - Remueve del carrito

- **Interpolation:**
  - `{{ subTotalPrice() | currency }}` - Subtotal con pipe currency
  - `{{ discount() | currency }}` - Descuento total
  - `{{ totalPrice() | currency }}` - Total final

#### Directivas Utilizadas:

- **Directivas Estructurales:**
  - `@for (item of items(); track $index)` - Itera items del carrito
  - `@empty` - Bloque cuando no hay items (nueva sintaxis Angular)
  - `@if (items().length > 0)` - Muestra totales solo si hay items

### 4. Header Component

**Archivo:** `src/app/components/header/`
**Propósito:** Navegación principal con carrito y selector de tema

#### Data Binding Empleado:

- **Property Binding:**
  - `[iconName]="currentTheme() === 'light' ? 'moon' : 'sun'"` - Binding condicional para icono de tema
  - `[style.top.px]="-8"` - Posición del badge
  - `[style.right.px]="-10"` - Posición del badge

- **Event Binding:**
  - `(click)="toggleTheme()"` - Cambia tema claro/oscuro

- **Interpolation:**
  - `{{ totalItemsInCart() }}` - Cantidad de items en el badge del carrito

#### Directivas Utilizadas:

- **Directivas de Atributo:**
  - Bootstrap navigation: `class="navbar navbar-expand-lg fixed-top bg-primary"`
  - Responsive display: `class="d-block d-lg-none"`, `class="d-none d-lg-block"`
  - Bootstrap attributes: `data-bs-toggle="collapse"`, `data-bs-target="#navbarContent"`

- **Template Reference:**
  - `*ngTemplateOutlet="cartButton"` - Reutiliza template del botón carrito
  - `*ngTemplateOutlet="themeButton"` - Reutiliza template del botón tema
  - `<ng-template #cartButton>` - Template reutilizable
  - `<ng-template #themeButton>` - Template reutilizable

### 5. CartItem Component

**Archivo:** `src/app/components/cart-item/`
**Propósito:** Item individual del carrito con controles de cantidad

#### Data Binding Empleado:

- **Property Binding:**
  - `[src]="item().book.imageUrl"` - URL de imagen del libro
  - `[alt]="item().book.title + ' - Imagen del libro'"` - Texto alternativo
  - `[disabled]="item().quantity === 1"` - Deshabilita botón decrementar

- **Event Binding:**
  - `(click)="displayBookDetails.emit(item())"` - Emite evento para mostrar detalles
  - `(click)="increaseQuantity.emit(item())"` - Incrementa cantidad
  - `(click)="decreaseQuantity.emit(item())"` - Decrementa cantidad
  - `(click)="removeFromCart.emit(item())"` - Remueve del carrito

- **Interpolation:**
  - `{{ item().book.title }}` - Título del libro
  - `{{ item().quantity }}` - Cantidad actual
  - `{{ item().book.price | currency }}` - Precio unitario
  - `{{ (item().book.price * item().quantity) | currency }}` - Subtotal del item

#### Directivas Utilizadas:

- **Directivas de Atributo:**
  - Bootstrap classes: `class="btn btn-outline-secondary"`, `class="input-group"`
  - `[disabled]` - Directive para deshabilitar botones

### 6. Modal Component

**Archivo:** `src/app/components/modal/`
**Propósito:** Modal para mostrar detalles completos del libro

#### Data Binding Empleado:

- **Property Binding:**
  - `[src]="data()?.imageUrl"` - URL de imagen con safe navigation
  - `[alt]="data()?.title + ' - Portada completa'"` - Texto alternativo
  - `[class.show]="isOpen()"` - Clase condicional para mostrar modal

- **Event Binding:**
  - `(click)="closeModal()"` - Cierra el modal

- **Interpolation:**
  - `{{ data()?.title }}` - Título con safe navigation
  - `{{ data()?.author }}` - Autor
  - `{{ data()?.description }}` - Descripción completa
  - `{{ data()?.year }}` - Año de publicación
  - `{{ data()?.category }}` - Categoría del libro

#### Directivas Utilizadas:

- **Directivas Estructurales:**
  - `@if (data())` - Solo muestra contenido si hay datos
  - `@if (data()?.discountPercentage)` - Muestra descuento condicionalmente

- **Directivas de Atributo:**
  - Bootstrap modal: `class="modal fade"`, `class="modal-dialog"`
  - `[class.show]="isOpen()"` - Clase condicional

### 7. FeatherIcon Component

**Archivo:** `src/app/components/feather-icon/`
**Propósito:** Componente para mostrar iconos Feather

#### Data Binding Empleado:

- **Property Binding:**
  - `[attr.fill]="fill()"` - Color de relleno del icono
  - `[attr.stroke]="stroke()"` - Color del contorno

#### Directivas Utilizadas:

- **Directivas de Atributo:**
  - SVG attributes: `width="24"`, `height="24"`
  - `[attr.fill]` y `[attr.stroke]` - Attribute binding

### 8. BookFilters Component

**Archivo:** `src/app/components/book-filters/`
**Propósito:** Controles de filtrado para el catálogo

#### Data Binding Empleado:

- **Property Binding:**
  - Bootstrap form controls con clases responsivas

#### Directivas Utilizadas:

- **Directivas de Atributo:**
  - Bootstrap forms: `class="form-control"`
  - Responsive grid: `class="col-6 col-md-3"`

## Tipos de Data Binding Utilizados

### 1. **Interpolation (String Interpolation)**

```typescript
{
  {
    expression;
  }
}
```

- Usado para mostrar valores dinámicos en el template
- Ejemplos: títulos, precios, cantidades, descripciones

### 2. **Property Binding**

```typescript
[property] = 'expression';
```

- Enlaza propiedades de elementos HTML con propiedades del componente
- Ejemplos: `[src]`, `[alt]`, `[disabled]`, `[class.show]`

### 3. **Event Binding**

```typescript
event = 'expression';
```

- Escucha eventos del DOM y ejecuta métodos del componente
- Ejemplos: `(click)`, eventos personalizados como `(addToCart)`

### 4. **Two-way Data Binding**

```typescript
[ngModel] = 'expression';
```

- No se utiliza en este proyecto (inputs no tienen ngModel)

### 5. **Attribute Binding**

```typescript
[attr.attribute] = 'expression';
```

- Usado para atributos SVG y HTML especiales
- Ejemplos: `[attr.fill]`, `[attr.stroke]`

### 6. **Style Binding**

```typescript
[style.property] = 'expression';
```

- Usado para estilos dinámicos
- Ejemplos: `[style.height.px]`, `[style.top.px]`

## Directivas Utilizadas

### 1. **Directivas Estructurales (Control Flow - Nueva Sintaxis Angular)**

- `@if` - Renderizado condicional
- `@for` - Iteración sobre colecciones
- `@empty` - Contenido cuando una colección está vacía
- `@switch` - No utilizado en este proyecto

### 2. **Directivas de Atributo Personalizadas**

- No se crearon directivas personalizadas en este proyecto

### 3. **Directivas Built-in de Angular**

- `*ngTemplateOutlet` - Para reutilizar templates
- `NgTemplateOutlet` - Versión standalone

### 4. **Directivas de Bootstrap (CSS Classes)**

- Grid system: `col-*`, `row`, `g-*`
- Components: `btn`, `card`, `navbar`, `modal`
- Utilities: `d-*`, `text-*`, `bg-*`, `position-*`

## Pipes Utilizados

### 1. **CurrencyPipe**

```typescript
{
  {
    price | currency;
  }
}
```

- Formatea números como moneda
- Usado en precios, subtotales, totales

### 2. **Pipes Personalizados**

- No se crearon pipes personalizados en este proyecto

## Gestión de Estado con Signals

### Services con Signals:

1. **ShoppingCart Service** - Maneja estado del carrito
2. **ModalManager Service** - Controla apertura/cierre de modals
3. **ThemeManager Service** - Gestiona tema claro/oscuro
4. **BooksApiMock Service** - Proporciona datos de libros

### Tipos de Signals Utilizados:

- `signal()` - Estado mutable
- `computed()` - Valores derivados
- `effect()` - Efectos secundarios (localStorage)
- `input()` - Inputs de componentes
- `output()` - Outputs de componentes

## Características Responsive

### Bootstrap Breakpoints Utilizados:

- `xs` (por defecto) - Móviles
- `sm` - Tablets pequeñas (≥576px)
- `md` - Tablets (≥768px)
- `lg` - Laptops (≥992px)
- `xl` - Desktops (≥1200px)

### Técnicas Responsive:

1. **Grid System** - Layout adaptativo con columnas
2. **Display Utilities** - Mostrar/ocultar elementos según pantalla
3. **Spacing** - Márgenes y padding responsivos
4. **Components** - Navbar colapsable, cards apilables

## Arquitectura del Proyecto

### Estructura de Carpetas:

```
src/app/
├── components/          # Componentes standalone
├── services/           # Servicios con signals
├── interfaces/         # Tipos TypeScript
├── constants/          # Datos mock
└── config/            # Configuración de la app
```

### Patrones Implementados:

1. **Standalone Components** - Sin NgModules
2. **Dependency Injection** - Services inyectados con `inject()`
3. **Reactive Programming** - Signals en lugar de RxJS observables
4. **Component Communication** - Input/Output signals
5. **Content Projection** - `<ng-content>` para flexibilidad
6. **Template Reference Variables** - Para reutilización de templates

---

**Fecha de elaboración:** Octubre 2025  
**Desarrollador:** Welinton Guerrero  
**Versión Angular:** 20.3.6  
**Repositorio:** [https://github.com/GuerreroWelinton/practice-angular-nexus-bookstore](https://github.com/GuerreroWelinton/practice-angular-nexus-bookstore)  
**Demo:** [https://guerrerowelinton.github.io/practice-angular-nexus-bookstore/](https://guerrerowelinton.github.io/practice-angular-nexus-bookstore/)
