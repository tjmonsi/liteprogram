Package.describe({
  name: 'liteprogram:liteprogram-lib',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Library packages for the liteprogram project',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  
  var packages = [
    // Basic
    "meteor-platform@1.2.2",
    "reactive-var@1.0.5",
    "http@1.1.0",
    "email@1.0.6",
    // Copied from Telescope
    // For Users
    "service-configuration@1.0.4",
    "accounts-base@1.2.0",
    //"accounts-twitter@1.0.4",
    // "accounts-facebook@1.0.4",
    "accounts-password@1.1.1",
    "accounts-ui@1.1.5",
    // "accounts-google@1.0.4",
    "aldeed:simple-schema@1.3.3",
    "aldeed:collection2@2.3.3",
    "aldeed:autoform@5.3.2",
    "matb33:collection-hooks@0.7.13",
    "gildaspk:autoform-materialize@0.0.21",
    "aldeed:template-extension@3.4.3",
    "dburles:collection-helpers@1.0.3",
    "chuangbo:marked@0.3.2_4",
    "meteorhacks:fast-render@2.7.1",
    "meteorhacks:subs-manager@1.5.2",
    "percolate:synced-cron@1.2.1",
    "momentjs:moment@2.10.6",
    "aslagle:reactive-table@0.8.11",
    "utilities:avatar@0.8.2",
    "djedi:sanitize-html@1.7.0",
    "jparker:gravatar@0.3.1",
    "sanjo:meteor-files-helpers@1.1.0_7",
    "cmather:handlebars-server@2.0.0",
    "chuangbo:cookie@1.1.0",
    "ongoworks:speakingurl@5.0.1",
    // Using FlowRouter
    "kadira:flow-router@2.0.2",
    "kadira:blaze-layout@2.0.0",
    // Copied from Previous VMs
    "dbernhard:jquery-ui-draggable@0.1.2",
    "edgee:slingshot@0.7.1",
    "gadicohen:headers@0.0.27",
    "johnantoni:meteor-scrollto@0.0.2",
    "less@1.0.14",
    "meteorhacks:zones@1.6.0",
    "mquandalle:jquery-textcomplete@0.3.9_1",
    "sewdn:rangy@1.3.0_2",
    "underscore@1.0.3",
    // For Materialize
    "useraccounts:flow-routing@1.11.1",
    "useraccounts:materialize@1.10.0",
    //"softwarerero:accounts-t9n@1.1.3",
    
    "materialize:materialize@0.97.0"
  ]
  
  api.use(packages)
  
  api.imply(packages)
  
  api.addFiles([
    "lib/core.js",
    "lib/utils.js",
    "lib/callbacks.js",
    "lib/collections.js",
    "lib/modules.js",
    'lib/config.js',
    'lib/deep.js',
    'lib/deep_extend.js',
    'lib/autolink.js',
    'lib/themes.js',
    'lib/menus.js',
    'lib/base.js',
    ], ["client", "server"])
  
  
  api.export([
    "Bellweather",
    "_",
    
    ])
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ns-bellweather:bellweather-lib');
  api.addFiles('bellweather-lib-tests.js');
});
