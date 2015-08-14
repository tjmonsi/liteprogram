/**
 * Template modules let you insert templates in specific zones in the app's layout. 
 * @namespace Bellweather.modules
 */

Bellweather.modules = {};

/**
 * Add a module to a template zone
 * @param {string} zone - The name of the zone
 * @param {Object|Object[]} module - The module object (or an array of modules)
 * @param {string} module.template - The template to include
 * @param {number} module.order - The order of the template in the zone
 *
 * @example
 * Bellweather.modules.add("hero", {
 *   template: "newsletterBanner",
 *   order: 10
 * });
 */
Bellweather.modules.add = function (zone, module) {

  if (zone==="add" || zone==="remove" || zone==="removeAll" || zone==="get") throw Meteor.Error("Cannot have a name add or remove or removeAll or get")

  // if module zone array doesn't exist yet, initialize it
  if (typeof Bellweather.modules[zone] === "undefined") {
    Bellweather.modules[zone] = [];
  }

  if (Array.isArray(module)) {

    var modules = module; // we're dealing with an Array, so let's add an "s"
    modules.forEach( function (module) {
      Bellweather.modules[zone].push(module);
      // console.log(module)
    });

  } else {

    Bellweather.modules[zone].push(module);

  }
};

/**
 * Remove a module from a zone
 * @param {string} zone - The name of the zone
 * @param {string} template - The name of the template to remove
 */
Bellweather.modules.remove = function (zone, template) {
  if (zone==="add" || zone==="remove" || zone==="removeAll" || zone==="get") throw Meteor.Error("Cannot have a name add or remove or removeAll or get")
  
  Bellweather.modules[zone] = _.reject(Bellweather.modules[zone], function (module) {
    return module.template === template;
  });
};

/**
 * Removes all modules from a zone
 * @param {string} zone - The name of the zone
 */
Bellweather.modules.removeAll = function (zone) {
  
    if (zone==="add" || zone==="remove" || zone==="removeAll" || zone==="get") throw Meteor.Error("Cannot have a name add or remove or removeAll or get")
  
  Bellweather.modules[zone] = [];
};

/**
 * Retrieve an array containing all modules for a zone
 * @param {string} zone - The name of the zone
 * @returns {Object[]} Returns a sorted array of the zone's modules
 */
Bellweather.modules.get = function (zone) {
  
    if (zone==="add" || zone==="remove" || zone==="removeAll" || zone==="get") throw Meteor.Error("Cannot have a name add or remove or removeAll or get")
  
  return _.sortBy(Bellweather.modules[zone], "order");
};