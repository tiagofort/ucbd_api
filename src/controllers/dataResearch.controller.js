const dataResearchService = require('../services/dataResearch.service');
const socioDemographicService = require('../services/socioDemographic.service');
const Dictionary = require('../docs/dictionary.doc');

const create = async (req, res) => {
  const { socio, research } = req.body;
  try {
    const socioDemo = await socioDemographicService.createSociodemographic(socio)
    const dataResearch = await dataResearchService.createDataResearch({
      ...research,
      sociodemographic_id: socioDemo._id
    });
     res.status(201).json({
      message: 'Dados salvos com sucesso!',
      research: dataResearch,
      socio: socioDemo
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar as respostas da pesquisa' });
  }
};

const getAll = async (req, res) => {
  try {
    const results = await dataResearchService.getAllDataResearch();
    const translate = Dictionary.translateAcronyms(results);
    res.status(200).json(translate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar os dados da pesquisa' });
  }
};

const getById = async (req, res) => {
  try {
    const result = await dataResearchService.getDataResearchById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Registro não encontrado' });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar o registro' });
  }
};

module.exports = {
  create,
  getAll,
  getById
};