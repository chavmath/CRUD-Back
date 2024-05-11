exports.inmuebles = [
  {
    nombre: "urbanizacion urban",
    id: 1,
    imagen: "https://pagos.starguest.ec:7083/imagenes/urban.png",
  },
  {
    nombre: "Urbanizacion El Condado",
    id: 2,
    imagen: "https://pagos.starguest.ec:7083/imagenes/elcondado.jpg",
  },
  {
    nombre: "Urbanizacion El Condado 2",
    id: 3,
    imagen: "https://pagos.starguest.ec:7083/imagenes/condado2.jpg",
  },
  {
    nombre: "AQUARELA-Uribe Schwarzkopf",
    id: 11,
    imagen: "https://pagos.starguest.ec:7083/imagenes/aquarela.jpg",
  },
];

exports.copropietarios = {
  1: [
    {
      id: "1",
      nombre: "MATHEO CHAVEZ",
    },
    {
      id: "2",
      nombre: "ANTHONY COCHEA",
    },
    {
      id: "3",
      nombre: "JUAN ARISTIZABAL",
    },
  ],
  11: [
    {
      id: "1",
      nombre: "MATHEO CHAVEZ",
    },
    {
        id: "2",
        nombre: "ANTHONY COCHEA",
        },
        {
        id: "3",
        nombre: "JUAN ARISTIZABAL",
    }
  ],
};

exports.unidades = {
  1: {
    nombre: "MATHEO CHAVEZ",
    departamentos: ["URBANIZACION*URBAN_1001", "URBANIZACION*URBAN_1002"],
  },
  2: {
    nombre: "ANTHONY COCHEA",
    departamentos: ["URBANIZACION*URBAN_1003"],
  },
  3: {
    nombre: "JUAN ARISTIZABAL",
    departamentos: ["URBANIZACION*URBAN_1004"],
  },
};
