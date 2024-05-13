exports.inmuebles = [
  {
    nombre: "urbanizacion urban",
    id: 1,
    imagen: "https://pagos.starguest.ec:7083/imagenes/urban.png",
    administrador: "David Jaramillo",
    contacto: "0987654321",
  },
  {
    nombre: "Urbanizacion El Condado",
    id: 2,
    imagen: "https://pagos.starguest.ec:7083/imagenes/elcondado.jpg",
    administrador: "Elizabeth Gutierrez",
    contacto: "1234567890",
  },
  {
    nombre: "Urbanizacion El Condado 2",
    id: 3,
    imagen: "https://pagos.starguest.ec:7083/imagenes/condado2.jpg",
    administrador: "Juan Leon",
    contacto: "4567891230",
  },
  {
    nombre: "AQUARELA-Uribe Schwarzkopf",
    id: 11,
    imagen: "https://pagos.starguest.ec:7083/imagenes/aquarela.jpg",
    administrador: "Sebastian Encalada",
    contacto: "7891234560",
  },
];

exports.copropietarios = {
  1: [
    {
      id: "1",
      nombre: "Matheo Chavez",
    },
    {
      id: "2",
      nombre: "Anthony Cochea",
    },
    {
      id: "3",
      nombre: "Daniela Jaramillo",
    },
  ],
  11: [
    {
      id: "1",
      nombre: "Matheo Chavez",
    },
    {
        id: "2",
        nombre: "Anthony Cochea",
        },
        {
        id: "3",
        nombre: "Daniela Jaramillo",
    }
  ],
};

exports.unidades = {
  1: {
    nombre: "Matheo Chavez",
    departamentos: ["URBANIZACION*URBAN_1001", "URBANIZACION*URBAN_1002"],
  },
  2: {
    nombre: "Anthony Cochea",
    departamentos: ["URBANIZACION*URBAN_1003"],
  },
  3: {
    nombre: "Daniela Jaramillo",
    departamentos: ["URBANIZACION*URBAN_1004"],
  },
};
