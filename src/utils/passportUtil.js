const crypto=require('crypto')

function genPassword(password){
    var salt=crypto.randomBytes(32).toString('hex')
    var hash=crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex')
    return {
        salt:salt,
        hash:hash
    }
}

function verifyUser(password,hash,salt){
    return hash===crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex')
}

module.exports.genPassword=genPassword
module.exports.verifyUser=verifyUser