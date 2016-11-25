module.exports = {
  path: 'signup',

  getComponents: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./pages/SignUpPage.jsx').default);
    })
  }
}
