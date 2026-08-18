/* ============================================================
   CATÁLOGO CLOSET SALE
   ------------------------------------------------------------
   Este es el único archivo que se edita para actualizar la venta.
   Cada prenda tiene:
     id           identificador único, no se repite ni se reutiliza
     nombre       lo que ve la clienta como título
     marca        marca de la prenda
     talla        "ECH" "CH" "M" "G" o número (23.5, 24) para calzado
     tallaDetalle opcional: equivalencias, ej. "M / 7". Solo se ve en el detalle
     categoria    debe coincidir con una de las de abajo
     precio       número, sin $ ni comas
     condicion    estado de uso
     estado       "Disponible" | "Apartado" | "Vendido"
     descripcion  texto libre, se puede usar comillas sin problema
     fotos        lista de archivos dentro de fotos/

   Categorías válidas:
     Vestidos · Blusas y Tops · Pantalones y Jeans · Shorts y Faldas
     Trajes de Baño · Chaquetas y Sacos · Zapatos · Otros

   NOTA: el filtro de categorías y el de tallas se arman solos con lo que haya
   en el catálogo. "Zapatos" aparecerá en el filtro en cuanto exista un par.
   ============================================================ */

window.CATALOGO = [
  {
    id: "vestido-azul-rey",
    nombre: "Vestido holgado azul rey con espalda cruzada",
    marca: "La Ola",
    talla: "CH",
    categoria: "Vestidos",
    precio: 130,
    condicion: "Sin uso",
    estado: "Disponible",
    descripcion: "Vestido holgado color azul rey, con espalda cruzada. Tirantes finos, escote en V y caída fluida.",
    fotos: ["vestido-azul-rey-1.jpg", "vestido-azul-rey-2.jpg"]
  },
  {
    id: "crop-top-crochet",
    nombre: "Crop top playero tejido a crochet",
    marca: "Sin marca",
    talla: "M",
    tallaDetalle: "M / ~34B",
    categoria: "Blusas y Tops",
    precio: 90,
    condicion: "Sin uso",
    estado: "Disponible",
    descripcion: "Crop top playero artesanal tejido a crochet en tonos naranja, amarillo y crema. Escote halter que se amarra al cuello, cuentas decorativas en los tirantes y flecos en la parte inferior.",
    fotos: ["crop-top-crochet.jpg"]
  },
  {
    id: "bikini-navy-rayas",
    nombre: "Bikini navy de rayas azul y blanco",
    marca: "Shein",
    talla: "M",
    categoria: "Trajes de Baño",
    precio: 100,
    condicion: "Como nuevo (1 o 2 usos)",
    estado: "Disponible",
    descripcion: "Bikini estilo navy o marinero clásico, con estampado a rayas finas en azul y blanco. Top sin varillas con escote en U rígido y bottom/braga clásica de tiro medio/alto.",
    fotos: ["bikini-navy-rayas.jpg"]
  },
  {
    id: "bikini-tribal",
    nombre: "Bikini con estampado geométrico tribal",
    marca: "Shein",
    talla: "G",
    categoria: "Trajes de Baño",
    precio: 100,
    condicion: "Como nuevo (1 o 2 usos)",
    estado: "Disponible",
    descripcion: "Bikini con estampado geométrico y tribal en tonos azul marino, turquesa y blanco. Top con copas y varillas, fruncidas en el centro con un nudo decorativo. Bottom/braga de tipo clásico con laterales más estrechos que se atan con lazos ajustables.",
    fotos: ["bikini-tribal.jpg"]
  },
  {
    id: "traje-bano-olivo",
    nombre: "Traje de baño retro verde olivo",
    marca: "Shein",
    talla: "CH",
    categoria: "Trajes de Baño",
    precio: 120,
    condicion: "Como nuevo (1 o 2 usos)",
    estado: "Disponible",
    descripcion: "Traje de baño de una pieza estilo retro, color verde olivo con contrastes rosa. Copas con soporte de aros que proporcionan una forma definida y soporte firme. Parte inferior de corte semi-brasileño.",
    fotos: ["traje-bano-olivo-1.jpg", "traje-bano-olivo-2.jpg"]
  },
  {
    id: "pijama-estampada",
    nombre: "Pijama completa con estampado abstracto",
    marca: "Ilusión",
    talla: "CH",
    categoria: "Otros",
    precio: 100,
    condicion: "Como nuevo (1 o 2 usos)",
    estado: "Disponible",
    descripcion: "Pijama completa con estampado abstracto en rosa, mostaza y café sobre fondo crema. Escote en V con botonadura al frente y manga corta.",
    fotos: ["pijama-estampada.jpg"]
  },
  {
    id: "crop-top-halter-bn",
    nombre: "Crop top halter blanco y negro",
    marca: "Shein",
    talla: "CH",
    categoria: "Blusas y Tops",
    precio: 80,
    condicion: "Sin uso",
    estado: "Disponible",
    descripcion: "Crop top estilo halter en diseño bicolor blanco y negro, con corte fresco y moderno. Rayas delgadas y ribete en contraste.",
    fotos: ["crop-top-halter-bn.jpg"]
  },
  {
    id: "short-milrayas-rosa",
    nombre: "Short de milrayas rosa pastel",
    marca: "C&A",
    talla: "M",
    tallaDetalle: "M / 7",
    categoria: "Shorts y Faldas",
    precio: 120,
    condicion: "Como nuevo (1 o 2 usos)",
    estado: "Disponible",
    descripcion: "Short de tiro medio-alto con ajuste regular. Patrón de milrayas o rayas verticales muy finas en rosa pastel y blanco, con un efecto visual texturizado y dulce.",
    fotos: ["short-milrayas-rosa.jpg"]
  },
  {
    id: "top-mostaza-lazo",
    nombre: "Top corto mostaza con lazo y volante",
    marca: "Cuidado con el perro",
    talla: "ECH",
    categoria: "Blusas y Tops",
    precio: 50,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Top corto color mostaza con lazo y volante, y escote profundo en V.",
    fotos: ["top-mostaza-lazo.jpg"]
  },
  {
    id: "camiseta-borlas",
    nombre: "Camiseta amarilla con borlas étnicas",
    marca: "Rewind",
    talla: "ECH",
    categoria: "Blusas y Tops",
    precio: 30,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Camiseta amarilla con borlas étnicas multicolores. Corte recto clásico de ajuste cómodo (regular fit), con cuello redondo acanalado y manga corta.",
    fotos: ["camiseta-borlas.jpg"]
  },
  {
    id: "top-bicolor-arrugado",
    nombre: "Top de tirantes bicolor con textura arrugada",
    marca: "Shein",
    talla: "M",
    categoria: "Blusas y Tops",
    precio: 70,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Top de tirantes bicolor con textura arrugada. Tejido con efecto arrugado / crinkle texturizado en tono beige arena. Cuello redondo y sisas enmarcados con bandas anchas en color negro sólido a contraste.",
    fotos: ["top-bicolor-arrugado.jpg"]
  },
  {
    id: "jersey-metalizado",
    nombre: "Jersey de punto ligero con hilo metalizado",
    marca: "Shasa",
    talla: "CH",
    categoria: "Blusas y Tops",
    precio: 60,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Jersey de punto ligero y fluido con hilo metalizado. Estructura holgada con hombros caídos, manga corta amplia al codo y escote redondo amplio.",
    fotos: ["jersey-metalizado.jpg"]
  },
  {
    id: "camiseta-friends",
    nombre: "Camiseta blanca de Friends",
    marca: "Shein",
    talla: "CH",
    categoria: "Blusas y Tops",
    precio: 90,
    condicion: "Sin uso",
    estado: "Disponible",
    descripcion: "Camiseta casual de manga corta en tono blanco con diseño gráfico inspirado en la serie Friends.",
    fotos: ["camiseta-friends.jpg"]
  },
  {
    id: "vestido-lentejuelas",
    nombre: "Vestido corto de lentejuelas",
    marca: "Shein",
    talla: "CH",
    categoria: "Vestidos",
    precio: 130,
    condicion: "Sin uso",
    estado: "Disponible",
    descripcion: "Vestido corto de noche ajustado, recubierto de lentejuelas brillantes sobre base negra, ideal para fiestas, eventos nocturnos o celebraciones especiales.",
    fotos: ["vestido-lentejuelas.jpg"]
  },
  {
    id: "blusa-bugambilia",
    nombre: "Blusa de tirantes color bugambilia",
    marca: "Skies are blue",
    talla: "CH",
    categoria: "Blusas y Tops",
    precio: 70,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Blusa de tirantes ligera en tela tipo gasa color bugambilia con volantes, tirantes dobles y detalle de encaje en la espalda.",
    fotos: ["blusa-bugambilia.jpg"]
  },
  {
    id: "top-coral-capas",
    nombre: "Top de capas en naranja coral",
    marca: "Iris",
    talla: "M",
    categoria: "Blusas y Tops",
    precio: 50,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Top fluido sin mangas en un vibrante tono naranja coral / melocotón brillante, confeccionado en gasa o tejido ligero semitransparente con diseño a capas.",
    fotos: ["top-coral-capas.jpg"]
  },
  {
    id: "chaleco-azul-marino",
    nombre: "Chaleco azul marino con lazos",
    marca: "Zoy",
    talla: "ECH",
    categoria: "Chaquetas y Sacos",
    precio: 100,
    condicion: "Sin uso",
    estado: "Disponible",
    descripcion: "Chaleco ligero sin mangas en tono azul marino profundo. Cierre delantero abierto sujeto por dos lazos ajustables de la misma tela y escote en pico (V) pronunciado.",
    fotos: ["chaleco-azul-marino.jpg"]
  },
  {
    id: "falda-tul-negro",
    nombre: "Falda midi de tul negro",
    marca: "H&M",
    talla: "G",
    tallaDetalle: "G / EG / 12",
    categoria: "Shorts y Faldas",
    precio: 90,
    condicion: "Buen estado",
    estado: "Vendido",
    descripcion: "Falda midi confeccionada en tul suave con forro interior opaco a tono. Pretina elástica plana y ancha en tono negro mate.",
    fotos: ["falda-tul-negro.jpg"]
  },
  {
    id: "top-negro-canale",
    nombre: "Top corto negro de canalé con espalda abierta",
    marca: "Cuidado con el perro",
    talla: "ECH",
    categoria: "Blusas y Tops",
    precio: 30,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Top corto de manga corta en color negro liso, confeccionado en tejido de canalé elástico. Escote en pico (V) al frente con diseño de espalda abierta / escotada.",
    fotos: ["top-negro-canale.jpg"]
  },
  {
    id: "chaleco-bohemio",
    nombre: "Chaleco bohemio de jacquard con pompones",
    marca: "Sin marca",
    talla: "CH",
    tallaDetalle: "CH / M",
    categoria: "Chaquetas y Sacos",
    precio: 60,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Chaleco forrado corto estilo bohemio y artesanal, confeccionado en tejido tipo tapicería / jacquard con motivos geométricos y tribales, con pompones en la orilla.\n\nPresenta ligeros hilos sueltos puntuales en la trama: puedes verlos de cerca en la segunda y tercera foto.",
    fotos: ["chaleco-bohemio-1.jpg", "chaleco-bohemio-2.jpg", "chaleco-bohemio-3.jpg"]
  },
  {
    id: "short-rayas-rojas",
    nombre: "Short veraniego de rayas rojas y blancas",
    marca: "EXX",
    talla: "CH",
    categoria: "Shorts y Faldas",
    precio: 30,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Short casual veraniego a rayas rojas y blancas, con botón a contraste y bolsillos delanteros.",
    fotos: ["short-rayas-rojas.jpg"]
  },
  {
    id: "camiseta-tirantes-negra",
    nombre: "Camiseta de tirantes negra con tirantes crema",
    marca: "Vertiche",
    talla: "CH",
    categoria: "Blusas y Tops",
    precio: 30,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Camiseta básica de tirantes en color negro liso con tirantes planos en tono blanco marfil / crema a contraste.",
    fotos: ["camiseta-tirantes-negra.jpg"]
  },
  {
    id: "top-negro-lino",
    nombre: "Top negro de tejido ligero con botones",
    marca: "Boska",
    talla: "CH",
    tallaDetalle: "CH / M",
    categoria: "Blusas y Tops",
    precio: 50,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Top fresco en color negro sólido, confeccionado en un tejido ligero con textura natural (estilo lino/algodón), ideal para climas cálidos y looks veraniegos atemporales. Botonadura al frente y tirantes ajustables.",
    fotos: ["top-negro-lino.jpg"]
  },
  {
    id: "vestido-saten-lila",
    nombre: "Vestido largo de satén lila",
    marca: "Metrópolis",
    talla: "CH",
    categoria: "Vestidos",
    precio: 130,
    condicion: "Como nuevo (1 o 2 usos)",
    estado: "Disponible",
    descripcion: "Vestido largo/midi de fiesta, confeccionado en satén en tono lila con brillo sutil. Abertura frontal/lateral pronunciada en la parte inferior del lado izquierdo.",
    fotos: ["vestido-saten-lila.jpg"]
  },
  {
    id: "set-beige-retro",
    nombre: "Set coordinado beige de estampado retro",
    marca: "Shein",
    talla: "CH",
    categoria: "Otros",
    precio: 100,
    condicion: "Sin uso",
    estado: "Disponible",
    descripcion: "Set coordinado en tono beige cálido y café, con estampado micro-geométrico de estilo retro. El top es cruzado con cuello solapa y el pantalón de pierna ancha.\n\nLa tercera foto es ilustrativa, para que veas cómo se ve puesto.",
    fotos: ["set-beige-1.jpg", "set-beige-2.jpg", "set-beige-3.jpg"]
  }
];

/* Número de WhatsApp que recibe los pedidos.
   Formato: código de país + número, sin +, sin espacios ni guiones.
   México: 52 + 1 + los 10 dígitos. */
window.WHATSAPP = "5215554037421";
