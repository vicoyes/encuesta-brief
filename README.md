# Encuesta Brief — Cuestionario Maestro

Encuesta web interactiva para obtener un brief de estrategia, imagen y desarrollo web. Una pregunta a la vez, con guardado automático y envío final a un webhook.

## Requisitos

- Node.js 18+
- npm (o pnpm/yarn)

## Instalación

```bash
git clone <url-del-repositorio>
cd Encuestas
npm install
```

## Configuración del webhook

Copia el archivo de ejemplo y define la URL que recibirá las respuestas:

```bash
cp .env.example .env
```

Edita `.env` y asigna la URL de tu webhook:

```
VITE_WEBHOOK_URL=https://tu-webhook.com/endpoint
```

Puedes usar por ejemplo:

- [Zapier](https://zapier.com) — Webhooks by Zapier
- [Make](https://make.com) — Webhook module
- [n8n](https://n8n.io) — Webhook node
- Cualquier API que acepte POST JSON

**Importante:** No subas `.env` a GitHub (ya está en `.gitignore`). En Vercel, Netlify, etc., configura `VITE_WEBHOOK_URL` en las variables de entorno del proyecto.

## Desarrollo

```bash
npm run dev
```

Abre en el navegador la URL que indique Vite (por ejemplo `http://localhost:5173`).

## Build para producción

```bash
npm run build
```

La salida queda en `dist/`. Puedes desplegarla en Vercel, Netlify, GitHub Pages, etc.

## Formato del payload al webhook

Al pulsar **«Enviar brief»**, la aplicación envía un `POST` con `Content-Type: application/json`. El cuerpo tiene esta forma:

```json
{
  "responses": {
    "adn": {
      "elevator_pitch": "...",
      "origen": "...",
      "mision_vision": "..."
    },
    "imagen": { ... },
    "servicios": { ... },
    "arquitectura": { ... },
    "logistica": { ... }
  },
  "completedAt": "2025-02-27T12:00:00.000Z",
  "metadata": {
    "userAgent": "...",
    "language": "es"
  }
}
```

Cada sección (`adn`, `imagen`, etc.) contiene las respuestas por `id` de pregunta (p. ej. `elevator_pitch`, `origen`). Puedes mapear estos IDs en `src/data/sections.js`.

## Inicializar el repositorio en GitHub

1. Crea un repositorio nuevo en [GitHub](https://github.com/new) (por ejemplo `encuesta-brief` o `weaves-brief`). No marques «Add a README» si ya tienes uno local.
2. En esta carpeta, ejecuta:

```bash
git init
git add .
git commit -m "Initial commit: encuesta brief interactiva"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Sustituye `TU_USUARIO` y `TU_REPO` por tu usuario y nombre del repositorio.

## Estructura del proyecto

- `src/App.jsx` — Flujo principal (intro, secciones, resumen, envío)
- `src/data/sections.js` — Definición de las 5 secciones y preguntas
- `src/components/` — Intro, ProgressBar, SectionTitle, QuestionBlock, Summary
- `src/hooks/useLocalStorage.js` — Persistencia de respuestas y paso actual
- `src/utils/sendToWebhook.js` — Envío POST al webhook

## Licencia

Uso interno / según tu proyecto.
