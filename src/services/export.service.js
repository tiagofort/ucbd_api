const { findAll } = require('../repositories/dataResearch.repository');
const ExcelJS = require('exceljs');
const Dictionary = require('../docs/dictionary.doc');


const generateExcelBuffer = async () => {
    const rawData = await findAll();

    const translatedData = Dictionary.translateAcronyms(rawData);

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Survey Data');

    worksheet.columns = Object.keys(translatedData[0]).map(key => ({
        header: key,
        key,
        width: 25
    }));

    translatedData.forEach(row => {
        worksheet.addRow(row);
    });

    return await workbook.xlsx.writeBuffer();
};


module.exports = {
  generateExcelBuffer
};