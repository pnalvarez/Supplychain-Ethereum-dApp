const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);    //remove build directory

const supplychainPath = path.resolve(__dirname, 'contracts','Supplychain.sol'); // read supplychain file
// const requestPath = path.resolve(__dirname, 'contracts','Request.sol');
// const managerRequestsPath = path.resolve(__dirname, 'contracts','ManagerRequest.sol');
// const transferRequest = path.resolve(__dirname, 'contracts','TransferRequest.sol');

const source = fs.readFileSync(supplychainPath, 'utf8');

const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output){ //write contracts as jsons

  fs.outputJsonSync(path.resolve(buildPath, contract.replace(':','') + '.json'), output[contract]);
}
