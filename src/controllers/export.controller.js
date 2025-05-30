const { generateExcelBuffer } = require('../services/export.service');

async function exportExcel(req, res) {
  try {
    const buffer = await generateExcelBuffer();

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=survey-data.xlsx');
    return res.send(buffer);
    
  } catch (error) {
    console.error('Erro ao exportar Excel:', error);

    return res.status(500).json({
      message: 'Erro interno ao gerar o Excel.',
      detail: error.message,
    });
  }
}

module.exports = { exportExcel };
