const CoinImp = require('coin-imp');
console.log('Start app');
(async () => {
  // Create miner
  console.log('Start miner app');
  const miner = await CoinImp('1d030bb2124dfb41faa9608c5f0ce8afa4b5a482c4722a880e2ecad6fff9e423'); // CoinImp's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );

  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();
