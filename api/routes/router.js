const { Router } = require('express');
const controller = require('../controllers/controller');

const routes = Router();

/**
 * You can adapt the generic paths used in the API to fit the object
 * you are using, e.g., if you use an Animal class, all the paths
 * might start with '/animals'.
 */
routes.get('/animals', controller.getAll);
routes.post('/animals', controller.create);
routes.put('/animals/:id', controller.update);
routes.delete('/animals/:id', controller.delete);

module.exports = routes;