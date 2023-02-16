const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vida: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ataque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    defensa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    velocidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    altura: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    createInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }

  },{ timestamps: false });
};
