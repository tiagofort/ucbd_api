const sociodemographicRepository = require('../repositories/socioDemographic.repository');

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
  return sociodemographicRepository.getTotalByState();
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
