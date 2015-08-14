/**
 * Bellweather theme settings and methods.
 * @namespace Bellweather.theme
 */
Bellweather.theme = {};

/**
 * Default settings for Bellweather themes.
 * @type {Object}
 */
Bellweather.theme.settings = {
  useDropdowns: true // Enable/disable dropdown menus in a theme
};

/**
 * Get a theme setting value.
 * @param {String} setting
 * @param {String} defaultValue
 */
Bellweather.theme.getSetting = function (setting, defaultValue) {
  if (typeof this.settings[setting] !== 'undefined') {
    return this.settings[setting];
  } else {
    return typeof defaultValue === 'undefined' ? '' : defaultValue;
  }
};