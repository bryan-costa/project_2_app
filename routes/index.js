module.exports = app => {
    require('./userRoutes.js')(app)
    require('./occasionRoutes.js')(app)
    require('./giftRoutes.js')(app)
    require('./purchaseRoutes.js')(app)
}
