'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const Creates = sequelize.define(
  'creates',
  {
    createId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    createName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['createdBy']
      }
    ]
  }
);

module.exports = Creates;