const knex = require('knex');

const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./src/database/to-do-list.db", 
    },
    useNullAsDefault: true, 
    pool: {
        min: 0, 
        max: 1,
				afterCreate: (conn: any, cb: any) => {
            conn.run("PRAGMA foreign_keys = ON", cb)
        } 
    }
});

module.exports = db;