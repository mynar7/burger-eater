const con = require('./connection.js');

const orm = {
    selectAll: function(cb) {
        con.query('SELECT * FROM burgers', null, function(err, data){
            if (err) return console.log(err);
            cb(data);
        });
    },
    insertOne: function (burgerName, cb) {
        let burger = {
            burger_name: burgerName,
        }
        con.query('INSERT INTO burgers SET ?', burger, function(err, data) {
            if (err) return console.log(err);
            cb(data);
        });
    },
    updateOne: function (burgerId, cb) {
        let burger = {
            id: burgerId
        }
        let eaten = {
            devoured: true
        }
        con.query('UPDATE burgers SET ? where ?', [eaten, burger], function(err, data) {
            if (err) return console.log(err);
            cb(data);
        });
    }
};

module.exports = orm;