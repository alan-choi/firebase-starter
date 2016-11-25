module.exports = {
  path: 'createtrip',

  getComponents: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./pages/CreateTripPage').default);
    })
  }
}
