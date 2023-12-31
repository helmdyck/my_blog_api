const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Creator = require("./Creator");
const Category = require("./Category");
const Article = require("./Article");

Creator.initModel(sequelize);
Category.initModel(sequelize);
Article.initModel(sequelize);

Creator.hasMany(Article)
Article.belongsTo(Creator)

Category.hasMany(Article)
Article.belongsTo(Category)

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

module.exports = {
  sequelize,
  Creator,
  Category,
  Article,
};
