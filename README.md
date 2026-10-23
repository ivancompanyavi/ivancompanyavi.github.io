# Brain Bucket

Blog personal de Ivan Company, publicado en [ivan-company.com](https://ivan-company.com). Hecho con [Astro](https://astro.build).

## Escribir un artículo

1. Crea `src/content/blog/<slug>.md`. El nombre del archivo es la URL: `mi-articulo.md` → `/mi-articulo/`.
2. Empieza con este encabezado:

   ```md
   ---
   title: Título del artículo
   date: 2026-10-23
   description: Una frase que resume el artículo.
   draft: true
   ---
   ```

   - `lang` es `es` por defecto; pon `lang: en` para un artículo en inglés.
   - Con `draft: true` el artículo solo se ve en local. Quítalo para publicarlo.

3. Haz commit y push a `master`. GitHub Actions compila y publica la web en un par de minutos.

## Desarrollo local

Necesitas Node 24 (o 22.23 o superior).

```sh
npm install
npm run dev      # http://localhost:4321, incluye borradores
npm run build    # genera la web en dist/
npm run preview  # sirve dist/ en local
```

## Configuración

Lo que más probablemente cambies está en `src/site.config.ts`: título, descripción, enlaces del pie y el formulario de la newsletter. El formulario solo aparece cuando `NEWSLETTER.action` tiene la URL de tu proveedor (Buttondown, Kit…).

La página "Sobre mí" está en `src/pages/sobre-mi.astro`.
