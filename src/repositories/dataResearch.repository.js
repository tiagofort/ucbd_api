const DataResearch = require('../models/dataResearch.model');

const create = async (data) => {
  return await DataResearch.create(data);
};

const findAll = async () => {
  const data = await DataResearch.find().populate('sociodemographic_id').lean();

  const flattened = data.map(item => ({
    dataResearch_id: item._id,
    ...item,
    ...item.sociodemographic_id,
    sociodemographic_id: item.sociodemographic_id?._id,
  }));
  
  return flattened;
};

const findById = async (id) => {
  return await DataResearch.findById(id).populate('sociodemographic_id').lean();
};

const deleteById = async (id) => {
  return DataResearch.findByIdAndDelete(id);
}

module.exports = {
  create,
  findAll,
  findById,
  deleteById
};