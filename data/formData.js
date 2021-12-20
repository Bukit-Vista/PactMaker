// Getting data from API to be signed

function formData(contract_id){
    let data = {
        "name": "Sally Smiths",
        "email": "sarah@sawsnscissors.co",
        "propertyName": "Saws & Sabers Co.",
        "checkIn": "2021-12-01",
        "checkOut": "2021-12-05",
        "payment": ""
    };
    return data
}

module.exports = formData();