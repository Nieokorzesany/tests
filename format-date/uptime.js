const os = require("os");
const formatDate = require("./index");
//os.uptime()
const uptime = formatDate(os.uptime());

console.log(`Current uptime is ${uptime}`);
