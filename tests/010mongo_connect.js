const Mongobrz = require('../index.js');

const main = async () => {
  // mongo instance
  const mongobrz = new Mongobrz();

  // test connection
  const mo_uri = 'mongodb://dex8_freeuser:freedom@5.189.161.70:27017/dex8-freepool03';
  await mongobrz.connect(mo_uri);

  await new Promise(r => setTimeout(r, 2100));

  // test disconnection
  await mongobrz.disconnect();
};


main().catch(console.log);

