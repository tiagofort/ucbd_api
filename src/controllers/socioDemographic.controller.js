const sociodemographicService = require('../services/socioDemographic.service');

const createSociodemographic = async (req, res) => {
  try {
    const result = await sociodemographicService.createSociodemographic(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar dados sociodemográficos' });
  }
};

const getAllSociodemographics = async (req, res) => {
  try {
    const results = await sociodemographicService.getAllSociodemographics();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
};

const getSocioDemographicById = async (req, res) => {
  try {
    const result = await sociodemographicService.getSociodemographicById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Registro não encontrado' });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar registro' });
  }
};

module.exports = {
  createSociodemographic,
  getAllSociodemographics,
  getSocioDemographicById
};
