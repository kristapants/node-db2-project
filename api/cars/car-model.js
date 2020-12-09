const db = require('../../data/dbConfig');

module.exports = {
    get(id) {
        if (id) {
            return db('cars')
              .where('id', id)
              .first();
          } else {
            return db('cars');
          }
    }
    
};