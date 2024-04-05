// AMBIENTE DE BASE DE DATOS EN PRODUCCION

// SSequelize es un ORM, al igual que hibernate
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

// Pra obtener las variable de entorno para el deployment en produccion
dotenv.config()

// process.env.....  Son mis variables de entorno creados por mi, en el archivo .env, instalar previamente en el proyecto npm i dotenv
const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;


/*
// AMBIENTE DE BASE DE DATOS EN ENTORNO DE DESARROLLO

// Sequelize es un ORM, al igual que hibernate

import Sequelize from 'sequelize';
import dotenv from 'dotenv';

// Pra obtener las variable de entorno para el deployment en produccion
dotenv.config()

// process.env.....  Son mis variables de entorno creados por mi, en el archivo .env, instalar previamente en el proyecto npm i dotenv
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {  
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;

*/






