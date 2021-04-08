const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const Cliente = sequelize.define("Mercadoria", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    descricao: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    preco: {
        allowNull: false,
        type: Sequelize.INTEGER(),
    },
    estoque: {
        allowNull: false,
        type: Sequelize.INTEGER(),
    }
});

module.exports = Cliente;