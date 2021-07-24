const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.post('/api/pets', PetController.createPet);
    app.put('/api/pets/:id', PetController.updateOnePet);
    app.delete('/api/pets/:id', PetController.deleteOnePet)
}