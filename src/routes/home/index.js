module.exports = {
  path: '/',

  getComponents: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./pages/HomePage').default);
    })
  }
}
