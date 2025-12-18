1. Descripción General:

Aplicación web para la reserva de espacios (como salas de reuniones, auditorios, etc.) para eventos. La aplicación permitirá a los usuarios explorar los espacios disponibles, hacer reservas, gestionar sus propias reservas y visualizar la disponibilidad de los espacios.
Se debe construir una SPA en Angular para el frontend y una API REST en Laravel para el backend, utilizando autenticación de usuarios y asegurando la correcta interacción entre ambos.

2. Requerimientos Técnicos:
Vista principal:
■ Página que muestra un listado de espacios disponibles, con filtros por tipo de
espacio, capacidad y disponibilidad por fechas.
■ Al seleccionar un espacio, se debe mostrar información detallada (nombre,
descripción, capacidad, fotos, horarios disponibles, etc.).
ABM de espacios:
■ Solo para usuarios administradores.
■Requerimiento obligatorio utilizar MC-Table (de MC Kit) en el listado.
Sistema de reservas:
■ Formulario para que los usuarios reserven un espacio, indicando el nombre del
evento, la fecha y la hora de inicio/fin.
■ Validación para evitar reservas en horarios ya ocupados.
Gestión de reservas:
■ Vista donde el usuario puede ver todas sus reservas actuales, modificar una
reserva o cancelarla.
Calendario: Implementar un calendario que permita a los usuarios visualizar los
horarios reservados y libres de un espacio en un formato gráfico.

Interfaz:
■ Utilizar Angular Material, PrimeNg.
■ Sistema de notificaciones (toasts) para informar sobre el éxito o fallo de las acciones del usuario (por ejemplo, reserva exitosa o error al cancelar).
■ Testing a componentes, mencionarlo en el Readme si se realiza.
■ Utilizar MC Kit, librería de formularios, filtros, tablas, etc (https://github.com/matiascamiletti/mc-kit)

3. Checklist de Evaluación para el Review:
Código limpio y organizado por dominio

Uso eficiente de Angular (sin packages innecesarios)

Seguridad implementada (sanitización, guards, validation)

Formularios reactivos con validación robusta

UI responsive (Mobile First verificado)

UX intuitiva con feedback al usuario

Manejo de errores elegante

Performance optimizado

Tests implementados

Accessibility compliance

4. Patrones de Diseño y SOLID Aplicados

Principios SOLID Implementados:
- Single Responsibility: Cada componente hace una cosa
- Open/Closed: Extensible vía interfaces
- Liskov Substitution: Intercambiabilidad de componentes
- Interface Segregation: Interfaces específicas
- Dependency Injection: Inversión de control nativa de Angular

Patrones Implementados:
- Repository Pattern (servicios)
- Facade Pattern (state management)
- Strategy Pattern (validators)
- Observer Pattern (RxJS streams)
- Decorator Pattern (directivas)
- Object Pool: Pool de componentes para mejor performance
- Builder Pattern: Construcción de objetos complejos (Espacio, Reserva)
- Factory Method: Creación de validadores y estrategias
- Adapter: Integración con APIs de calendario externas
- Proxy: Lazy loading de imágenes y datos
- Chain of Responsibility: Validación en cadena de reservas
- Memento: Guardado y restauración de estados

5.  Code quality:
  - TypeScript strict mode
  - ESLint + Prettier configurados
  - Testing con Jest y Cypress
  - Principios SOLID y DRY

6. Módulo de Espacios (Mobile First)
  1. Filter component con PrimeNG y PrimeFlex:
    - Filtros por tipo (select), capacidad (range slider), fechas (calendar)
    - Filtros colapsables en mobile usando accordion
    
  2. Spaces grid/list component:
    - Grid responsive: 1 col mobile, 2 tablet, 3 desktop
    - Card component con skeleton loading
    - Virtual scrolling para grandes datasets
    - Lazy loading de imágenes con blur placeholder
    
  3. Search component:
    - Debounced search input (300ms)
    - Highlight matches en resultados

  4. Space detail component:
    - Lazy loading de imágenes con blur placeholder
    - Tabs con información detallada (descripción, horarios, etc.)
    - Reserva form con validación robusta
    - Notificaciones con toasts al reservar o cancelar

  5. Implementa detail view con:
    - Carousel de imágenes optimizado (PrimeNG Galleria)
    - Información responsive con tabs en mobile/accordion
    - Mapa de ubicación estático (sin APIs externas si posible)
    - Horarios disponibles en timeline visual
    - Action buttons sticky en bottom para mobile

7. Estructura de Carpetas

src/
├── app/
│   ├── core/                    # Servicios singleton, interceptors, guards
│   │   ├── auth/
│   │   ├── interceptors/
│   │   ├── guards/
│   │   └── services/
│   │       ├── api/
│   │       ├── notification/
│   │       └── storage/
│   │
│   ├── domain/                  # Entidades y modelos de dominio
│   │   ├── models/
│   │   ├── interfaces/
│   │   └── enums/
│   │
│   ├── features/                # Módulos por feature (lazy loading)
│   │   ├── auth/                 # Módulo de autenticación
│   │   ├── dashboard/            # Dashboard
│   │   ├── spaces/               # Espacios
│   │   ├── reservations/         # Reservas
│   │   └── admin/                # Admin
│   │
│   ├── shared/                  # Componentes, pipes, directives reutilizables
│   │   ├── components/
│   │   ├── pipes/
│   │   ├── directives/
│   │   ├── utils/
│   │   └── validators/
│   │
│   ├── layout/                  # Componentes de layout
│   │   ├── header/
│   │   ├── sidebar/
│   │   └── footer/
│   │
│   └── app.config.ts            # Configuración global
│
└── assets/
    ├── styles/
    │   ├── primeng/
    │   └── _variables.scss
    └── i18n/


## Buenas prácticas (Angular v20+)

### TypeScript
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

### Angular (arquitectura)
- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

### Components
- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

### Templates
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).

### State Management
- Use signals for state management
- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

### Services
- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

### Accessibility Requirements
- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.
