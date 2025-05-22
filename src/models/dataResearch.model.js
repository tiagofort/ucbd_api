const mongoose = require('mongoose');

const DataResearch = new mongoose.Schema({
  answer_1: String,
  answer_2: String,
  answer_3: String,
  answer_4: String,
  answer_5: String,
  answer_6: String,
  answer_7: String,
  answer_8: String,
  answer_9: String,
  answer_10: String,
  answer_11: String,
  answer_12: String,
  answer_13: String,
  answer_14: String,
  answer_15: String,
  answer_16: String,
  answer_17: String,
  answer_18: String,
  answer_19: String,
  answer_20: String,
  answer_21: String,
  email: String,
  sociodemographic_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sociodemographic'
  }
}, { timestamps: true });

module.exports = mongoose.model('DataResearch', DataResearch);