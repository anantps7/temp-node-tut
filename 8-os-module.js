const os = require('os')
// info about current user 
const user = os.userInfo()
console.log(user)

// method returs the system uptime in second
console.log(`the system uptime ${os.uptime()} second`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)