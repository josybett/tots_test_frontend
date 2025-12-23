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
  - Todos los componentes a testearse con Cypress deben tener un atributo `data-testid` y/o `data-cy` para poder acceder a ellos por medio de selectores en los tests de Cypress/JS.

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

8. Paleta de Colores del proyecto.
8.1. Paleta Base y Semántica (Estados)
a) Success (Disponible): Disponibilidad clara. Indicadores de "Libre" en calendario, toasts de éxito. #2E7D32 (Verde oscuro).
b) Error (Ocupado): Bloqueo, error. Indicadores de "Reservado", mensajes de error al validar fechas. #C62828 (Rojo denso).
c) Warning (Pendiente): Atención requerida. Reservas que requieren aprobación (si aplica), alertas. #F9A825 (Ámbar).
d) Info: Informativo. Toasts de información general, enlaces de ayuda. #0277BD (Azul medio).

8.2. Light Mode. 
Diseñado para la mayoría de los entornos de oficina, limpio y con alto contraste.
a) Primary: Teal Profundo. Botones principales (Reservar), header de la app, toolbars de Material, color activo en PrimeNG. #00796B.
b) Primary Variant: Teal Más Oscuro. Estados hover de botones primarios, barra de estado móvil. #004D40.
c) Accent: Naranja Quemado. Botones de acción flotante (FAB), elementos seleccionados, sliders, llamadas a la acción secundarias. #FF6F00.
d) Background: Gris Casi Blanco. Fondo general de la aplicación (el body). #FAFAFA.
e) Surface: Blanco Puro. Fondo de "tarjetas" (Cards), modales, el fondo de la mc-table. #FFFFFF.
f) Text Primary: Negro Suave. Texto principal, títulos, datos en las celdas de la tabla. #212121.
g) Text Secondary: Gris Medio. Subtítulos, descripciones cortas, labels de filtros inactivos. #757575.
h) Border/Divider: Gris Claro. Líneas divisorias en listas y, crucialmente, los bordes de las filas y headers en mc-table para mantener la estructura. #E0E0E0.

8.3. Dark Mode.
Esencial hoy en día. No usamos negro puro, sino grises oscuros profundos para evitar fatiga visual. Los colores primarios se "desaturan" y aclaran para que no vibren contra el fondo oscuro.
a) Primary (Dark): Teal Claro. Versión iluminada del primario para buen contraste sobre fondo oscuro. #4DB6AC.
b) Primary Variant: Teal más suave. Estados hover en modo oscuro. #80CBC4.
c) Accent (Dark): Naranja Pastel. Versión iluminada del acento para destacar sin encandilar. #FFB74D.
d) Background: Gris Carbón Profundo. Fondo general de la aplicación. #121212.
e) Surface: Gris Oscuro. Fondo de tarjetas, modales y fondo de la mc-table en dark mode. #1E1E1E.
f) Text Primary: Blanco Hueso. Texto principal para máxima legibilidad. #E0E0E0.
g) Text Secondary: Gris Claro. Texto secundario. #B0B0B0.
h) Border/Divider: Gris Intermedio. Bordes sutiles para definir las celdas en mc-table y separadores. #373737.

8.4.
8.4.1. Integración con Angular Material: Esta paleta está diseñada para encajar directamente en la definición de un tema personalizado de Sass en Material (`mat.define-light-theme` y `mat.define-dark-theme`). Usen el Primary y Accent definidos arriba.
8.4.2. Integración con MC Kit y PrimeNG: Estas librerías a veces requieren overrides de SCSS. Recomiendo encarecidamente el uso de CSS Custom Properties (Variables CSS) en el styles.scss global, mapeadas a los colores del tema de Material.
Ejemplo: Cuando el tema sea dark, la variable --table-border-color debería cambiar de #E0E0E0 a #373737. Esto asegurará que la mc-table obligatoria responda automáticamente al cambio de tema light/dark sin reescribir estilos específicos para ella.
Calendario Gráfico: El calendario debe usar intensivamente los colores semánticos. Los bloques de tiempo ocupados deben ser del color Error (rojo) o un gris neutro si no son relevantes, y los espacios libres del color Surface o un verde muy tenue (Success) para invitar a hacer clic.

9. Reglas
- Siempre me responderás en español.
- Nombre de constantes, archivos, carpetas y demás código lo harás siempre en inglés.

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
- styleClass is deprecated.

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
