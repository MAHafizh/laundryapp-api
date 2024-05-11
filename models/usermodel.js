import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

export const Users = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

export const Orders = db.define('orders', {
    order_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    formal_shirt: {
        type: DataTypes.INTEGER
    },
    shirt: {
        type: DataTypes.INTEGER
    },
    outer: {
        type: DataTypes.INTEGER
    },
    jeans: {
        type: DataTypes.INTEGER
    },
    pants: {
        type: DataTypes.INTEGER
    },
    underwear: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true
});

Users.hasMany(Orders, { as: 'orders', foreignKey: 'user_id' });
Orders.belongsTo(Users, { foreignKey: 'user_id' });