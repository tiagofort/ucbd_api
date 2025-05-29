const dataResearchRepository = require('../repositories/dataResearch.repository');

const createDataResearch = async (data) => {
  return await dataResearchRepository.create(data);
};

const getAllDataResearch = async () => {
  return await dataResearchRepository.findAll();
};

const getDataResearchById = async (id) => {
  return await dataResearchRepository.findById(id);
};



module.exports = {
  createDataResearch,
  getAllDataResearch,
  getDataResearchById,
};