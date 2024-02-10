const PaymentsApi = require('./index.js')

const configureRoutes = app => {
    PaymentsApi(app)
}

module.exports = configureRoutes