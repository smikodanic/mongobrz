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

  // remove the docs
  const moQuery = {}; // delete all docs
  const resp = await mongobrz.deleteMulti(moQuery);
  console.log('deletedMulti resp::', resp);

  // disconnection
  await mongobrz.disconnect();
};


main().catch(console.log);

