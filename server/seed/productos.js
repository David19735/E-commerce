const productos = [
  // Samsung (marcaId: 1, categoría: celulares)
  {
    nombre: 'Samsung Galaxy S24 Ultra',
    precio: '16999',
    descripcion: 'Pantalla AMOLED de 6.8", cámara de 200MP.',
    imagen: '/celulares/s24-ultra.jpg',
    categoriaId: 1,
    marcaId: 1
  },
  {
    nombre: 'Samsung Galaxy A54',
    precio: '8499',
    descripcion: 'Buen rendimiento con gran batería.',
    imagen: '/celulares/a54.jpg',
    categoriaId: 1,
    marcaId: 1
  },
  {
    nombre: 'Samsung Galaxy Z Fold 5',
    precio: '35999',
    descripcion: 'Diseño plegable y multitarea avanzada.',
    imagen: '/celulares/zfold5.jpg',
    categoriaId: 1,
    marcaId: 1
  },
  {
    nombre: 'Samsung Galaxy Z Flip 5',
    precio: '25999',
    descripcion: 'Plegable vertical, cámara de calidad.',
    imagen: '/celulares/zflip5.jpg',
    categoriaId: 1,
    marcaId: 1
  },
  {
    nombre: 'Samsung M14 5G',
    precio: '4899',
    descripcion: 'Accesible, buena batería y 5G.',
    imagen: '/celulares/m14.jpg',
    categoriaId: 1,
    marcaId: 1
  },
  {
    nombre: 'Samsung Galaxy Note 20 Ultra',
    precio: '18999',
    descripcion: 'Con S-Pen y gran productividad.',
    imagen: '/celulares/note20.jpg',
    categoriaId: 1,
    marcaId: 1
  },
  {
    nombre: 'Samsung Galaxy S23 FE',
    precio: '13499',
    descripcion: 'Versión económica con gran rendimiento.',
    imagen: '/celulares/s23fe.jpg',
    categoriaId: 1,
    marcaId: 1
  },

  // Apple (marcaId: 2, categoría: celulares)
  {
    nombre: 'iPhone 15 Pro Max',
    precio: '32999',
    descripcion: 'Chip A17 Pro, cámara de 48MP.',
    imagen: '/celulares/iphone15pro.jpg',
    categoriaId: 1,
    marcaId: 2
  },
  {
    nombre: 'iPhone 14',
    precio: '18999',
    descripcion: 'Buen rendimiento, calidad Apple.',
    imagen: '/celulares/iphone14.jpg',
    categoriaId: 1,
    marcaId: 2
  },
  {
    nombre: 'iPhone 13',
    precio: '15499',
    descripcion: 'Gran cámara y diseño icónico.',
    imagen: '/celulares/iphone13.jpg',
    categoriaId: 1,
    marcaId: 2
  },
  {
    nombre: 'iPhone SE 2022',
    precio: '9999',
    descripcion: 'Compacto, económico y potente.',
    imagen: '/celulares/iphonese.jpg',
    categoriaId: 1,
    marcaId: 2
  },
  {
    nombre: 'iPhone 12',
    precio: '12999',
    descripcion: 'Diseño moderno y buen rendimiento.',
    imagen: '/celulares/iphone12.jpg',
    categoriaId: 1,
    marcaId: 2
  },
  {
    nombre: 'iPhone 11',
    precio: '10499',
    descripcion: 'Gran cámara doble y batería duradera.',
    imagen: '/celulares/iphone11.jpg',
    categoriaId: 1,
    marcaId: 2
  },
  {
    nombre: 'iPhone XR',
    precio: '9499',
    descripcion: 'Pantalla grande, buen desempeño.',
    imagen: '/celulares/iphonexr.jpg',
    categoriaId: 1,
    marcaId: 2
  },

  // Motorola (marcaId: 3, categoría: celulares)
  {
    nombre: 'Motorola Edge 40',
    precio: '8999',
    descripcion: 'Pantalla OLED 144Hz y carga rápida.',
    imagen: '/celulares/edge40.jpg',
    categoriaId: 1,
    marcaId: 3
  },
  {
    nombre: 'Motorola G73 5G',
    precio: '6999',
    descripcion: 'Buena conectividad y rendimiento.',
    imagen: '/celulares/g73.jpg',
    categoriaId: 1,
    marcaId: 3
  },
  {
    nombre: 'Motorola G23',
    precio: '3999',
    descripcion: 'Económico, buen diseño.',
    imagen: '/celulares/g23.jpg',
    categoriaId: 1,
    marcaId: 3
  },
  {
    nombre: 'Motorola Edge 30',
    precio: '7999',
    descripcion: 'Delgado y con buena cámara.',
    imagen: '/celulares/edge30.jpg',
    categoriaId: 1,
    marcaId: 3
  },
  {
    nombre: 'Motorola Razr 40',
    precio: '17999',
    descripcion: 'Plegable con diseño retro.',
    imagen: '/celulares/razr40.jpg',
    categoriaId: 1,
    marcaId: 3
  },
  {
    nombre: 'Motorola Moto G Stylus',
    precio: '5999',
    descripcion: 'Incluye stylus para productividad.',
    imagen: '/celulares/stylus.jpg',
    categoriaId: 1,
    marcaId: 3
  },
  {
    nombre: 'Motorola E13',
    precio: '2999',
    descripcion: 'Muy accesible y funcional.',
    imagen: '/celulares/e13.jpg',
    categoriaId: 1,
    marcaId: 3
  },

  // Lenovo (marcaId: 4, categoría: consolas)
  {
    nombre: 'Lenovo Legion Go',
    precio: '18999',
    descripcion: 'Consola portátil gamer potente.',
    imagen: '/consolas/legiongo.jpg',
    categoriaId: 3,
    marcaId: 4
  },
  {
    nombre: 'Lenovo IdeaPad Gaming 3',
    precio: '20999',
    descripcion: 'Laptop gaming de entrada.',
    imagen: '/consolas/ideapadgaming3.jpg',
    categoriaId: 3,
    marcaId: 4
  },
  {
    nombre: 'Lenovo Legion Slim 7',
    precio: '33999',
    descripcion: 'Laptop gamer ultra liviana.',
    imagen: '/consolas/legionslim7.jpg',
    categoriaId: 3,
    marcaId: 4
  },
  {
    nombre: 'Lenovo LOQ 15',
    precio: '18499',
    descripcion: 'Potente y accesible.',
    imagen: '/consolas/loq15.jpg',
    categoriaId: 3,
    marcaId: 4
  },
  {
    nombre: 'Lenovo Yoga Gaming',
    precio: '23999',
    descripcion: 'Portabilidad y rendimiento.',
    imagen: '/consolas/yogagaming.jpg',
    categoriaId: 3,
    marcaId: 4
  },
  {
    nombre: 'Lenovo ThinkBook Gaming',
    precio: '20499',
    descripcion: 'Diseño elegante con poder.',
    imagen: '/consolas/thinkbookgaming.jpg',
    categoriaId: 3,
    marcaId: 4
  },
  {
    nombre: 'Lenovo Legion 5',
    precio: '22999',
    descripcion: 'Experiencia gaming avanzada.',
    imagen: '/consolas/legion5.jpg',
    categoriaId: 3,
    marcaId: 4
  },

  // Nintendo (marcaId: 5, categoría: consolas)
  {
    nombre: 'Nintendo Switch OLED',
    precio: '7999',
    descripcion: 'Mejor pantalla y batería.',
    imagen: '/consolas/switch-oled.jpg',
    categoriaId: 3,
    marcaId: 5
  },
  {
    nombre: 'Nintendo Switch Lite',
    precio: '4999',
    descripcion: 'Portátil y compacta.',
    imagen: '/consolas/switch-lite.jpg',
    categoriaId: 3,
    marcaId: 5
  },
  {
    nombre: 'Nintendo Switch',
    precio: '6499',
    descripcion: 'Híbrida, versátil para todos.',
    imagen: '/consolas/switch.jpg',
    categoriaId: 3,
    marcaId: 5
  },
  {
    nombre: 'Game Boy Advance SP',
    precio: '3499',
    descripcion: 'Clásico portátil retro.',
    imagen: '/consolas/gba-sp.jpg',
    categoriaId: 3,
    marcaId: 5
  },
  {
    nombre: 'Nintendo DS Lite',
    precio: '2999',
    descripcion: 'Pantalla dual, juegos icónicos.',
    imagen: '/consolas/dslite.jpg',
    categoriaId: 3,
    marcaId: 5
  },
  {
    nombre: 'Nintendo Wii',
    precio: '3999',
    descripcion: 'Consola familiar y divertida.',
    imagen: '/consolas/wii.jpg',
    categoriaId: 3,
    marcaId: 5
  },
  {
    nombre: 'Nintendo 3DS XL',
    precio: '4599',
    descripcion: 'Juegos en 3D sin gafas.',
    imagen: '/consolas/3dsxl.jpg',
    categoriaId: 3,
    marcaId: 5
  },

  // PlayStation (marcaId: 6, categoría: consolas)
  {
    nombre: 'PlayStation 5',
    precio: '13999',
    descripcion: 'Lo último en gaming de Sony.',
    imagen: '/consolas/ps5.jpg',
    categoriaId: 3,
    marcaId: 6
  },
  {
    nombre: 'PlayStation 4 Slim',
    precio: '7999',
    descripcion: 'Compacta y potente.',
    imagen: '/consolas/ps4slim.jpg',
    categoriaId: 3,
    marcaId: 6
  },
  {
    nombre: 'PlayStation 4 Pro',
    precio: '9999',
    descripcion: 'Rendimiento mejorado en 4K.',
    imagen: '/consolas/ps4pro.jpg',
    categoriaId: 3,
    marcaId: 6
  },
  {
    nombre: 'PlayStation VR2',
    precio: '8999',
    descripcion: 'Realidad virtual inmersiva.',
    imagen: '/consolas/psvr2.jpg',
    categoriaId: 3,
    marcaId: 6
  },
  {
    nombre: 'PlayStation Portal',
    precio: '5999',
    descripcion: 'Juega en remoto desde PS5.',
    imagen: '/consolas/portal.jpg',
    categoriaId: 3,
    marcaId: 6
  },
  {
    nombre: 'PSP Go',
    precio: '3499',
    descripcion: 'Portátil retro de Sony.',
    imagen: '/consolas/pspgo.jpg',
    categoriaId: 3,
    marcaId: 6
  },
  {
    nombre: 'PlayStation Classic',
    precio: '2499',
    descripcion: 'Mini consola retro de Sony.',
    imagen: '/consolas/classic.jpg',
    categoriaId: 3,
    marcaId: 6
  },

  // Xbox (marcaId: 7, categoría: consolas)
  {
    nombre: 'Xbox Series X',
    precio: '13999',
    descripcion: 'La consola más potente.',
    imagen: '/consolas/seriesx.jpg',
    categoriaId: 3,
    marcaId: 7
  },
  {
    nombre: 'Xbox Series S',
    precio: '7999',
    descripcion: 'Compacta, gran rendimiento digital.',
    imagen: '/consolas/seriess.jpg',
    categoriaId: 3,
    marcaId: 7
  },
  {
    nombre: 'Xbox One S',
    precio: '6999',
    descripcion: 'Accesible, buen catálogo.',
    imagen: '/consolas/xboxones.jpg',
    categoriaId: 3,
    marcaId: 7
  },
  {
    nombre: 'Xbox One X',
    precio: '8499',
    descripcion: 'Poder gráfico mejorado.',
    imagen: '/consolas/xboxonex.jpg',
    categoriaId: 3,
    marcaId: 7
  },
  {
    nombre: 'Xbox 360 Slim',
    precio: '3999',
    descripcion: 'Generación pasada muy querida.',
    imagen: '/consolas/xbox360.jpg',
    categoriaId: 3,
    marcaId: 7
  },
  {
    nombre: 'Xbox Classic',
    precio: '2999',
    descripcion: 'La consola original de Microsoft.',
    imagen: '/consolas/xboxclassic.jpg',
    categoriaId: 3,
    marcaId: 7
  },
  {
    nombre: 'Xbox Kinect Bundle',
    precio: '6999',
    descripcion: 'Juego con detección de movimiento.',
    imagen: '/consolas/kinect.jpg',
    categoriaId: 3,
    marcaId: 7
  },

  // Sega (marcaId: 8, categoría: consolas)
  {
    nombre: 'Sega Genesis Mini',
    precio: '2299',
    descripcion: 'Clásicos retro en consola mini.',
    imagen: '/consolas/genesismini.jpg',
    categoriaId: 3,
    marcaId: 8
  },
  {
    nombre: 'Sega Saturn',
    precio: '3799',
    descripcion: 'Consola 32-bit retro.',
    imagen: '/consolas/saturn.jpg',
    categoriaId: 3,
    marcaId: 8
  },
  {
    nombre: 'Sega Dreamcast',
    precio: '4299',
    descripcion: 'Adelantada a su tiempo.',
    imagen: '/consolas/dreamcast.jpg',
    categoriaId: 3,
    marcaId: 8
  },
  {
    nombre: 'Sega Master System',
    precio: '1999',
    descripcion: 'Época dorada de SEGA.',
    imagen: '/consolas/mastersystem.jpg',
    categoriaId: 3,
    marcaId: 8
  },
  {
    nombre: 'Sega Game Gear',
    precio: '2599',
    descripcion: 'Portátil con pantalla a color.',
    imagen: '/consolas/gamegear.jpg',
    categoriaId: 3,
    marcaId: 8
  },
  {
    nombre: 'Sega SG-1000',
    precio: '1499',
    descripcion: 'Primera consola de Sega.',
    imagen: '/consolas/sg1000.jpg',
    categoriaId: 3,
    marcaId: 8
  },
  {
    nombre: 'Sega Pico',
    precio: '1799',
    descripcion: 'Consola educativa para niños.',
    imagen: '/consolas/pico.jpg',
    categoriaId: 3,
    marcaId: 8
  },
  {
  nombre: 'Call of Duty: Modern Warfare II',
  precio: '1399',
  descripcion: 'Entrega renovada del clásico shooter bélico.',
  imagen: '/otros/mw2_2022.jpg',
  categoriaId: 4,
  marcaId: 7 // Xbox
},
{
  nombre: 'Elden Ring',
  precio: '1499',
  descripcion: 'Épica oscura en mundo abierto de FromSoftware.',
  imagen: '/otros/eldenring.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'FIFA 23',
  precio: '1299',
  descripcion: 'Última entrega bajo la marca FIFA de EA Sports.',
  imagen: '/otros/fifa23.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'Hogwarts Legacy',
  precio: '1499',
  descripcion: 'RPG de acción en el mundo mágico de Harry Potter.',
  imagen: '/otros/hogwartslegacy.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'God of War: Ragnarok',
  precio: '1599',
  descripcion: 'La esperada secuela de Kratos y Atreus.',
  imagen: '/otros/gow_ragnarok.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'The Legend of Zelda: Tears of the Kingdom',
  precio: '1399',
  descripcion: 'Secuela de Breath of the Wild, con mecánicas ampliadas.',
  imagen: '/otros/zelda_totk.jpg',
  categoriaId: 4,
  marcaId: 5 // Nintendo
},
{
  nombre: 'Resident Evil 4 Remake',
  precio: '1299',
  descripcion: 'Remake del clásico de horror con gráficos renovados.',
  imagen: '/otros/re4_remake.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'Starfield',
  precio: '1499',
  descripcion: 'RPG espacial de mundo abierto por Bethesda.',
  imagen: '/otros/starfield.jpg',
  categoriaId: 4,
  marcaId: 7 // Xbox
},
{
  nombre: 'Final Fantasy XVI',
  precio: '1399',
  descripcion: 'Nueva entrega del RPG con enfoque de acción.',
  imagen: '/otros/ff16.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'Spider-Man 2',
  precio: '1599',
  descripcion: 'Nueva aventura con Peter Parker y Miles Morales.',
  imagen: '/otros/spiderman2.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'Diablo IV',
  precio: '1499',
  descripcion: 'Regreso infernal del aclamado ARPG de Blizzard.',
  imagen: '/otros/diablo4.jpg',
  categoriaId: 4,
  marcaId: 7 // Xbox
},
{
  nombre: 'Super Mario Bros. Wonder',
  precio: '1299',
  descripcion: 'Plataformas renovado con estética alucinante.',
  imagen: '/otros/mario_wonder.jpg',
  categoriaId: 4,
  marcaId: 5 // Nintendo
},
{
  nombre: 'Mortal Kombat 1',
  precio: '1399',
  descripcion: 'Reinicio brutal de la saga con gráficos next-gen.',
  imagen: '/otros/mk1.jpg',
  categoriaId: 4,
  marcaId: 7 // Xbox
},
{
  nombre: 'Baldur’s Gate 3',
  precio: '1499',
  descripcion: 'RPG táctico aclamado por su narrativa profunda.',
  imagen: '/otros/baldursgate3.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'Assassin’s Creed Mirage',
  precio: '1299',
  descripcion: 'Regreso a las raíces del sigilo en Bagdad.',
  imagen: '/otros/ac_mirage.jpg',
  categoriaId: 4,
  marcaId: 7 // Xbox
},
{
  nombre: 'Alan Wake 2',
  precio: '1499',
  descripcion: 'Secuela narrativa con atmósfera inquietante.',
  imagen: '/otros/alanwake2.jpg',
  categoriaId: 4,
  marcaId: 6 // Playstation
},
{
  nombre: 'Pikmin 4',
  precio: '1199',
  descripcion: 'Estrategia y exploración en miniatura.',
  imagen: '/otros/pikmin4.jpg',
  categoriaId: 4,
  marcaId: 5 // Nintendo
},
{
  nombre: 'Sonic Superstars',
  precio: '1199',
  descripcion: 'Regreso del erizo azul con nuevo estilo 2.5D.',
  imagen: '/otros/sonicsuperstars.jpg',
  categoriaId: 4,
  marcaId: 8 // Sega
},
{
  nombre: 'Lies of P',
  precio: '1299',
  descripcion: 'Soulslike oscuro inspirado en Pinocho.',
  imagen: '/otros/liesofp.jpg',
  categoriaId: 4,
  marcaId: 7 // Xbox
},
{
  nombre: 'Palworld',
  precio: '999',
  descripcion: 'Captura criaturas estilo Pokémon con armas.',
  imagen: '/otros/palworld.jpg',
  categoriaId: 4,
  marcaId: 7 // Xbox
}

];



export default productos