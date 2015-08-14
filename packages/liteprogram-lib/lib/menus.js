/**
 * Menus namespace
 * @namespace Bellweather.menuItems
 */
Bellweather.menuItems = {};

/**
 * Add one or more items to a menu
 * @param {string} menu - The name of the menu
 * @param {Object|Object[]} item - The menu item object (or an array of items)
 *
 * @example <caption>Using a named route</caption>
 * Bellweather.menuItems.add("viewsMenu", {
 *   route: 'postsDaily',
 *   label: 'daily',
 *   description: 'day_by_day_view'
 * });
 *
 * @example <caption>Using a route function</caption>
 * Bellweather.menuItems.add("userMenu", {
 *   route: function () {
 *     return Router.path('user_profile', {_idOrSlug: Meteor.user().Bellweather.slug});
 *   },
 *   label: 'profile',
 *   description: 'view_your_profile'
 * });
 *
 */
 
Bellweather.menuItems.add = function (menu, item) {

  if (menu==="add" || menu==="remove" || menu==="removeAll" || menu==="get") throw Meteor.Error("Cannot have a name add or remove or removeAll or get")
  // if menu items array doesn't exist yet, initialize it
  if (typeof Bellweather.menuItems[menu] === "undefined") {
    Bellweather.menuItems[menu] = [];
  }

  if (Array.isArray(item)) {

    var items = item; // we're dealing with an Array, so let's add an "s"
    items.forEach( function (item) {
      Bellweather.menuItems[menu].push(item);
    });

  } else {

    Bellweather.menuItems[menu].push(item);

  }
};

/**
 * Remove an item from a menu
 * @param {string} menu - The name of the menu
 * @param {string} label - The label of the item to remove
 */
Bellweather.menuItems.remove = function (menu, label) {
  
  if (menu==="add" || menu==="remove" || menu==="removeAll" || menu==="get") throw Meteor.Error("Cannot have a name add or remove or removeAll or get")
  
  Bellweather.menuItems[menu] = _.reject(Bellweather.menuItems[menu], function (menu) {
    return menu.label === label;
  });
};

/**
 * Remove all items from a menu
 * @param {string} menu - The name of the menu
 */
Bellweather.menuItems.removeAll = function (menu) {
  if (menu==="add" || menu==="remove" || menu==="removeAll" || menu==="get") throw Meteor.Error("Cannot have a name add or remove or removeAll or get")
  
  Bellweather.menuItems[menu] = [];
};

/**
 * Retrieve an array containing all items for a menu
 * @param {string} menu - The name of the menu
 */
Bellweather.menuItems.get = function (menu) {
  
  if (menu==="add" || menu==="remove" || menu==="removeAll" || menu==="get") throw Meteor.Error("Cannot have a name add or remove or removeAll or get")
  
  return _.sortBy(Bellweather.menuItems[menu], "order");
};