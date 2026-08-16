# Closet Sale — catálogo público

Catálogo de venta de clóset. Página estática, sin backend y sin base de datos:
`index.html` lee las prendas de `catalogo.js` y los pedidos salen por WhatsApp.

```
closet-sale/
├── index.html     la página (no se toca para actualizar la venta)
├── catalogo.js    LAS PRENDAS Y EL NÚMERO DE WHATSAPP — esto es lo único que se edita
└── fotos/         las imágenes
```

## Cómo se actualiza

El catálogo se edita por chat con Claude. Basta con pedirlo en lenguaje normal:

- «marca como vendido el vestido azul»
- «baja a $250 la blusa dorada»
- «aparta el bikini de rayas, ya lo apartó alguien»
- «agrega esta prenda» + la foto y los datos
- «quita la playera amarilla del catálogo»

Claude edita `catalogo.js`, y tú publicas el cambio con:

```bash
git add -A && git commit -m "Actualiza catálogo" && git push
```

En un par de minutos la página pública ya muestra el cambio.

## Publicar por primera vez (GitHub Pages)

1. Crea una cuenta en <https://github.com/signup> si aún no tienes.
2. Crea un repositorio **público** llamado `closet-sale`, sin README ni .gitignore.
3. En esta carpeta, conecta y sube:

```bash
git remote add origin https://github.com/TU-USUARIO/closet-sale.git
git branch -M main
git push -u origin main
```

4. En el repo: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
5. A los 1–2 minutos la página queda en:
   `https://TU-USUARIO.github.io/closet-sale/`

Ese es el link que se comparte con las clientas.

## Reglas del catálogo

- `estado` acepta `"Disponible"`, `"Apartado"` o `"Vendido"`.
  Las vendidas se muestran en gris hasta el final; no desaparecen.
- `id` es único y **no se reutiliza**. Si alguien tiene una prenda en su lista y
  se marca como vendida, se le quita sola.
- Las fotos van dentro de `fotos/`, ya optimizadas (máx. 1400 px de ancho).
  Fotos más pesadas hacen lenta la página en celular.
- `precio` es un número, sin `$` ni comas.
- Las descripciones aceptan comillas, acentos y símbolos sin romper nada.

## Notas

- Todo el CSS y el JavaScript están dentro de `index.html`: no hay build
  ni dependencias que instalar. Solo se cargan las fuentes de Google.
- La lista de interés de la clienta se guarda en su propio navegador y no
  llega a ningún servidor: el pedido se concreta cuando manda el WhatsApp.
- El número de WhatsApp está al final de `catalogo.js`.
