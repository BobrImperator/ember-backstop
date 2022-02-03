'use strict';
const backstopjs = require('backstopjs');

module.exports = {
  name: 'backstop:report',
  aliases: ['backstop-report'],
  availableOptions: [
    { name: 'filter', type: String, aliases: ['f'], default: ''},
    { name: 'config', type: String, aliases: ['c'], default: './backstop.js' },
    { name: 'docker', type: Boolean, aliases: ['d'], default: false },
  ],
  description: 'Open the most-recently generated BackstopJS test report.',
  run(commandOptions) {
    process.chdir('./ember-backstop');
    return backstopjs('openReport', {
      config: commandOptions.config, 
      filter: commandOptions.filter,
      docker: commandOptions.docker,
    });
  }
};
