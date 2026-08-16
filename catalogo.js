/* ============================================================
   CATÁLOGO CLOSET SALE
   ------------------------------------------------------------
   Este es el único archivo que se edita para actualizar la venta.
   Cada prenda tiene:
     id          identificador único, no se repite ni se reutiliza
     nombre      lo que ve la clienta como título
     marca       marca de la prenda
     talla       "XS" "S" "M" "L" "XL" o número
     categoria   debe coincidir con una de las de abajo
     precio      número, sin $ ni comas
     condicion   estado de uso
     estado      "Disponible" | "Apartado" | "Vendido"
     descripcion texto libre, se puede usar comillas sin problema
     fotos       lista de archivos dentro de fotos/

   Categorías válidas:
     Vestidos · Blusas y Tops · Pantalones y Jeans · Shorts y Faldas
     Trajes de Baño · Chaquetas y Sacos · Calzado · Accesorios · Otros

   Condiciones sugeridas:
     Nuevo con etiqueta · Nuevo sin etiqueta · Como nuevo
     Excelente estado · Buen estado
   ============================================================ */

window.CATALOGO = [
  {
    id: "vestido-azul-rey",
    nombre: "Vestido azul rey de tirantes cruzados",
    marca: "DSY Clean Only",
    talla: "S",
    categoria: "Vestidos",
    precio: 450,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Vestido corto azul rey de tirantes finos que se cruzan en la espalda. Tela de caída fluida, escote en V y corte holgado desde el busto. Ideal para evento de noche o cóctel.",
    fotos: ["vestido-azul-1.jpg", "vestido-azul-2.jpg"]
  },
  {
    id: "traje-bano-olivo",
    nombre: "Traje de baño verde olivo con tirantes rosa",
    marca: "Zara",
    talla: "M",
    categoria: "Trajes de Baño",
    precio: 380,
    condicion: "Nuevo sin etiqueta",
    estado: "Disponible",
    descripcion: "Traje de baño completo verde olivo con copa estructurada y contraste en rosa pastel. Tirantes ajustables, espalda descubierta con moño y corte alto de pierna.",
    fotos: ["traje-bano-olivo-1.jpg", "traje-bano-olivo-2.jpg"]
  },
  {
    id: "blusa-dorada-margel",
    nombre: "Blusa dorada tejida con destellos",
    marca: "Margel",
    talla: "M",
    categoria: "Blusas y Tops",
    precio: 290,
    condicion: "Como nuevo",
    estado: "Disponible",
    descripcion: "Blusa holgada de tejido fino en tono dorado con hilo brillante. Cuello redondo y manga corta estilo murciélago. Cae suelta, se ve muy bien fajada.",
    fotos: ["blusa-dorada.jpg"]
  },
  {
    id: "top-crochet-naranja",
    nombre: "Top de crochet con flecos hecho a mano",
    marca: "Hecho a mano",
    talla: "S",
    categoria: "Blusas y Tops",
    precio: 320,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Top de crochet tejido a mano en tonos naranja, amarillo y crema. Escote halter que se amarra al cuello, cuentas decorativas en los tirantes y flecos largos en la parte inferior. Pieza única.",
    fotos: ["top-crochet-naranja.jpg"]
  },
  {
    id: "top-beige-ribete-negro",
    nombre: "Top texturizado beige con ribete negro",
    marca: "Sin marca",
    talla: "S",
    categoria: "Blusas y Tops",
    precio: 180,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Top sin mangas de tela texturizada color beige con ribete negro en cuello y sisas. Ajuste entallado, muy fresco para el calor.",
    fotos: ["top-beige-ribete.jpg"]
  },
  {
    id: "bikini-azul-etnico",
    nombre: "Bikini azul con estampado étnico",
    marca: "Sin marca",
    talla: "M",
    categoria: "Trajes de Baño",
    precio: 350,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Bikini de dos piezas en azul rey y turquesa con estampado étnico de grecas. Top con copa estructurada y nudo al centro, tirantes ajustables. Trusa con amarre lateral ajustable.",
    fotos: ["bikini-azul-etnico.jpg"]
  },
  {
    id: "bikini-rayas-azul",
    nombre: "Bikini de rayas azul con blanco",
    marca: "Sin marca",
    talla: "M",
    categoria: "Trajes de Baño",
    precio: 350,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Bikini de rayas azul rey y blanco, estilo marinero. Top bandeau con broche metálico al frente y tirantes desmontables. Trusa de tiro alto con pretina doblada.",
    fotos: ["bikini-rayas-azul.jpg"]
  },
  {
    id: "vestido-largo-estampado",
    nombre: "Vestido largo estampado en rosa y mostaza",
    marca: "Sin marca",
    talla: "M",
    categoria: "Vestidos",
    precio: 400,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Vestido largo de tela fresca con estampado abstracto en rosa, mostaza y café sobre fondo crema. Escote en V con botonadura al frente, manga corta y corte suelto desde la cintura.",
    fotos: ["vestido-largo-estampado.jpg"]
  },
  {
    id: "blusa-mostaza-mono",
    nombre: "Blusa amarilla mostaza con moño al frente",
    marca: "Sin marca",
    talla: "S",
    categoria: "Blusas y Tops",
    precio: 250,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Blusa corta amarilla mostaza de tela ligera. Escote en V profundo que se amarra con moño al frente, manga corta y olán en la parte inferior.",
    fotos: ["blusa-mostaza-mono.jpg"]
  },
  {
    id: "short-rosa-rayas",
    nombre: "Short de mezclilla rosa de rayas",
    marca: "H&M",
    talla: "M",
    categoria: "Shorts y Faldas",
    precio: 220,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Short de mezclilla en rayas delgadas rosa con blanco. Tiro alto, cinco bolsillos y dobladillo en la bastilla.",
    fotos: ["short-rosa-rayas.jpg"]
  },
  {
    id: "playera-amarilla-borlas",
    nombre: "Playera amarilla con borlas de colores",
    marca: "RWIND",
    talla: "S",
    categoria: "Blusas y Tops",
    precio: 200,
    condicion: "Buen estado",
    estado: "Disponible",
    descripcion: "Playera de algodón amarilla con efecto teñido. Lleva un galón bordado y borlas de colores en la bastilla. Manga corta, corte recto.",
    fotos: ["playera-amarilla-borlas.jpg"]
  },
  {
    id: "bolsa-rayas-negro",
    nombre: "Bolsa de tela de rayas blanco y negro",
    marca: "Sin marca",
    talla: "Única",
    categoria: "Accesorios",
    precio: 150,
    condicion: "Excelente estado",
    estado: "Disponible",
    descripcion: "Bolsa de tela con rayas delgadas negras sobre blanco y ribete negro. Asa con nudo decorativo, tamaño práctico para diario.",
    fotos: ["bolsa-rayas.jpg"]
  }
];

/* Número de WhatsApp que recibe los pedidos.
   Formato: código de país + número, sin +, sin espacios ni guiones.
   México: 52 + 1 + los 10 dígitos.  Ejemplo: 5219991234567 */
window.WHATSAPP = "PENDIENTE";
