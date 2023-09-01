import * as envt from "dotenv";

envt.config({
    path: process.env.NODE_ENV = 'dev' ?'.env.dev' : '.env.production'
});

export default { 
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.PORT, 
    username: process.env.DB_USERNAME,
    password: process.env.DB_USERPASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.TYPEORM_SYNC,
    logging: process.env.TYPEORM_LOG,
    entities: [process.env.TYPEORM_ENTITIES_DIR], 
    migrations: [process.env.TYPEORM_MIGRATIONS_DIR],
}