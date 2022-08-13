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

  // fetch the doc
  const moQuery = { url: 'http://added.com' };
  const sort = '-created_at';
  const select = '_id url text';
  const doc = await mongobrz.getOne(moQuery, sort, select);
  console.log('doc::', doc);

  // disconnection
  await mongobrz.disconnect();
};


main().catch(console.log);

