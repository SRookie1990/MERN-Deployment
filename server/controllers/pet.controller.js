const Pet = require("../models/pet.model");

module.exports.findAllPets = (req, res) => {
    Pet.find().sort({type: 1})
        .then(allPets => res.json(allPets))
        .catch(err => res.status(400).json(err));
};
// Sort Bonus freature+++++++++++++++++++++++++++++++++++++++++++
  // .sort({name: 'asc'})
  // Fetches only selected items
  //   .select("name _id")

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id})
      .then(onePet => res.json(onePet))
      .catch(err => res.status(400).json(err));
  };

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err)) 
}

module.exports.updateOnePet = (req, res) => {
    // "runValidators: true" = Runs Pet model validation for updated object
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOnePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json({message: "error delete", error: err}))
}