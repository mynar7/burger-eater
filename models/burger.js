const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll(cb)
    },
    create: function(name, cb) {
        orm.insertOne(name, cb);
    },
    update: function(id, cb) {
        orm.updateOne(id, cb);
    }
};

module.exports = burger;