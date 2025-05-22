const mongoose = require('mongoose')


const Sociodemographic = new mongoose.Schema({
    state: String,
    city: String,
    institutionType: String,
    age: String,
    gender: String,
    marital_status: String,
    religion: String,
    semester: String,
    experience_time: String,
    suicideCourse: String,
    suicideDiscipline: String,
    suicideInternship: String,
    suicide: String,
    obs: String,
    salaryAverage: String,
}, { timestamps: true })

module.exports = mongoose.model('Sociodemographic', Sociodemographic)