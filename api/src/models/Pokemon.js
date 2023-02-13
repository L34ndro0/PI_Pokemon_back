const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
        type: DataTypes.INTEGER,
        
        primaryKey: true,        
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    vida: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ataque: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    defensa: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    
  });
};
