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

const getStates = async (req, res) => {
  try {
    const data = await sociodemographicService.listTotalByState();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data by state' });
  }
}

const getCities = async (req, res) => {
  try {
    const state = req.params.state;
    const data = await sociodemographicService.listTotalByCity(state);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data by city' });
  }
}

module.exports = {
  createSociodemographic,
  getAllSociodemographics,
  getSocioDemographicById,
  getStates,
  getCities
};
