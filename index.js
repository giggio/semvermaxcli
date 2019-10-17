let args = process.argv.slice(2);
var semver = require('semver');
const maxVersion = semver.maxSatisfying(args, '*');
if (!maxVersion) process.exit(1);
console.log(maxVersion);