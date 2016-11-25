module.exports = {
  path: 'home',

  getComponents: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./pages/HomePage').default);
    })
  }
}
