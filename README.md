# 🦷 Plantilla Web — Clínica Dental (Chile)

Plantilla profesional lista para vender y personalizar para clínicas dentales en Chile.  
**Mobile-first · WhatsApp-first · SEO local · Tailwind CSS compilado · 0 dependencias en producción.**

---

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html              ← Inicio (hero slideshow, tratamientos, testimonios, ubicación)
├── tratamientos.html       ← Catálogo de 13 tratamientos + FAQ
├── quienes-somos.html      ← Historia, equipo profesional, tecnología
├── ubicacion.html          ← Dirección, horario, mapa Google Maps, cómo llegar
├── agendar.html            ← Agendamiento por WhatsApp (3 pasos + checklist)
├── 404.html                ← Página de error personalizada
├── main.js                 ← JS fuente (CONFIG + lógica)
├── main.min.js             ← JS minificado para producción
├── tailwind.config.js      ← Configuración de Tailwind CSS
├── package.json            ← Scripts de build (npm run build)
├── sitemap.xml             ← Mapa del sitio para SEO
├── robots.txt              ← Control de indexación
├── netlify.toml            ← Deploy config + security headers
├── LICENSE                 ← Licencia de uso comercial
├── README.md               ← Este archivo
├── .gitignore              ← Exclusiones de Git
├── src/
│   └── input.css           ← Estilos fuente (Tailwind directives + custom CSS)
└── assets/
    ├── favicon.svg         ← Favicon del sitio (diente SVG)
    ├── css/
    │   └── styles.css      ← CSS compilado y minificado (~24 KB)
    └── img/
        ├── hero-*.webp     ← 4 fotos hero slideshow
        ├── trat-*.webp     ← 13 fotos de tratamientos
        └── *.svg           ← 6 placeholders SVG
```

---

## 🚀 Uso Rápido

### Sin build (directo)

1. **Descarga o clona** la carpeta del proyecto.
2. **Abre `index.html`** directamente en tu navegador (doble clic).
3. Listo — el CSS ya viene compilado, no requiere servidor ni npm.

### Con build (para modificar estilos)

```bash
npm install            # Instala Tailwind CSS + Terser
npm run build          # Compila CSS + minifica JS
npm run watch          # Modo desarrollo (recompila CSS al guardar)
```

| Script          | Qué hace                                            |
| --------------- | --------------------------------------------------- |
| `npm run build` | Compila Tailwind CSS minificado + minifica main.js   |
| `npm run build:css` | Solo recompila el CSS                            |
| `npm run build:js`  | Solo minifica main.js → main.min.js              |
| `npm run watch` | Recompila CSS en tiempo real al modificar HTML/CSS   |

> **Nota:** Google Maps y Google Fonts necesitan conexión a internet.

---

## ⚙️ Personalización — CONFIG

Toda la información editable de la clínica está centralizada en **`main.js`** dentro del objeto `CONFIG`:

```javascript
const CONFIG = {
  clinicName:      'Clínica Dental [Nombre]',
  city:            'Osorno',
  region:          'Los Lagos, Chile',
  fullCity:        'Osorno, Chile',
  address:         '[Calle] [Número], Osorno',
  whatsappNumber:  '56912345678',        // sin + ni espacios
  whatsappDisplay: '+56 9 1234 5678',
  phoneNumber:     '(64) 2XXX XXX',
  phoneTel:        '+56642XXXXXX',
  hoursWeek:       'Lunes a Viernes: 09:00 – …',
  hoursSat:        'Sábado: 09:00 – 13:00',
  hoursSun:        'Domingo y Festivos: Cerrado',
  mapLink:         'https://maps.google.com/…',
  mapEmbed:        'https://www.google.com/maps/embed?…',
  instagram:       '#',
  facebook:        '#',
};
```

### Pasos para personalizar:

1. Abre `main.js` en cualquier editor de texto.
2. Reemplaza los valores de `CONFIG` con los datos reales de la clínica.
3. Guarda — los cambios se reflejan en **todas las páginas** automáticamente.

> El contenido dinámico se inyecta vía `data-*` attributes en el HTML. La función `injectDynamicContent()` en main.js usa `querySelectorAll('[data-*]')` para poblar todos los elementos.

---

## 🖼️ Imágenes

Todas las fotos están en formato **WebP** (calidad 80) para máxima velocidad de carga. Pesan entre 7 KB y 135 KB cada una.

### Hero Slideshow (4 slides)

| Archivo                  | Contenido                        | Tamaño aprox. |
| ------------------------ | -------------------------------- | ------------- |
| `hero-bienvenida.webp`   | Slide de bienvenida              | ~73 KB        |
| `hero-limpieza.webp`     | Promo limpieza dental $19.990    | ~115 KB       |
| `hero-ortodoncia.webp`   | Promo frenillos desde $100.000   | ~135 KB       |
| `hero-cuotas.webp`       | Financiamiento 12 cuotas         | ~102 KB       |

### Tratamientos (13 fotos)

| Archivo                     | Tratamiento      | Tamaño aprox. |
| --------------------------- | ---------------- | ------------- |
| `trat-limpieza.webp`        | Limpieza dental  | ~38 KB        |
| `trat-blanqueamiento.webp`  | Blanqueamiento   | ~25 KB        |
| `trat-ortodoncia.webp`      | Ortodoncia       | ~30 KB        |
| `trat-implantes.webp`       | Implantes        | ~22 KB        |
| `trat-endodoncia.webp`      | Endodoncia       | ~18 KB        |
| `trat-cirugia.webp`         | Cirugía          | ~20 KB        |
| `trat-protesis.webp`        | Prótesis         | ~15 KB        |
| `trat-periodoncia.webp`     | Periodoncia      | ~17 KB        |
| `trat-odontopediatria.webp` | Odontopediatría  | ~12 KB        |
| `trat-odontologia.webp`     | Odontología      | ~21 KB        |
| `trat-rehabilitacion.webp`  | Rehabilitación   | ~28 KB        |
| `trat-radiografia.webp`     | Radiografía      | ~10 KB        |
| `trat-urgencia.webp`        | Urgencia         | ~7 KB         |

### Placeholders SVG (para secciones sin foto real)

| Archivo                  | Uso                              | Página             |
| ------------------------ | -------------------------------- | ------------------ |
| `hero-dental.svg`        | Placeholder hero genérico        | —                  |
| `clinica-interior.svg`   | Interior de la clínica           | `index.html`       |
| `box-dental.svg`         | Box dental                       | `quienes-somos`    |
| `equipo-profesional.svg` | Equipo profesional               | `quienes-somos`    |
| `tecnologia-dental.svg`  | Tecnología                       | `quienes-somos`    |
| `perfil-placeholder.svg` | Foto de perfil (testimonios)     | `quienes-somos`    |

### Para reemplazar fotos:

1. Prepara tus fotos en formato **WebP** (recomendado) o JPG.
2. Usa las mismas dimensiones: hero ~1400×600 px, tratamientos ~800×600 px.
3. Colócalas en `assets/img/` con el mismo nombre.
4. Si cambias el nombre o extensión, actualiza el `src` en el HTML correspondiente.

> 💡 **Tip:** Usa [Squoosh](https://squoosh.app/) para convertir y optimizar imágenes a WebP.

---

## 🌐 Deploy (Publicar)

### Opción A — Netlify (Recomendado)

1. Ve a [app.netlify.com](https://app.netlify.com/).
2. Arrastra la carpeta completa del proyecto al área de drop.
3. Netlify la publica automáticamente con SSL (HTTPS).
4. Configura dominio personalizado desde el panel.

### Opción B — GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. Selecciona rama `main` (o `master`) y carpeta `/` (root).
4. GitHub lo publica en `https://tu-usuario.github.io/nombre-repo`.

### Opción C — Hosting tradicional (cPanel, etc.)

1. Sube todos los archivos vía FTP al directorio `public_html`.
2. Asegúrate de que `index.html` esté en la raíz.

> **Distribución como ZIP:** Si distribuyes la plantilla como archivo ZIP, excluye la carpeta `.git/` para reducir el tamaño del archivo. Solo necesitas los archivos HTML, JS, README y la carpeta `assets/`.

---

## 🛠️ Stack Técnico

| Tecnología          | Detalle                                              |
| ------------------- | ---------------------------------------------------- |
| HTML5               | Semántico, accesible (ARIA labels)                   |
| Tailwind CSS 3      | Compilado localmente (~24 KB minificado)             |
| JavaScript Vanilla  | Sin frameworks, un solo archivo (+ versión minificada) |
| Google Fonts        | Inter (400, 500, 600, 700, 800)                      |
| Google Maps Embed   | iframe para ubicación                                |
| WhatsApp API        | Links `wa.me` con mensaje prellenado                 |
| JSON-LD             | Schema.org Dentist (en index.html)                   |
| Open Graph          | Meta tags `og:title/description/image` en cada página |
| Imágenes WebP       | Fotos optimizadas (~60% más livianas que JPG)        |
| Netlify Config      | Security headers + cache + 404 redirect              |

---

## 📱 Funcionalidades

- **Hero slideshow** — 4 slides con crossfade, animación Ken Burns y texto con entrada staggered.
- **Mobile-first** — Diseño optimizado para celular primero.
- **Botón flotante WhatsApp** — Visible en todas las pantallas con tooltip automático.
- **Links WhatsApp seguros** — Abren en nueva pestaña (`target="_blank"` + `rel="noopener noreferrer"`).
- **Menú drawer** — Menú lateral en móvil con cierre por ESC, overlay y body lock.
- **FAQ accordion** — Secciones de preguntas con animación suave.
- **Scroll animations** — Elementos aparecen al hacer scroll (IntersectionObserver).
- **Nav activo** — El link de la página actual se resalta automáticamente.
- **Header auto-hide** — El header se oculta al hacer scroll hacia abajo y reaparece al subir.
- **Contenido dinámico** — Todo inyectado desde CONFIG vía `data-*` attributes.
- **SEO local** — JSON-LD Dentist, Open Graph, meta description únicos, títulos optimizados.
- **Promociones en hero** — Cada slide muestra precio, descuento y CTA directo a WhatsApp.
- **Página 404 personalizada** — Branded con links a inicio y tratamientos.

---

## ✅ Checklist de Entrega

Antes de entregar al cliente, revisa cada punto:

### Responsividad
- [ ] Celular (o Chrome DevTools → responsive) — se ve bien
- [ ] Tablet (768px) — las grids se ajustan
- [ ] Desktop (1280px+) — layout completo sin overflow

### Navegación
- [ ] Links del header funcionan y llevan a la página correcta
- [ ] Menú móvil abre y cierra correctamente
- [ ] ESC cierra el menú móvil
- [ ] Link de la página actual resaltado (teal-600)

### WhatsApp
- [ ] Botón flotante abre WhatsApp con mensaje prellenado
- [ ] Botones de tratamiento incluyen el nombre del tratamiento en el mensaje
- [ ] Links abren en nueva pestaña

### Contenido
- [ ] Nombre de la clínica aparece en header, footer, hero, CTA
- [ ] Dirección correcta en ubicación y footer
- [ ] Horario correcto en ubicación, agendar y footer
- [ ] Testimonios tienen "*Ejemplo" tag visible

### SEO
- [ ] Cada página tiene `<title>` y `<meta description>` únicos
- [ ] JSON-LD en index.html tiene datos correctos del cliente
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) presentes
- [ ] `og:image` apunta a una imagen válida

### Mapa
- [ ] iframe de Google Maps carga en ubicación
- [ ] Link "Cómo llegar" abre Google Maps

### FAQ
- [ ] Accordion funciona: clic abre, segundo clic cierra
- [ ] Solo una respuesta abierta a la vez
- [ ] Flecha rota 180° al abrir

### Imágenes
- [ ] Todas las fotos WebP cargan correctamente
- [ ] SVGs de placeholder visibles donde corresponde
- [ ] No hay imágenes rotas (404 en consola)

### Rendimiento
- [ ] Sin errores en la consola del navegador
- [ ] CSS compilado carga correctamente (no depende de CDN)
- [ ] Google Fonts carga (requiere internet)
- [ ] Hero slideshow avanza automáticamente cada 8 segundos
- [ ] Página 404 se muestra en rutas inexistentes

---

## 📝 Notas Técnicas

- **Build system**: Usa `npm run build` para compilar CSS (Tailwind CLI) y minificar JS (Terser). El output queda en `assets/css/styles.css` y `main.min.js`.
- **Sin CDN en producción**: El CSS viene pre-compilado a ~24 KB. No depende de cdn.tailwindcss.com.
- **Navegadores**: Chrome, Firefox, Safari, Edge modernos (últimas 2 versiones).
- **Accesibilidad**: Incluye `aria-label`, `aria-expanded`, roles y estructura semántica HTML5 (WCAG 2.1 nivel básico).
- **Imágenes WebP**: Formato moderno con ~60% menos peso que JPG. Soportado por todos los navegadores modernos.
- **JSON-LD**: Schema.org tipo `Dentist` embebido en `index.html` con datos de la clínica.
- **Open Graph**: Cada página incluye `og:title`, `og:description`, `og:type`, `og:locale` y `og:image` para previews en redes sociales y WhatsApp.
- **Security headers**: `netlify.toml` incluye CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy y cache headers para assets.
- **SEO**: Incluye `sitemap.xml`, `robots.txt`, JSON-LD y meta tags únicos por página. Reemplaza `example.com` con el dominio real del cliente.
- **404**: Página personalizada con redirect automático en Netlify.

---

## 📄 Licencia

Template de uso comercial. Ver archivo `LICENSE` para términos completos.

---

> Hecho con 🦷 para clínicas dentales en Chile.
