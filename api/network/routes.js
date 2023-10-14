const empresa = require('../components/empresa/interface')

const routes = function(server) {
    server.use('/empresa', empresa)
}

module.exports = routes