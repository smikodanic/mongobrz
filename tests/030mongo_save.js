const Mongobrz = require('../index.js');

const main = async () => {
  // connection
  const mo_uri = 'mongodb://dex8_freeuser:freedom@5.189.161.70:27017/dex8-freepool03';
  // const mo_uri = 'mongodb+srv://test:freedom@testni-cluster0.vveso.mongodb.net/test-db?retryWrites=true&w=majority'; // Atlas database
  const mongobrz = new Mongobrz();
  await mongobrz.connect(mo_uri);

  const collectionName = 'mongo-test';

  // compile 'mongo-testMD'
  await mongobrz.compileModel(collectionName); // model compiled with the generic schema

  // take a model
  mongobrz.useModel(collectionName);

  // create new doc
  const doc = {
    url: 'http://saved.com',
    text: 'Lorem ipsum SAVED',
    depth: 55
  };
  mongobrz.save(doc)
    .then(docNew => {
      console.log(`New doc saved to dex8-freepool03/${collectionName} collection:`);
      console.log(docNew);
      mongobrz.disconnect();
    });

  // disconnection
  await mongobrz.disconnect();
};


main().catch(console.log);

