const dbName = 'db.json';
const { json } = require('express');
const fs = require('fs'); 
function initialize() {

    const initialdate = {
        koders: [],
        mentors: [],
        generation: [],
        course: [],
    }
  // Initialize the database
 const exist = fs.existsSync(dbName)
 if (!exist) {
     fs.writeFileSync(dbName, JSON.stringify(initialdate));
 }
};
//db..read('koders')
//db.read('mentors')
//db.read('generation')
//ds.read()
function read(key) {
    const content = fs.readFileSync(dbName, 'utf8');
    const json = JSON.parse(content);
    if (key && typeof key === 'string') {
        return json[key];
    };

    return json;
};
//db.save('koders', [])
//db.save('mentors', [])
//db.save('generation', [])
function save(key, newData) {
    const content = fs.readFileSync(dbName, 'utf8');
    const json = JSON.parse(content);
    const validkeys = Object.keys(initialdate);
    if(!key){
        throw new Error('Invalid key');
    }

    if (!validkeys.includes(key)) {
        throw new Error(`Invalid key. Valid keys are: ${validkeys.join(', ')}`);
    };

    if (!Array.isArray(newData)) {
        throw new Error('Invalid data');
    };

    if (!newData.length) {
        throw new Error('newData shpuld be an array with at least one element');
    };


    json[key] = newData;

    fs.writeFileSync(dbName, JSON.stringify(json));
    return json;
};

module.exports = {
    initialize,
    read,
    save,
};