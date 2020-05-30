const MongoClient = require('mongodb').MongoClient;
const request = require("request-promise")
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'paises_db';
const collectionName = 'paises';

MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    insertCountries(collection);
});

const insertCountries = async (collection) => {
    for (let codigo = 1; codigo <= 300; codigo++) {
        const pais = await getCountry(codigo)
        if (pais) {
            pais.forEach(pais => {
                collection.findOneAndUpdate({ codigoPais: pais['callingCodes'][0] },
                    {
                        $setOnInsert: {
                            codigoPais: pais['callingCodes'][0],
                            nombrePais: pais['name'],
                            capitalPais: pais['capital'],
                            region: pais['region'],
                            poblacion: pais['population'],
                            latitud: pais['latlng'][0],
                            longitud: pais['latlng'][1],
                            superficie: pais['area']
                        }
                    },
                    {
                        new: true,
                        upsert: true
                    }, function (err) {
                        assert.equal(err, null);
                        console.log('Calling code found:', codigo, '. Country:', pais['name']);
                    });
            })
        }
    }
    // findAmericas(collection)
    // findAmericas100MillionPopulation(collection)
    // findNotInAfrica(collection)
    // updateEgypt(collection)
    // deleteCallingCode258(collection)
    // sortByName(collection)
}

const getCountry = async function (codigo) {
    try {
        return await request({
            uri: 'https://restcountries.eu/rest/v2/callingcode/' + codigo,
            method: "GET",
            json: true
        });
    } catch (error) {
        console.log('Calling code not found:', codigo);
    }

}

const findAmericas = function (collection) {
    const query = { region: 'Americas' };
    try {
        collection.find(query).toArray(function (err, docs) {
            assert.equal(err, null);
            assert.equal(11, docs.length);
            console.log(docs.length, 'countries are in the Americas region.');
            console.dir(docs)
        });
    } catch (error) {
        console.log("Unable to found countries in the Americas region.");
    }
}

const findAmericas100MillionPopulation = function (collection) {
    const query = { region: 'Americas', poblacion: { $gte: 100000000 } };
    try {
        collection.find(query).toArray(function (err, docs) {
            assert.equal(err, null);
            assert.equal(2, docs.length);
            console.log(docs.length, 'countries are in the Americas region, with a population greater than 100 million.');
            console.dir(docs)
        });
    } catch (error) {
        console.log("Unable to found countries in the Americas region, with a population greater than 100 million.");
    }
}

const findNotInAfrica = function (collection) {
    const query = { region: { $ne: 'Africa' } };
    try {
        collection.find(query).toArray(function (err, docs) {
            assert.equal(err, null);
            assert.equal(51, docs.length);
            console.log(docs.length, 'countries are not in the Africa region.');
            console.dir(docs)
        });
    } catch (error) {
        console.log("Unable to found countries outside the Africa region.");
    }
}

const updateEgypt = function (collection) {
    try {
        collection.updateOne({ nombrePais: 'Egypt' }, {
            $set: {
                nombrePais: 'Egipto',
                poblacion: 95000000
            }
        }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log('Updated Egypt name and population.');
        });
    } catch (error) {
        console.log("Unable to update Egypt.");
    }
}

const deleteCallingCode258 = function (collection) {
    try {
        collection.deleteOne({ codigoPais: "258" }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log('Deleted the country with callingCode assert.equal to', callingCode);
        });
    } catch (error) {
        console.log("Unable to delete 258.");
    }
}

const sortByName = function (collection) {
    try {
        collection.find().sort({ nombrePais: 1 }).toArray(function (err, docs) {
            assert.equal(err, null);
            assert.equal(109, docs.length);
            console.log('countries sorted by name in Ascending order.');
            console.dir(docs)
        });
    } catch (error) {
        console.log("Unable to get the countries sorted by name.");
    }
}