const { generateExcelBuffer } = require('../services/export.service');

const exportExcel = async (req, res) => {
    try {
        const buffer = await generateExcelBuffer();

        res.setHeader('Content-Disposition', 'attachment; filename="survey-export.xlsx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    } catch (err) {
        console.error('Erro ao exportar Excel:', err);
        res.status(500).json({ message: 'Erro ao gerar o arquivo Excel' });
    }
};

module.exports = { exportExcel };
