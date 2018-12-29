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
};
