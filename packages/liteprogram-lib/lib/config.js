/**
 * Bellweather configuration namespace
 * @namespace Bellweather.config
 */
Bellweather.config = {};

Bellweather.config.customPrefix = "custom_";

 /**
 * Subscriptions namespace
 * @namespace Bellweather.subscriptions
 */
Bellweather.subscriptions = [];

/**
 * Add a subscription to be preloaded
 * @param {string} subscription - The name of the subscription
 */
Bellweather.subscriptions.preload = function (subscription) {
  Bellweather.subscriptions.push(subscription);
};