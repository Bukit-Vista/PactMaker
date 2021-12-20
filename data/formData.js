function formData(contract_id){
    let data = {
        "name": "Sally Smiths",
        "email": "sarah@sawsnscissors.co",
        "propertyName": "Saws & Sabers Co.",
        "checkIn": "2021-12-01",
        "checkOut": "2021-12-05",
        "articles": [
            {
                "title": "Payment Schedule",
                "description": "Long text with \n multiple lines"
            },
            {
                "title": "Payment Schedule",
                "description": "Long text with \n multiple lines"
            }
        ]
    };
    return data
}

module.exports = formData();