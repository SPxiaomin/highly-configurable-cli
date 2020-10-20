const path = require('path');

function extractCallDir () {
  // extract api.render() callsite file location using error stack
  const obj = {};
  Error.captureStackTrace(obj);

  console.log(obj.stack);
  
  const callSite = obj.stack.split('\n')[3];
  const fileName = callSite.match(/\s\((.*):\d+:\d+\)$/)[1];
  return path.dirname(fileName);
}

exports.extractCallDir = extractCallDir;
