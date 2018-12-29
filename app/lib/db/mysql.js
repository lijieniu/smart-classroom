'use strict';
const Base = require('./base');
module.exports = class MySQLDB extends Base {
    constructor(db) {
        super(db);
        this.db = db;
    }
    async getPager(name, query) {
        let result = await this.db.select(name);
        return result;
    }
    async add(name, entity) {
        let result = await this.db.insert(name, entity);
        return result.affectedRows === 1;
    }
    async query(name, query) {
        let result = await this.db.get(name, query.where);
        return result;
    }
};
