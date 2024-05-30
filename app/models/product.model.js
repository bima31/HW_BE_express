module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nama_product: {
      type: Sequelize.STRING
    },
    qty_product: {
      type: Sequelize.INTEGER
    }
  });

  return Product;
};
