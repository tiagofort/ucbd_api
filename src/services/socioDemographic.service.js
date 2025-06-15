const sociodemographicRepository = require('../repositories/socioDemographic.repository');
const Dictionary = require('../docs/dictionary.doc');

const createSociodemographic = async (data) => {
  return await sociodemographicRepository.create(data);
};

const getAllSociodemographics = async () => {
  return await sociodemographicRepository.findAll();
};

const getSociodemographicById = async (id) => {
  return await sociodemographicRepository.findById(id);
};

const listTotalByState = async () => {
  const translatedData = sociodemographicRepository.getTotalByState();
  return Dictionary.acronymDictionary(translatedData);
}

const listTotalByCity = async (state) => {
  return sociodemographicRepository.getTotalByCity(state);
}

module.exports = {
  createSociodemographic,
  getAllSociodemographics,
  getSociodemographicById,
  listTotalByState,
  listTotalByCity
};
