const fs = require('fs');

function writeLog(record){
    fs.writeFileSync("./order.txt", `${record} \r\n`, {
       flag: "a+"
    });
}

module.exports = {
    writeLog
}