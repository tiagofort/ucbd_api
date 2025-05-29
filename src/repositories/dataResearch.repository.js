const DataResearch = require('../models/dataResearch.model');

const create = async (data) => {
  return await DataResearch.create(data);
};

const findAll = async () => {
  const data = await DataResearch.find().populate('sociodemographic_id').lean();

  const flattened = data.map(item => ({
    ...item,
    ...item.sociodemographic_id,
    sociodemographic_id: item.sociodemographic_id?._id,
  }));
  
  return flattened;
  // return flattened;
};

const findById = async (id) => {
  return await DataResearch.findById(id).populate('sociodemographic_id');
};

module.exports = {
  create,
  findAll,
  findById
};