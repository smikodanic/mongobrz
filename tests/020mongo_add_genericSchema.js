const Mongobrz = require('../index.js');

const main = async () => {
  // connection
  const mo_uri = 'mongodb://dex8_freeuser:freedom@5.189.161.70:27017/dex8-freepool03';
  const mongobrz = new Mongobrz();
  await mongobrz.connect(mo_uri);

  const collectionName = 'mongo-test';

  // compile 'mongo-testMD'
  await mongobrz.compileModel(collectionName); // model compiled with the generic schema

  // take a model
  mongobrz.useModel(collectionName);

  // create new doc
  const doc = {
    url: 'http://added.com',
    text: 'Lorem ipsum',
    depth: 55
  };
  mongobrz.add(doc)
    .then(docNew => {
      console.log(`New doc added to dex8-freepool03/${collectionName} collection:`);
      console.log(docNew);
      mongobrz.disconnect();
    });

  // disconnection
  await mongobrz.disconnect();
};


main().catch(console.log);

