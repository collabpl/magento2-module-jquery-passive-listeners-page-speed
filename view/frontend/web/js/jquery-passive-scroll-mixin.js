/**
 * @category  Collab
 * @package   Collab\JqueryPassiveListenersPageSpeed
 * @author    Marcin Jędrzejewski <m.jedrzejewski@collab.pl>
 * @copyright 2024 Collab
 * @license   MIT
 */
// https://stackoverflow.com/questions/60357083/does-not-use-passive-listeners-to-improve-scrolling-performance-lighthouse-repo
define([], function () {
    'use strict';

    function addPassiveListeners(jQuery)
    {
        jQuery.event.special.touchstart = {
            setup: function (_, ns, handle) {
                this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
            }
        };

        jQuery.event.special.touchmove = {
            setup: function (_, ns, handle) {
                this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
            }
        };

        jQuery.event.special.wheel = {
            setup: function (_, ns, handle) {
                this.addEventListener("wheel", handle, { passive: true });
            }
        };

        jQuery.event.special.mousewheel = {
            setup: function (_, ns, handle) {
                this.addEventListener("mousewheel", handle, { passive: true });
            }
        };
    }

    return function ($) {
        addPassiveListeners($);

        return $;
    };
});
