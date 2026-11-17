# RDP · Resolución de Problemas · Escorial

Plataforma para llevar los RDP de Escorial con las herramientas y los formatos oficiales:
**A3** (FR-MCO-010) · **A4** (FR-MCO-004) · **5 Porqués / PDCA simple** (FR-MCO-035), siguiendo los 8 pasos de la metodología.
Reemplaza a Kaizenio. Backend: [RDP-Escorial-API](https://github.com/diegortizdao-collab/RDP-Escorial-API) (Cloudflare Worker + Neon).

## Qué incluye
- **Dashboard** por fase PDCA (pasos 0–5 = P · 6 = D · 7 = C · 8 = A) con segmentadores Planta · UET · Sector · Herramienta · Año · Mes, ahorro proyectado y realizado, tipo de pérdida (muda) y estado de acciones.
- **Paso 0 · Nuevo RDP**: origen del problema (indicador, Pareto, impacto, genba, reclamo), estándar/estabilidad, priorización, calculadora de pérdida anual y **elección libre de herramienta** con recomendación (5 Porqués / A4 / A3).
- **Ficha del RDP**: el formato elegido se completa paso a paso (campos de cada etapa), avance de pasos, cambio de herramienta conservando los datos, mediciones del indicador y cierre.
- **Calculadora de impacto**: pérdidas *estándar* (matriz de costos versionada) o *libres* (costos indirectos, con criterio de cálculo); antes / después en pesos, ahorro y recupero de la inversión.
- **Registro de acciones** sin flujo de aprobación; al asignar un responsable se le avisa por correo.
- **Administración** (rol Administrador): usuarios (Administrador / Usuario), matriz de costos y áreas.

## Modos
- **Demo** (por defecto, `API_URL` vacío): datos simulados; no se guarda nada. Sirve para mostrar la plataforma.
- **Real**: completar `config.js` con la URL del Worker. En modo piloto pide correo + clave de acceso; con Microsoft Entra ID inicia sesión con la cuenta de Escorial.

## Publicar (GitHub Pages)
Settings → Pages → *Deploy from a branch* → `main` / `(root)`. Es un único `index.html` + `config.js`.
`src/index.template.html` es la fuente (se reemplaza el logo y la inclusión de `config.js` al generar `index.html`).

## Pendiente
Exportar el A3 / A4 / 5 Porqués a PDF y Excel con el diseño de los formatos FR-MCO · inicio de sesión con Microsoft · envío de correos por Microsoft 365 (lo habilita IT) · visibilidad de pasos por rol (Líderes y Coordinadores) · adjuntar evidencias.

---
Desarrollado por Mgter. Diego Ortiz — Líder de Mejora Continua | Consultor ISO
