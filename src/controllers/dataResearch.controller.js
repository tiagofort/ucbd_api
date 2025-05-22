const dataResearchService = require('../services/dataResearch.service');

const create = async (req, res) => {
  try {
    const result = await dataResearchService.createDataResearch(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar as respostas da pesquisa' });
  }
};

const getAll = async (req, res) => {
  try {
    const results = await dataResearchService.getAllDataResearch();
    res.status(200).json(results);
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