module.exports = {
  name: 'serve',
  help: 'Serves files using browser-sync',
  task: (gulp, cfg) => function () {
    const bs = require('browser-sync')
    bs(cfg)
  },
  config: {
    server: './build',
    open: false,
    notify: false,
    files: ['build/**/*.{js,css,html,svg,png}']
  }
}
