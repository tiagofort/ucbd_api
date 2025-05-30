const { findAll } = require('../repositories/dataResearch.repository');
const ExcelJS = require('exceljs');
const Dictionary = require('../docs/dictionary.doc');


async function generateExcelBuffer() {
  const rawData = await findAll();

  if (!rawData || rawData.length === 0) {
    throw new Error('Nenhum dado encontrado para exportar.');
  }

  const translatedData = Dictionary.translateAcronyms(rawData);

  if (!translatedData || translatedData.length === 0) {
    throw new Error('Erro ao traduzir os dados.');
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Survey Data');

  if (!translatedData[0] || Object.keys(translatedData[0]).length === 0) {
    throw new Error('Dados inválidos para exportação.');
  }

  worksheet.columns = Object.keys(translatedData[0]).map(key => ({
    header: key,
    key,
    width: 25
  }));
  

  translatedData.forEach(row => worksheet.addRow(row));

  return await workbook.xlsx.writeBuffer();
}


module.exports = {
  generateExcelBuffer
};