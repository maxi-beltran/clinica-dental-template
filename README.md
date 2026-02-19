# 🦷 Plantilla Web — Clínica Dental (Demo)

Plantilla estática lista para vender y personalizar para clínicas dentales en Chile.  
**Mobile-first · WhatsApp-first · SEO local optimizado · Sin dependencias de build.**

---

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html              ← Página de inicio (hero, tratamientos, testimonios, ubicación)
├── tratamientos.html       ← Catálogo de 13 tratamientos + FAQ
├── quienes-somos.html      ← Historia, equipo profesional, tecnología
├── ubicacion.html          ← Dirección, horario, mapa Google Maps, cómo llegar
├── agendar.html            ← Agendamiento por WhatsApp (3 pasos + checklist)
├── main.js                 ← Configuración central + lógica JS
├── README.md               ← Este archivo
└── assets/
    └── img/
        ├── hero-dental.svg           ← Placeholder hero (1400×600)
        ├── clinica-interior.svg      ← Placeholder interior clínica (800×600)
        ├── box-dental.svg            ← Placeholder box dental (800×600)
        ├── equipo-profesional.svg    ← Placeholder equipo (800×600)
        ├── tecnologia-dental.svg     ← Placeholder tecnología (800×600)
        └── perfil-placeholder.svg    ← Placeholder foto perfil (400×400)
```

---

## 🚀 Uso Rápido (Local)

1. **Descarga o clona** la carpeta del proyecto.
2. **Abre `index.html`** directamente en tu navegador (doble clic).
3. Listo — no requiere servidor, npm, ni build.

> **Nota:** El mapa de Google Maps necesita conexión a internet para cargar.

---

## ⚙️ Personalización — CONFIG

Toda la información editable de la clínica está centralizada en **`main.js`** dentro del objeto `CONFIG`:

```javascript
const CONFIG = {
  clinicName:      'Clínica Dental [Nombre]',      // Nombre de la clínica
  city:            'Osorno',                        // Ciudad
  region:          'Los Lagos, Chile',              // Región
  fullCity:        'Osorno, Chile',                 // Ciudad + país
  address:         '[Calle] [Número], Osorno',      // Dirección completa
  whatsappNumber:  '56912345678',                   // WhatsApp (sin + ni espacios)
  whatsappDisplay: '+56 9 1234 5678',               // WhatsApp visible
  phoneNumber:     '(64) 2XXX XXX',                 // Teléfono visible
  phoneTel:        '+56642XXXXXX',                  // Teléfono para tel: link
  hoursWeek:       'Lunes a Viernes: 09:00 – …',   // Horario semana
  hoursSat:        'Sábado: 09:00 – 13:00',         // Horario sábado
  hoursSun:        'Domingo y Festivos: Cerrado',   // Horario domingo
  mapLink:         'https://maps.google.com/…',     // Link al mapa
  mapEmbed:        'https://www.google.com/maps/embed?…', // Embed iframe
  instagram:       '#',                             // URL Instagram
  facebook:        '#',                             // URL Facebook
};
```

### Pasos para personalizar:

1. Abre `main.js` en cualquier editor de texto.
2. Reemplaza los valores de `CONFIG` con los datos reales de la clínica.
3. Guarda el archivo — los cambios se reflejan en **todas las páginas** automáticamente.

---

## 🖼️ Reemplazar Imágenes

Los archivos SVG en `/assets/img/` son **placeholders** que deben ser reemplazados con fotos reales:

| Placeholder              | Reemplazar con                   | Tamaño recomendado | Usado en                   |
| ------------------------ | -------------------------------- | ------------------- | -------------------------- |
| `hero-dental.svg`        | Foto hero (dentista + paciente)  | 1400 × 600 px      | `index.html`               |
| `clinica-interior.svg`   | Interior real de la clínica      | 800 × 600 px       | `index.html`               |
| `box-dental.svg`         | Box dental / equipamiento        | 800 × 600 px       | `quienes-somos.html`       |
| `equipo-profesional.svg` | Foto grupal del equipo           | 800 × 600 px       | `quienes-somos.html`       |
| `tecnologia-dental.svg`  | Tecnología / equipos             | 800 × 600 px       | `quienes-somos.html`       |
| `perfil-placeholder.svg` | Foto de cada profesional         | 400 × 400 px       | `quienes-somos.html`       |

### Para reemplazar:

1. Prepara fotos en formato `.jpg` o `.webp` (WebP recomendado para mejor rendimiento).
2. Colócalas en `/assets/img/` con el mismo nombre pero extensión diferente.
3. En cada HTML, busca `src="assets/img/hero-dental.svg"` y cámbialo a `src="assets/img/hero-dental.webp"` (o `.jpg`).

> 💡 **Tip:** Optimiza las imágenes con [Squoosh](https://squoosh.app/) o [TinyPNG](https://tinypng.com/) antes de subirlas.

---

## 🌐 Deploy (Publicar en Internet)

### Opción A — Netlify (Recomendado)

1. Ve a [app.netlify.com](https://app.netlify.com/).
2. Arrastra la carpeta completa del proyecto al área de drop.
3. Netlify la publica automáticamente con SSL (HTTPS).
4. Configura dominio personalizado desde el panel.

### Opción B — GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. Selecciona rama `main` y carpeta `/` (root).
4. GitHub lo publica en `https://tu-usuario.github.io/nombre-repo`.

### Opción C — Hosting tradicional (cPanel, etc.)

1. Sube todos los archivos vía FTP al directorio `public_html`.
2. Asegúrate de que `index.html` esté en la raíz.

---

## 🛠️ Stack Técnico

| Tecnología          | Detalle                              |
| ------------------- | ------------------------------------ |
| HTML5               | Semántico, accesible (ARIA labels)   |
| Tailwind CSS        | Vía CDN (sin build)                  |
| JavaScript Vanilla  | Sin frameworks, un solo archivo      |
| Google Fonts        | Inter (400, 500, 600, 700, 800)      |
| Google Maps Embed   | iframe para ubicación                |
| WhatsApp API        | Links `wa.me` con mensaje prellenado |
| JSON-LD             | Schema.org Dentist (en index.html)   |
| Open Graph          | Meta tags en cada página             |

---

## 📱 Funcionalidades

- **Mobile-first** — Diseño optimizado para celular primero.
- **Barra fija móvil** — WhatsApp + Llamar siempre visible en celular.
- **Botón flotante WhatsApp** — Visible en desktop (esquina inferior derecha).
- **Menú drawer** — Menú lateral en móvil con cierre por ESC, overlay y body lock.
- **FAQ accordion** — Secciones de preguntas con animación suave.
- **Scroll animations** — Elementos aparecen al hacer scroll (IntersectionObserver).
- **Nav activo** — El link de la página actual se resalta automáticamente.
- **Contenido dinámico** — Todo inyectado desde CONFIG vía `data-*` attributes.
- **SEO local** — JSON-LD Dentist, meta description únicos, títulos optimizados.
- **12 cuotas badge** — Visible en hero y tratamientos.

---

## ✅ Checklist de Verificación

Antes de entregar al cliente, revisa cada punto:

### Responsividad
- [ ] Abrir en celular (o Chrome DevTools → responsive) — se ve bien
- [ ] Abrir en tablet (768px) — las grids se ajustan
- [ ] Abrir en desktop (1280px+) — layout completo sin overflow

### Navegación
- [ ] Todos los links del header funcionan y llevan a la página correcta
- [ ] Menú móvil abre y cierra correctamente
- [ ] ESC cierra el menú móvil
- [ ] El link de la página actual está resaltado (teal-600)

### WhatsApp
- [ ] Botón flotante (desktop) abre WhatsApp con mensaje prellenado
- [ ] Barra fija (mobile) — botón WhatsApp abre con mensaje
- [ ] Botones de tratamiento individuales incluyen el nombre del tratamiento
- [ ] Botón de header abre WhatsApp correctamente

### Teléfono
- [ ] Link "Llamar" en la barra móvil inicia llamada
- [ ] Teléfono en footer y ubicación es correcto

### Contenido
- [ ] Nombre de la clínica aparece en header, footer, hero, CTA de todas las páginas
- [ ] Dirección es correcta en ubicación y footer
- [ ] Horario es correcto en ubicación, agendar y footer
- [ ] Testimonios tienen "*Ejemplo" tag visible

### SEO
- [ ] Cada página tiene `<title>` y `<meta description>` únicos
- [ ] JSON-LD en index.html tiene datos correctos
- [ ] Open Graph tags presentes en cada página

### Mapa
- [ ] iframe de Google Maps carga correctamente en ubicación
- [ ] Link "Cómo llegar" abre Google Maps

### FAQ
- [ ] Accordion funciona en tratamientos: clic abre, segundo clic cierra
- [ ] Solo una respuesta abierta a la vez
- [ ] Flecha rota 180° al abrir

### Imágenes
- [ ] Placeholders SVG se ven correctamente
- [ ] Al reemplazar por JPG/WebP, la imagen se muestra bien
- [ ] No hay imágenes rotas (404)

### Rendimiento
- [ ] Sin errores en la consola del navegador
- [ ] Tailwind CDN carga (requiere internet)
- [ ] Google Fonts carga (requiere internet)

---

## 📝 Notas para el Desarrollador

- **Sin build**: Este proyecto no usa npm, webpack, Vite ni ningún bundler. Todo funciona directamente en el navegador.
- **Tailwind CDN**: Se usa `https://cdn.tailwindcss.com` para desarrollo. Para producción de alto tráfico, considera usar Tailwind CLI para generar un CSS optimizado.
- **Navegadores**: Compatible con Chrome, Firefox, Safari, Edge modernos (últimas 2 versiones).
- **Accesibilidad**: Se incluyen `aria-label`, `aria-expanded`, roles y estructura semántica HTML5. Cumple con nivel básico de WCAG 2.1.
- **Rendimiento**: Las imágenes placeholder son SVGs livianos. Al reemplazar con fotos, usar formatos WebP y tamaños adecuados para mantener velocidad.

---

## 📄 Licencia

Este es un template demo de uso comercial. Puedes venderlo, modificarlo y redistribuirlo libremente como plantilla para clientes de clínicas dentales.

---

> Hecho con 🦷 para clínicas dentales en Chile.
