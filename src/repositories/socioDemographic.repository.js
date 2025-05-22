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

module.exports = {
  create,
  findAll,
  findById
};
