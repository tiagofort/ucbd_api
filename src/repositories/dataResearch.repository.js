const DataResearch = require('../models/dataResearch.model');

const create = async (data) => {
  return await DataResearch.create(data);
};

const findAll = async () => {
  return await DataResearch.find().populate('sociodemographic_id');
};

const findById = async (id) => {
  return await DataResearch.findById(id).populate('sociodemographic_id');
};

module.exports = {
  create,
  findAll,
  findById
};