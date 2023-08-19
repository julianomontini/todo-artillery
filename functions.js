const uuid = require('uuid').v4

function generateUsername(context, events, done){
    context.vars['username'] = uuid()
    done();
}

module.exports = {
    generateUsername
}