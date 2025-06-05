const Sociodemographic = require('../models/socioDemographic.model');

const create = async (data) => {
  return await Sociodemographic.create(data);
};

const findAll = async () => {
  return await Sociodemographic.find();
};

const findById = async (id) => {
  return await Sociodemographic.findById(id);
};

const deleteById = async (id) => {
    return Sociodemographic.findByIdAndDelete(id);
}

const getTotalByState = async () => {
  return Sociodemographic.aggregate([
    { $group: { _id: '$state', total: { $sum: 1 } } },
    { $project: { state: '$_id', total: 1, _id: 0 } }
  ]);
}

const getTotalByCity = async (state) => {
  return Sociodemographic.aggregate([
    { $match: { state } },
    { $group: { _id: '$city', total: { $sum: 1 } } },
    { $project: { city: '$_id', total: 1, _id: 0 } }
  ]);
}
 
module.exports = {
  create,
  findAll,
  findById,
  deleteById,
  getTotalByState,
  getTotalByCity
};
