const dataResearchRepository = require('../repositories/dataResearch.repository');
const socioDemographicRepository = require('../repositories/socioDemographic.repository');

const createDataResearch = async (data) => {
  return await dataResearchRepository.create(data);
};

const getAllDataResearch = async () => {
  return await dataResearchRepository.findAll();
};

const getDataResearchById = async (id) => {
  return await dataResearchRepository.findById(id);
};

const deleteWithSocioDemographic = async (dataResearchId) => {
    const dataResearch = await dataResearchRepository.findById(dataResearchId);

    if (!dataResearch) {
      throw new Error('DataResearch not found');
    }

    const sociodemographicId = dataResearch.sociodemographic_id;
    if (sociodemographicId) {
      await socioDemographicRepository.deleteById(sociodemographicId);
    }

    await dataResearchRepository.deleteById(dataResearchId);

    return { message: 'DataResearch and associated SocioDemographic deleted successfully' };
}

const countAnswers = async () => {
  return await dataResearchRepository.countAnswers();
}



module.exports = {
  createDataResearch,
  getAllDataResearch,
  getDataResearchById,
  deleteWithSocioDemographic,
  countAnswers
};