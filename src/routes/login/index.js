module.exports = {
  path: 'login',

  getComponents: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./pages/LoginPage.jsx').default);
    })
  }
}
