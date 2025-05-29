const ignoredFiedls = [
    '_id',
    'age', 
    'answer_1',
    'answer_2',
    'answer_3',
    'answer_4',
    'answer_5',
    'answer_6',
    'answer_7',
    'answer_8',
    'answer_9',
    'answer_10',
    'answer_11',
    'answer_12',
    'answer_13',
    'answer_14',
    'answer_15',
    'answer_16',
    'answer_17',
    'answer_18',
    'answer_19',
    'answer_20',
    'answer_21',
    'obs',
    'city'
]

function acronymDictionary(data) {
    //Estados
    if (data == "AC") {
        return "Acre"
    }

    if (data == "AL") {
        return "Alagoas"
    }

    if (data == "AP") {
        return "Amapá"
    }

    if (data == "AM") {
        return "Amazonas"
    }

    if (data == "BA") {
        return "Bahia"
    }

    if (data == "CE") {
        return "Ceará"
    }

    if (data == "ES") {
        return "Espírito Santo"
    }

    if (data == "GO") {
        return "Goiás"
    }

    if (data == "MA") {
        return "Maranhão"
    }

    if (data == "MT") {
        return "Mato Grosso"
    }

    if (data == "MS") {
        return "Mato Grosso do Sul"
    }

    if (data == "MG") {
        return "Minas Gerais"
    }

    if (data == "PA") {
        return "Pará"
    }

    if (data == "PB") {
        return "Paraíba"
    }

    if (data == "PR") {
        return "Paraná"
    }

    if (data == "PE") {
        return "Pernambuco"
    }

    if (data == "PI") {
        return "Piauí"
    }

    if (data == "RJ") {
        return "Rio de Janeiro"
    }

    if (data == "RN") {
        return "Rio Grande do Norte"
    }

    if (data == "RS") {
        return "Rio Grande do Sul"
    }

    if (data == "RO") {
        return "Rondônia"
    }

    if (data == "RR") {
        return "Roraima"
    }

    if (data == "SC") {
        return "Santa Catarina"
    }

    if (data == "SP") {
        return "São Paulo"
    }

    if (data == "TO") {
        return "Tocantins"
    }

    if (data == "DF") {
        return "Distrito Federal"
    }

    //Tipo de instituição
    if (data == "R_PB") {
        return "Pública"
    }

    if (data == "R_PV") {
        return "Privada"
    }

    //sexo
    if (data == "M")
        return "Masculino"

    if (data == "F")
        return "Feminino"

    //estado civil
    if (data == "EC_CA")
        return "Casado(a) ou amasiado(a)"

    if (data == "EC_S")
        return "Solteiro(a)"

    if (data == "EC_V")
        return "Viúvo(a)"

    if (data == "EC_N")
        return "Namorando"

    //religiao
    if (data == "RL_A")
        return "Agnóstico"

    if (data == "RL_C")
        return "Cristianismo"

    if (data == "RL_E")
        return "Espírita"

    if (data == "RL_AT")
        return "Ateu"

    //Periodo do curso
    if (data == "12")
        return "1º/2º período"

    if (data == "34")
        return "3º/4º período"

    if (data == "56")
        return "5º/6º período"

    if (data == "78")
        return "7º/8º período"

    if (data == "90")
        return "9º/10º período"

    if (data == "112")
        return "11º/12º período"

    //tempo experiencia em estagios
    if (data == "TE_NA")
        return "Ainda não tive essa experiência"

    if (data == "TE_1S")
        return "Até 1 semestre"

    if (data == "TE_2S")
        return "2 semestres"

    if (data == "TE_M2S")
        return "Mais de 2 semestres"

    //Respostas SIM, NAO e NAO RECORDO

    if (data == "S")
        return "Sim"

    if (data == "N")
        return "Não"

    if (data == "NR")
        return "Não me recordo"

    //Respostas sobre experiencia em suicidio
    
    if (data == "S1")
        return "Sim. Familiares próximos."

    if (data == "S2")
        return "Sim. Amigos próximos."
        
    if (data == "S3")
        return "Sim. Mas não eram pessoas próximas."
        
    if (data == "N1")
        return "Não. Não tive contato com pessoas que pensaram e/ou tentaram se matar."     

    //Respostas faixa salarial 
    if (data == "f1")
        return "Até 1 salário mínimo (até R$ 1.045,00)"

    if (data == "f2")
        return "De 1 a 3 salários mínimos (de R$ 1.045,00 até R$ 3.135,00)"

    if (data == "f3")
        return "De 3 a 6 salários mínimos (de R$ 3.135,00 até R$ 6.270,00)"

    if (data == "f4")
        return "De 6 a 9 salários mínimos (de R$ 6.270,00 até R$ 9.405,00)"

    if (data == "f5")
        return "De 9 a 12 salários mínimos (de R$ 9.405,00 até R$ 12.540,00)."

    if (data == "f6")
        return "De 12 a 15 salários mínimos (de R$ 12.540,00 até R$ 15.675,00)"

    if (data == "f7")
        return "De 15 a 20 salários mínimos (de R$ 15.675,00 até R$ 20.900,00)"

    if (data == "f8")
        return "Mais de 20 salários mínimos (mais de R$ 20.900,00)"

    return data

}

const translateAcronyms = (dataArray) => {
    return dataArray.map(entry => {
        const translatedEntry = {};

        for (const [field, value] of Object.entries(entry)) {
            if (ignoredFiedls.includes(field)) {
                translatedEntry[field] = value;
                continue;
            }

            if (typeof value === 'string') {
                translatedEntry[field] = acronymDictionary(value);
            } else {
                translatedEntry[field] = value;
            }
        }

        return translatedEntry;
    });
};



module.exports = {
    translateAcronyms
} 