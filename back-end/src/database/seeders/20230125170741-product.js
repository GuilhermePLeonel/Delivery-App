"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          name: "Skol Lata 250ml",
          price: 2.2,
          url_image: "http://localhost:3001/images/skol_lata_350ml.jpg",
        },
        {
          id: 2,
          name: "Heineken 600ml",
          price: 7.5,
          url_image: "http://localhost:3001/images/heineken_600ml.jpg",
        },
        {
          id: 3,
          name: "Antarctica Pilsen 300ml",
          price: 2.49,
          url_image: "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
        },

        {
          id: 4,
          name: "Brahma 600ml",
          price: 7.5,
          url_image: "http://localhost:3001/images/brahma_600ml.jpg",
        },
        {
          id: 5,
          name: "Skol 269ml",
          price: 2.19,
          url_image: "http://localhost:3001/images/skol_269ml.jpg",
        },
        {
          id: 6,
          name: "Skol Beats Senses 313ml",
          price: 4.49,
          url_image: "http://localhost:3001/images/skol_beats_senses_313ml.jpg",
        },
        {
          id: 7,
          name: "Becks 330ml",
          price: 4.99,
          url_image: "http://localhost:3001/images/becks_330ml.jpg",
        },

        {
          id: 8,
          name: "Brahma Duplo Malte 350ml",
          price: 2.79,
          url_image:
            "http://localhost:3001/images/brahma_duplo_malte_350ml.jpg",
        },
        {
          id: 9,
          name: "Becks 600ml",
          price: 8.89,
          url_image: "http://localhost:3001/images/becks_600ml.jpg",
        },
        {
          id: 10,
          name: "Skol Beats Senses 269ml",
          price: 3.57,
          url_image: "http://localhost:3001/images/skol_beats_senses_269ml.jpg",
        },

        {
          id: 11,
          name: "Stella Artois 275ml",
          price: 3.49,
          url_image: "http://localhost:3001/images/stella_artois_275ml.jpg",
        },
        {
          id: 12,
          name: "Imperio Puro Malte 600ml",
          price: 7.69,
          url_image:
            "http://localhost:3001/images/87276-cerveja-imperio-puro-malte-600ml (1).jpg",
        },
        {
          id: 13,
          name: "Imperio Lager Puro Malte lata 269ml",
          price: 3.69,
          url_image: "http://localhost:3001/images/6f12b3bfb4.jpg",
        },
        {
          id: 14,
          name: "Cerveja Schin 350Ml",
          price: 2.99,
          url_image:
            "http://localhost:3001/images/9afbbe33e63c6a4d0f8e19e1904a9dea.jpg",
        },
        {
          id: 15,
          name: "Refrigerante Sprite Limão Original 2l",
          price: 8.5,
          url_image:
            "http://localhost:3001/images/Refrigerante Sprite Limão Original 2l.jpeg",
        },
        {
          id: 16,
          name: "Refrigerante Sprite Limão Original Lata 350ml",
          price: 5.0,
          url_image:
            "http://localhost:3001/images/Refrigerante Coca-Cola Lata 350ml.jpg",
        },
        {
          id: 17,
          name: "Refrigerante Coca-Cola 1,5L",
          price: 10.75,
          url_image:
            "http://localhost:3001/images/Refrigerante Coca-Cola 1,5L.jpg",
        },
        {
          id: 18,
          name: "Refrigerante Coca-Cola Lata 350ml",
          price: 4.25,
          url_image:
            "http://localhost:3001/images/Refrigerante Coca-Cola Lata 350ml.jpg",
        },
        {
          id: 19,
          name: "Água Tônica Antarctica Lata 350ml",
          price: 3.75,
          url_image:
            "http://localhost:3001/images/Água Tônica Antarctica Lata 350ml.jpg",
        },
        {
          id: 20,
          name: "Vinho Gallioto Tinto Suave 1l",
          price: 23.1,
          url_image: "http://localhost:3001/images/galiotto-tinto-suave-1l.jpg",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
